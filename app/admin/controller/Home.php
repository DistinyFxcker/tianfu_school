<?php

namespace app\admin\controller;
use app\common\model\ListProduct;
use think\Session;
class Home extends Permissions
{
    public function index()
    {
        $this->assign('title','');
        $this->assign('info','');
       return $this->fetch();
    }


    public function publish()
    {
        //获取菜单id
        $id = $this->request->has('id') ? $this->request->param('id', 0, 'intval') : 0;
        $model = new ListProduct();
        //是正常添加操作
        if($id > 0) {
            //是修改操作
            if($this->request->isPost()) {
                //是提交操作
                $post = $this->request->post();
                //验证  唯一规则： 表名，字段名，排除主键值，主键名
                $validate = new \think\Validate([
                    ['title', 'require', '标题不能为空'],
                    ['content', 'require', '内容不能为空'],
                    ['thumb', 'require', '请上传缩略图'],
                ]);
                //验证部分数据合法性
                if (!$validate->check($post)) {
                    $this->error('提交失败：' . $validate->getError());
                }
                //验证菜单是否存在
                $info = $model->where('id',$id)->find();
                if(empty($info)) {
                    return $this->error('id不正确');
                }
                //设置修改人
                $post['edit_admin_id'] = Session::get('admin');
                if(false == $model->allowField(true)->save($post,['id'=>$id])) {
                    return $this->error('修改失败');
                } else {
                    addlog($model->id);//写入日志
                    return $this->success('修改成功','admin/news/index');
                }
            } else {
                //非提交操作
                $info = $model->where('id',$id)->find();
                if(!empty($info)) {
                    $this->assign('info',$info);
                    return $this->fetch();
                } else {
                    return $this->error('id不正确');
                }
            }
        } else {
            //是新增操作
            if($this->request->isPost()) {
                //是提交操作
                $post = $this->request->post();
                //验证  唯一规则： 表名，字段名，排除主键值，主键名
                $validate = new \think\Validate([
                    ['title', 'require', '标题不能为空'],
                    ['content', 'require', '内容不能为空'],
                    ['thumb', 'require', '请上传缩略图'],
                ]);

                //验证部分数据合法性
                if (!$validate->check($post)) {
                    $this->error('提交失败：' . $validate->getError());
                }
                //设置创建人
                $post['admin_id'] = Session::get('admin');
                //设置修改人
                $post['edit_admin_id'] = $post['admin_id'];
                if(false == $model->allowField(true)->save($post)) {
                    return $this->error('添加失败');
                } else {
                    addlog($model->id);//写入日志
                    return $this->success('添加成功','admin/news/index');
                }
            } else {
                //非提交操作
                return $this->fetch();
            }
        }
    }
}