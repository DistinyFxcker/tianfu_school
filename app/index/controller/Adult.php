<?php

namespace app\index\controller;

use app\common\model\About as Model;

class Adult extends Base
{
    use \app\index\traits\Detail;
    public function index()
    {
	//成人高考简介
        $gaokao = $this->about->where('source', 'Gaokao')->find();
        $count = count(explode(',', $gaokao['thumbs']));
        $thumbs = explode(',', $gaokao['thumbs']);
        $arr = [];
        if ($count > 0) {
            foreach ($thumbs as $k => $v) {
                $arr[$k] = strHandleImg($v);
            }
            $gaokao['thumbs'] = $arr;
        }
        //学习形式
        $studyway = $this->about->where('source', 'Studyway')->select();
        //热门专业
        $hot_major = $this->menu->where(['id' => 169, 'type' => 2])->find();
        $major_list = $this->about->where('source', 'Major')->select();
        foreach($major_list as $k=>$v){
            $major_list[$k]['count'] = count($major_list);
        }
        //历年题库
        $questionbank = $this->about->where('source', 'Questionbank')->select();
        $mock_questionbank = $this->about->where('source', 'mock')->select();
        //自考流程
        $name = $this->menu->where(['id' => 172, 'type' => 2])->field('name')->find();
        $examprocess = $this->about->where('source', 'Adultcollege')->select();
        foreach ($examprocess as $k => $v) {
            $thumbs = explode(',', $v['thumbs']);
            $examprocess[$k]['thumbs'] = $thumbs;
        }
        //证书
        $certificate = $this->about->where('source', 'Adultcertificate')->select();
        foreach ($certificate as $k => $v) {
            $certificate[$k]['thumb'] = strHandleImg($v['thumb']);
        }
        //学生风采
        $studentstyle = $this->menu->where('controller', 'studentstyle')->field('thumb,name')->find();
        $studentstyle['thumb'] = strHandleImg($studentstyle['thumb']);
        $studentstyle_list = $this->about->where('source', 'Studentstyle')->select();
        foreach ($studentstyle_list as $k => $v) {
            $studentstyle_list[$k]['thumb'] = strHandleImg($v['thumb']);
        }
        $this->assign('name',$name);
        $this->assign('examprocess', $examprocess);
        $this->assign('studentstyle', $studentstyle);
        $this->assign('studentstyle_list', $studentstyle_list);
        $this->assign('questionbank', $questionbank);
        $this->assign('certificate', $certificate);
        $this->assign('mock_questionbank', $mock_questionbank);
        $this->assign('major_list', $major_list);
        $this->assign('hot_major', $hot_major);
        $this->assign('gaokao', $gaokao);
        $this->assign('studyway', $studyway);
        return $this->fetch();
    }
}
