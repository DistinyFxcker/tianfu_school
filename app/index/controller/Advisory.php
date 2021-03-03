<?php

namespace app\index\controller;
use app\common\model\Messages;

/**
 * 报考咨询
 * Class Advisory
 * @package app\index\controller
 */
class Advisory extends Base
{
    public function index()
    {
        if($this->request->isPost()){
            $model = new Messages();
            $post = $this->request->post();
            $validate = new \think\Validate([
                ['name', 'require', '请填写姓名'],
                ['tel', 'require', '请填写电话号码'],
            ]);
            //验证部分数据合法性
            if (!$validate->check($post)) {
                $this->error('提交失败：' . $validate->getError());
            }
            $post['card'] = $post['idNum'];
            $post['domicile'] = $post['adress'];
            $post['phone'] = $post['tel'];
            $post['type'] = $post['learnType'];
            $post['des'] = $post['cont'];
            $ret  = $model->insertData($post);
            if(!$ret){
               return $this->error('报名失败！');
            }
            return $this->success('报名成功!');
        }
        //报考院校列表
        $f_id = $this->parent_menu->where('alias','hot_school')->field('id')->find();
        $m_id = $this->parent_menu->where('alias','hot_major')->field('id')->find();
        $hot_school = $this->secode_menu->where('parent_id',$f_id['id'])->select();
        $hot_major = $this->secode_menu->where('parent_id',$m_id['id'])->select();
        //报考类别
        $category = $this->about->where('source','Category')->select();
        $this->assign('category',$category);
        $this->assign('hot_major',$hot_major);
        $this->assign('hot_school',$hot_school);
        return $this->fetch();
    }
}