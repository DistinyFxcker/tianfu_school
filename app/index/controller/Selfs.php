<?php

namespace app\index\controller;
class Selfs extends Base
{
    use \app\index\traits\Detail;
    public function index()
    {
        //成人高考简介
        $introductionexams = $this->about->where('source', 'Introductionexams')->find();
        $count = count(explode(',', $introductionexams['thumbs']));
        $thumbs = explode(',', $introductionexams['thumbs']);
        $arr = [];
        if (count($count) > 0) {
            foreach ($thumbs as $k => $v) {
                $arr[$k] = strHandleImg($v);
            }
            $introductionexams['thumbs'] = $arr;
        }
        //证书
        $certificate = $this->about->where('source', 'Certificate')->select();
        foreach ($certificate as $k => $v) {
            $certificate[$k]['thumb'] = strHandleImg($v['thumb']);
        }
        //热门专业
        $hot_major = $this->menu->where(['id' => 138, 'type' => 2])->find();
        $major_list = $this->about->where('source', 'Hotmajor')->select();
        foreach($major_list as $k=>$v){
            $major_list[$k]['count'] = count($major_list);
        }
        //注意事项
        $precautions = $this->about->where('source', 'Precautions')->select();
        if (!empty($precautions)) {
            foreach ($precautions as $k => $v) {
                $precautions[$k]['thumb'] = strHandleImg($v['thumb']);
            }
        }
        //自考流程
        $name = $this->menu->where(['id' => 144, 'type' => 2])->field('name')->find();
        $examprocess = $this->about->where('source', 'Examprocess')->select();
        foreach ($examprocess as $k => $v) {
            $thumbs = explode(',', $v['thumbs']);
            $examprocess[$k]['thumbs'] = $thumbs;
        }
        //历年题库
        $questionbank = $this->about->where('source','Question')->select();
        $mock_questionbank = $this->about->where('source','Simulation')->select();

        //学生风采
        $studentstyle = $this->menu->where('controller','studentstyle')->field('thumb,name')->find();
        $studentstyle['thumb'] = strHandleImg($studentstyle['thumb']);
        $studentstyle_list = $this->about->where('source','Style')->select();
        foreach ($studentstyle_list as $k=>$v){
            $studentstyle_list[$k]['thumb'] = strHandleImg($v['thumb']);
        }
        $this->assign('name',$name);
        $this->assign('certificate',$certificate);
        $this->assign('examprocess', $examprocess);
        $this->assign('precautions', $precautions);
        $this->assign('major_list', $major_list);
        $this->assign('hot_major', $hot_major);
        $this->assign('introductionexams', $introductionexams);
        $this->assign('studentstyle', $studentstyle);
        $this->assign('studentstyle_list', $studentstyle_list);
        $this->assign('certificate', $certificate);
        $this->assign('mock_questionbank', $mock_questionbank);
        $this->assign('questionbank', $questionbank);
        return $this->fetch();
    }
}