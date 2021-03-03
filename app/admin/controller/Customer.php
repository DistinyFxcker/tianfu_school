<?php

namespace app\admin\controller;
use app\common\model\Customer as customerCase;
use think\Session;
use think\Db;
class Customer extends Permissions
{
    public function index()
    {$model = new customerCase();
        $post = $this->request->param();
        if (isset($post['keywords']) and !empty($post['keywords'])) {
            $where['title'] = ['like', '%' . $post['keywords'] . '%'];
        }

        $info = empty($where) ? $model->order('create_time ASC')->paginate(20) : $model->where($where)->order('create_time desc')->paginate(20,false,['query'=>$this->request->param()]);
        //添加最后修改人的name
        foreach ($info as $key => $value) {
            $info[$key]['name'] = Db::name('admin')->where('id',$value['admin_id'])->value('nickname');
        }
        $this->assign('info',$info);
        return $this->fetch('',[
            'info'=>$info,
            'title'=>empty($post['keywords'])? '':$post['keywords']
            ]);
    }

    public function publish()
    {
        //获取菜单id
        $id = $this->request->has('id') ? $this->request->param('id', 0, 'intval') : 0;
        $model = new customerCase();
        //是正常添加操作
        if($id > 0) {
            //是修改操作
            if($this->request->isPost()) {
                //是提交操作
                $post = $this->request->post();
                //验证  唯一规则： 表名，字段名，排除主键值，主键名
                $validate = new \think\Validate([
                    ['title', 'require', '标题不能为空'],
                    ['en_title', 'require', '英文标题不能为空'],
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
                if(false == $model->allowField(true)->save($post,['id'=>$id])) {
                    return $this->error('修改失败');
                } else {
                    addlog($model->id);//写入日志
                    return $this->success('修改成功','admin/customer/index');
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
                    ['en_title', 'require', '英文标题不能为空'],
                    ['thumb', 'require', '请上传缩略图'],
                ]);

                //验证部分数据合法性
                if (!$validate->check($post)) {
                    $this->error('提交失败：' . $validate->getError());
                }
                //设置创建人
                $post['admin_id'] = Session::get('admin');
                if(false == $model->allowField(true)->save($post)) {
                    return $this->error('添加失败');
                } else {
                    addlog($model->id);//写入日志
                    return $this->success('添加成功','admin/customer/index');
                }
            } else {
                //非提交操作
                return $this->fetch();
            }
        }
    }

    public function delete()
    {
        if($this->request->isAjax()) {
            $id = $this->request->has('id') ? $this->request->param('id', 0, 'intval') : 0;
            if(false == Db::name('customer')->where('id',$id)->delete()) {
                return $this->error('删除失败');
            } else {
                addlog($id);//写入日志
                return $this->success('删除成功','admin/customer/index');
            }
        }
    }

}