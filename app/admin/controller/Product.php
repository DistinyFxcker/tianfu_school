<?php

namespace app\admin\controller;
use app\common\model\Product as products;
use app\common\model\SecondMenu as menu;
use think\Db;
class Product extends Permissions
{
    //产品
    public function index(){
        $model = new Products();
        $post = $this->request->param();
        if (isset($post['keywords']) and !empty($post['keywords'])) {
            $where['id'] = ['like', '%' . $post['keywords'] . '%'];
        }

        $info = empty($where) ? $model->order('create_time ASC')->paginate(20) : $model->where($where)->order('create_time desc')->paginate(20,false,['query'=>$this->request->param()]);

        return $this->fetch('',[
            'info'=>$info,
            'title'=>empty($post['keywords'])? '':$post['keywords']
        ]);
    }

    public function publish()
    {
        //获取菜单id
        $id = $this->request->has('id') ? $this->request->param('id', 0, 'intval') : 0;
        $model = new products();
        $second = new menu();
        //是正常添加操作
        if($id > 0) {
            //是修改操作
            if($this->request->isPost()) {
                //是提交操作
                $post = $this->request->post();
                //验证  唯一规则： 表名，字段名，排除主键值，主键名
                $validate = new \think\Validate([
                    ['img', 'require', '轮播不能为空'],
                    ['thumb', 'require', 'logo不能为空'],
//                    ['theme1', 'require', '标题不能为空'],
//                    ['detail', 'require', '应用范围内容不能为空'],
                    ['thumb1', 'require', 'logo1不能为空'],
                    ['up_id', 'require', '请选择分类'],
                ]);
                //验证部分数据合法性
                if (!$validate->check($post)) {
                    $this->error('提交失败：' . $validate->getError());
                }
                $post['header_carousel'] = (implode(',',$post['img']));
                //验证菜单是否存在
                $info = $model->where('id',$id)->find();
                if(empty($info)) {
                    return $this->error('id不正确');
                }
                if(false == $model->allowField(true)->save($post,['id'=>$id])) {
                    return $this->error('修改失败');
                } else {
                    addlog($model->id);//写入日志
                    return $this->success('修改成功','admin/product/index');
                }
            } else {
                //非提交操作
                $detail = $model->where('id',$id)->find();
                $detail->header_carousel = explode(',',$detail['header_carousel']);
                $cates = $second->select();//二级菜单
                $this->assign('cates',$cates);
                if(!empty($detail)) {
                    $this->assign('detail',$detail);
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
                    ['img', 'require', '轮播不能为空'],
                    ['thumb', 'require', 'logo不能为空'],
//                    ['theme1', 'require', '标题不能为空'],
//                    ['detail', 'require', '应用范围内容不能为空'],
                    ['thumb1', 'require', 'logo1不能为空'],
                    ['up_id', 'require', '请选择分类'],
                ]);
                //验证部分数据合法性
                if (!$validate->check($post)) {
                    $this->error('提交失败：' . $validate->getError());
                }
                $post['header_carousel'] = (implode(',',$post['img']));
                if(false == $model->allowField(true)->save($post)) {
                    return $this->error('添加失败');
                } else {
                    addlog($model->id);//写入日志
                    return $this->success('添加成功','admin/product/index');
                }
            } else {
                //非提交操作
                $cate = $second->select();
                $this->assign('cates',$cate);
                return $this->fetch();
            }
        }

    }

    /**
     * 图片上传方法
     * @return [type] [description]
     */
    public function upload()
    {
        if($this->request->file('file')){
            $file = $this->request->file('file');
        }else{
            $res['code']=1;
            $res['msg']='没有上传文件';
            return json($res);
        }
        $module = $this->request->controller();
        $web_config = Db::name('webconfig')->where('web','web')->find();
        $info = $file->validate(['size'=>$web_config['file_size']*1024,'ext'=>$web_config['file_type']])->rule('date')->move(ROOT_PATH . 'public' . DS . 'uploads' . DS . $module . DS . $module);
        if($info) {
            $res['src'] = DS . 'uploads' . DS . $module . DS . $module . DS . $info->getSaveName();
            $res['code'] = 2;
            $res['title'] = 'logo';
            return json($res);
        } else {
            // 上传失败获取错误信息
            return $this->error('上传失败：'.$file->getError());
        }
    }
    //删除
    public function delete()
    {
        if($this->request->isAjax()) {
            $id = $this->request->has('id') ? $this->request->param('id', 0, 'intval') : 0;
            if(false == Db::name('product')->where('id',$id)->delete()) {
                return $this->error('删除失败');
            } else {
                addlog($id);//写入日志
                return $this->success('删除成功','admin/product/index');
            }
        }
    }


}