<?php

namespace app\index\controller;
class Online extends Base
{
    use \app\index\traits\Detail;
    public function index()
    {
        $introduction = $this->menu->where(['id'=>228,'type'=>2])->find();
        $introduction['thumb'] = strHandleImg($introduction['thumb']);
        $onlineeducation = $this->about->where('source','Onlineeducation')->find();
        $onlineeducation['thumb'] = strHandleImg($onlineeducation['thumb']);
        if ($onlineeducation['ccont']) {
            $onlineeducation['_ccont'] = explode("\n", $onlineeducation['ccont']);
        }
        //就读流程
        $name = $this->menu->where(['id' => 231, 'type' => 2])->field('name')->find();
        $examprocess = $this->about->where('source', 'Studyprocess')->select();
        foreach ($examprocess as $k => $v) {
            $thumbs = explode(',', $v['thumbs']);
            $examprocess[$k]['thumbs'] = $thumbs;
        }
        //热门专业
        $hot_major = $this->menu->where(['id'=>234,'type'=>2])->find();
        $major_list = $this->about->where('source','Onlinemajor')->select();
        foreach($major_list as $k=>$v){
            $major_list[$k]['count'] = count($major_list);
        }
        //历年题库
        $questionbank = $this->about->where('source','Onlinequestion')->select();
        $mock_questionbank = $this->about->where('source','Onlinemock')->select();
        //证书
        $certificate = $this->about->where('source','Onlinecertificate')->select();
        foreach ($certificate as $k=>$v){
            $certificate[$k]['thumb'] = strHandleImg($v['thumb']);
        }
        //学生风采
        $studentstyle = $this->menu->where('id',249)->field('thumb,name')->find();
        $studentstyle['thumb'] = strHandleImg($studentstyle['thumb']);
        $studentstyle_list = $this->about->where('source','Onlinestyle')->select();
        foreach ($studentstyle_list as $k=>$v){
            $studentstyle_list[$k]['thumb'] = strHandleImg($v['thumb']);
        }
        $this->assign('name',$name);
        $this->assign('studentstyle_list',$studentstyle_list);
        $this->assign('studentstyle',$studentstyle);
        $this->assign('certificate',$certificate);
        $this->assign('questionbank',$questionbank);
        $this->assign('mock_questionbank',$mock_questionbank);
        $this->assign('major_list',$major_list);
        $this->assign('hot_major',$hot_major);
        $this->assign('examprocess',$examprocess);
        $this->assign('introduction',$introduction);
        $this->assign('onlineeducation',$onlineeducation);
        return $this->fetch();
    }
}