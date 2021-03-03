<?php

namespace app\index\controller;
class National extends Base
{
    use \app\index\traits\Detail;
    public function index()
    {
        //国家开放大学简介
        $introduction = $this->about->where('source','Openuniversity')->find();
        $introduction['thumb'] = strHandleImg($introduction['thumb']);
        //开放大学背景图
        $back_ground = $this->menu->where(['id'=>193,'type'=>2])->field('thumb,name')->find();
        $back_ground['thumb'] = strHandleImg($back_ground['thumb']);
        //特点
        $features_list = $this->about->where('source','Openfeatures')->select();
        //报名条件
        $reg = $this->menu->where(['id'=>200,'type'=>2])->field('name')->find();
        $openreg = $this->about->where('source','Openreg')->select();
        if(!empty($openreg)){
            foreach ($openreg as $k=>$v){
                $openreg[$k]['thumb'] = strHandleImg($v['thumb']);
            }
        }
        //热门专业
        $hot_major = $this->menu->where(['id'=>203,'type'=>2])->find();
        $major_list = $this->about->where('source','Openmajor')->select();
        foreach($major_list as $k=>$v){
            $major_list[$k]['count'] = count($major_list);
        }
        //自考流程
        $name = $this->menu->where(['id' => 206, 'type' => 2])->field('name')->find();
        $examprocess = $this->about->where('source', 'Openprocess')->select();
        foreach ($examprocess as $k => $v) {
            $thumbs = explode(',', $v['thumbs']);
            $examprocess[$k]['thumbs'] = $thumbs;
        }

        //历年题库
        $questionbank = $this->about->where('source','Openquestionbank')->select();
        $mock_questionbank = $this->about->where('source','Openmock')->select();
        //证书
        $certificate = $this->about->where('source', 'Opencertificate')->select();
        foreach ($certificate as $k => $v) {
            $certificate[$k]['thumb'] = strHandleImg($v['thumb']);
        }
        //学生风采
        $studentstyle = $this->menu->where('controller', 'studentstyle')->field('thumb,name')->find();
        $studentstyle['thumb'] = strHandleImg($studentstyle['thumb']);
        $studentstyle_list = $this->about->where('source', 'Openstyle')->select();
        foreach ($studentstyle_list as $k => $v) {
            $studentstyle_list[$k]['thumb'] = strHandleImg($v['thumb']);
        }
        $this->assign('name',$name);
        $this->assign('examprocess',$examprocess);
        $this->assign('hot_major',$hot_major);
        $this->assign('major_list',$major_list);
        $this->assign('openreg',$openreg);
        $this->assign('reg',$reg);
        $this->assign('features_list',$features_list);
        $this->assign('back_ground',$back_ground);
        $this->assign('introduction',$introduction);
        $this->assign('studentstyle', $studentstyle);
        $this->assign('studentstyle_list', $studentstyle_list);
        $this->assign('questionbank',$questionbank);
        $this->assign('mock_questionbank',$mock_questionbank);
        $this->assign('certificate',$certificate);
        return $this->fetch();
    }
}