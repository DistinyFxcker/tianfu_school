<?php

namespace app\admin\controller;
use think\Db;
use \app\admin\model\Attachment as model;
class Carousel extends Permissions
{
    public function index()
    {
        $model = new model();

        $post = $this->request->param();

        if (isset($post['status']) and ($post['status'] == 1 or $post['status'] === '0' or $post['status'] == -1)) {
            $where['status'] = $post['status'];
        }

        if(isset($post['create_time']) and !empty($post['create_time'])) {
            $min_time = strtotime($post['create_time']);
            $max_time = $min_time + 24 * 60 * 60;
            $where['create_time'] = [['>=',$min_time],['<=',$max_time]];
        }
        $where['use'] = 'carousel';
        $attachment = empty($where) ? $model->where(['use'=>'carousel'])->order('create_time desc')->paginate(20) : $model->where($where)->order('create_time desc')->paginate(20,false,['query'=>$this->request->param()]);

        return $this->fetch('',[
            'attachment'=>$attachment,
            'status'=>empty($post['status'])? '':$post['status']
        ]);
    }

}