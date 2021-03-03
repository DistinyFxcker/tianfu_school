<?php

namespace app\admin\controller;
use app\common\model\Link;
use think\Db;

class Linkseries extends Permissions
{
    public function index()
    {
        $link = new Link();
        $post = $this->request->param();
        if (isset($post['keywords']) and !empty($post['keywords'])) {
            $where['title'] = ['like', '%' . $post['keywords'] . '%'];
        }

        $link_info = empty($where) ? $link->order('create_time ASC')->paginate(20) : $link->where($where)->order('create_time ASC')->paginate(20,false,['query'=>$this->request->param()]);
        return $this->fetch('',[
            'link_info'=>$link_info,
            'title'=>empty($post['keywords'])? '':$post['keywords'],
        ]);
    }
    public function publish()
    {
        //获取菜单id
        $id = $this->request->has('id') ? $this->request->param('id', 0, 'intval') : 0;
        $link = new Link();
        //是正常添加操作
        if($id > 0) {
            //是修改操作
            if($this->request->isPost()) {
                //是提交操作
                $post = $this->request->post();
                //验证  唯一规则： 表名，字段名，排除主键值，主键名
                $validate = new \think\Validate([
                    ['title', 'require', '名称不能为空'],
                ]);
                //验证部分数据合法性
                if (!$validate->check($post)) {
                    $this->error('提交失败：' . $validate->getError());
                }
                //验证菜单是否存在
                $cate = $link->where('id',$id)->find();
                if(empty($cate)) {
                    return $this->error('id不正确');
                }
                if(false == $link->allowField(true)->save($post,['id'=>$id])) {
                    return $this->error('修改失败');
                } else {
                    addlog($operation_id=$id);//写入日志
                    return $this->success('修改分类成功','admin/linkseries/index');
                }
            } else {
                //非提交操作
                $cate = $link->where('id',$id)->find();
                if(!empty($cate)) {
                    $this->assign('cate',$cate);
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
                    ['title', 'require', '名称不能为空'],
                ]);
                //验证部分数据合法性
                if (!$validate->check($post)) {
                    $this->error('提交失败：' . $validate->getError());
                }
                if(false == $link->allowField(true)->save($post)) {
                    return $this->error('添加失败');
                } else {
                    addlog($link->id);//写入日志
                    return $this->success('添加成功','admin/linkseries/index');
                }
            } else {
                return $this->fetch();
            }
        }
    }

    public function delete()
    {
        if($this->request->isAjax()) {
            $id = $this->request->has('id') ? $this->request->param('id', 0, 'intval') : 0;
            if(false == Db::name('link')->where('id',$id)->delete()) {
                return $this->error('删除失败');
            } else {
                addlog($id);//写入日志
                return $this->success('删除成功','admin/linkseries  /index');
            }
        }
    }
    /**
     * @Notes:是否置顶
     * @author: hzb
     * @Time: 2020/12/28   15:18
     */
    public function istop()
    {
        $controller = $this->request->controller();
        if ($this->request->isAjax()) {
            $link = new Link();
            $post = $this->request->post();
            if (false == $link->save(['is_top'=>$post['is_top']],['id'=>$post['id']])) {
                return $this->error('置顶失败');
            } else {
                return $this->success('置顶成功', $controller.'/index');
            }
        }
    }
}