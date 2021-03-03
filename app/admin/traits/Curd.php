<?php

// +----------------------------------------------------------------------
// | EasyAdmin
// +----------------------------------------------------------------------
// | PHP交流群: 763822524
// +----------------------------------------------------------------------
// | 开源协议  https://mit-license.org 
// +----------------------------------------------------------------------
// | github开源项目：https://github.com/zhongshaofa/EasyAdmin
// +----------------------------------------------------------------------

namespace app\admin\traits;

/**
 * 后台CURD复用
 * Trait Curd
 * @package app\admin\traits
 */
trait Curd
{
    /**
     * 列表
     */
    public function index()
    {
        $post = $this->request->param();
        $where['source'] = $this->request->controller();
        $info = empty($where) ? $this->model->order('create_time DESC')->paginate(20) : $this->model->where($where)->order('create_time desc')->paginate(20, false, ['query' => $this->request->param()]);
        return $this->fetch('', [
            'info' => $info,
            'title' => empty($post['keywords']) ? '' : $post['keywords']
        ]);
    }

    public function publish()
    {
        //获取菜单id
        $id = $this->request->has('id') ? $this->request->param('id', 0, 'intval') : 0;
        $controller = $this->request->controller();
        //是正常添加操作
        if ($id > 0) {
            //是修改操作
            if ($this->request->isPost()) {
                //是提交操作
                $post = $this->request->post();
                if(isset($post['create_time'])){
                    $post['create_time'] = strtotime($post['create_time']);
                }
                //验证  唯一规则： 表名，字段名，排除主键值，主键名
                $validate = new \think\Validate([
                    ['introduction_title', 'require', '标题不能为空'],
                ]);

                //验证部分数据合法性
                if (!$validate->check($post)) {
                    $this->error('提交失败：' . $validate->getError());
                }
                if(empty($post['thumbs'])){
                    $post['thumbs'] = '';
                }
                if(!empty($post['thumbs'])){
                    $post['thumbs'] = implode(',',$post['thumbs']);
                }
                $post['source'] = $controller;
                //验证菜单是否存在
                $info = $this->model->where('id', $id)->find();
                if (empty($info)) {
                    return $this->error('id不正确');
                }
                $ret = $this->model->allowField(true)->save($post, ['id' => $id]);
                if (false == $ret) {
                    return $this->error('修改失败');
                } else {
                    addlog($this->model->id);//写入日志
                    return $this->success('修改成功', $controller.'/index');
                }
            } else {
                //非提交操作
                $info = $this->model->where('id', $id)->find();
                if($info->thumbs){
                    $info->thumbs = explode(',',$info['thumbs']);
                }
                if (!empty($info)) {
                    $this->assign('info', $info);
                    return $this->fetch();
                } else {
                    return $this->error('id不正确');
                }
            }
        } else {
            //是新增操作
            if ($this->request->isPost()) {
                //是提交操作
                $post = $this->request->post();
                if(isset($post['create_time'])){
                    $time = $post['create_time'] ? strtotime($post['create_time']) : time();
                    $post['create_time'] = $time;
                }
                //验证  唯一规则： 表名，字段名，排除主键值，主键名
                $validate = new \think\Validate([
                    ['introduction_title', 'require', '标题不能为空'],
                ]);
                //验证部分数据合法性
                if (!$validate->check($post)) {
                    $this->error('提交失败：' . $validate->getError());
                }
                if(!empty($post['thumbs'])){
                    $post['thumbs'] = implode(',',$post['thumbs']);
                }
                $post['source'] = $controller;
                $ret = $this->model->allowField(true)->save($post);
                if (false == $ret) {
                    return $this->error('添加失败');
                } else {
                    addlog($this->model->id);//写入日志
                    return $this->success('添加成功', $controller.'/index');
                }
            } else {
                //非提交操作
                return $this->fetch();
            }
        }
    }

    public function delete()
    {
        $controller = $this->request->controller();
        if ($this->request->isAjax()) {
            $id = $this->request->has('id') ? $this->request->param('id', 0, 'intval') : 0;
            if (false == $this->model->where('id', $id)->delete()) {
                return $this->error('删除失败');
            } else {
                return $this->success('删除成功', $controller.'/index');
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
            $post = $this->request->post();
            if (false == $this->model->save(['is_top'=>$post['is_top']],['id'=>$post['id']])) {
                return $this->error('置顶失败');
            } else {
                return $this->success('置顶成功', $controller.'/index');
            }
        }
    }
}
