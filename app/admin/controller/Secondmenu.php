<?php

namespace app\admin\controller;
use app\common\model\ParentMenu;
use app\common\model\SecondMenu as Menu;
use think\Db;
class Secondmenu extends Permissions
{
    public function index(){
        $model = new Menu();
        $parent = new ParentMenu();
        $post = $this->request->param();
        if (isset($post['keywords']) and !empty($post['keywords'])) {
            $where['title'] = ['like', '%' . $post['keywords'] . '%'];
        }

        if(isset($post['create_time']) and !empty($post['create_time'])) {
            $min_time = strtotime($post['create_time']);
            $max_time = $min_time + 24 * 60 * 60;
            $where['create_time'] = [['>=',$min_time],['<=',$max_time]];
        }

        $second = empty($where) ? $model->order('create_time ASC')->paginate(20) : $model->where($where)->order('create_time ASC')->paginate(20,false,['query'=>$this->request->param()]);
        if($second){
            foreach($second as $k=>$v){
                $second[$k]['name'] = $parent->where(['id'=>$v['parent_id']])->value('name');
            }
        }
        return $this->fetch('',[
            'second'=>$second,
            'title'=>empty($post['keywords'])? '':$post['keywords'],
            'time'=>empty($post['create_time'])? '':$post['create_time']
        ]);
    }

    public function publish()
    {
        //获取菜单id
        $id = $this->request->has('id') ? $this->request->param('id', 0, 'intval') : 0;
        $model = new ParentMenu();
        $secondModel = new Menu();
        //是正常添加操作
        if($id > 0) {
            //是修改操作
            if($this->request->isPost()) {
                //是提交操作
                $post = $this->request->post();
                //验证  唯一规则： 表名，字段名，排除主键值，主键名
                $validate = new \think\Validate([
                    ['parent_id', 'require', '请选择分类'],
                    ['title', 'require', '标题不能为空'],
                ]);
                //验证部分数据合法性
                if (!$validate->check($post)) {
                    $this->error('提交失败：' . $validate->getError());
                }
                if(!empty($post['thumbs'])){
                    $post['thumb'] = implode(',',$post['thumbs']);
                }
                //验证菜单是否存在
                $article = $secondModel->where('id',$id)->find();
                if(empty($article)) {
                    return $this->error('id不正确');
                }

                if(false == $secondModel->allowField(true)->save($post,['id'=>$id])) {
                    return $this->error('修改失败');
                } else {
                    addlog($secondModel->id);//写入日志
                    return $this->success('修改成功','admin/secondmenu/index');
                }
            } else {
                //非提交操作
                $second = $secondModel->where('id',$id)->find();
                $second->thumb = explode(',',$second['thumb']);
                $cates = $model->select();
                $cates_all = $model->catelist($cates);
                $this->assign('cates',$cates_all);
                if(!empty($second)) {
                    $this->assign('second',$second);
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
                    ['parent_id', 'require', '请选择分类'],
                ]);
                //验证部分数据合法性
                if (!$validate->check($post)) {
                    $this->error('提交失败：' . $validate->getError());
                }
                if(!empty($post['thumbs'])){
                    $post['thumb'] = implode(',',$post['thumbs']);
                }
                if(false == $secondModel->allowField(true)->save($post)) {
                    return $this->error('添加失败');
                } else {
                    addlog($secondModel->id);//写入日志
                    return $this->success('添加成功','admin/secondmenu/index');
                }
            } else {
                //非提交操作
                $cate = $model->select();
                $cates = $model->catelist($cate);
                $this->assign('cates',$cates);
                return $this->fetch();
            }
        }

    }


    public function delete()
    {
        if ($this->request->isAjax()) {
            $id = $this->request->has('id') ? $this->request->param('id', 0, 'intval') : 0;
            if (false == Db::name('second_menu')->where('id', $id)->delete()) {
                return $this->error('删除失败');
            } else {
                addlog($id);//写入日志
                return $this->success('删除成功', 'admin/secondmenu/index');
            }
        }
    }

}