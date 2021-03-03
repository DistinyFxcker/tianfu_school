<?php
/*
 * @Author: your name
 * @Date: 2020-12-07 15:34:38
 * @LastEditTime: 2020-12-10 22:09:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /newchamipc/activity/app/index/controller/Index.php
 */
namespace app\index\controller;

use app\common\model\About;
use app\common\model\News;
use app\common\model\ParentMenu;
use app\common\model\SecondMenu;
use app\common\model\Advantage;
class Index extends Base
{
    public function Index()
    {
        $news = new News();
        $row = $this->about->where(['source'=>'About'])->find();
        $this->assign('row',$row);
        //热门新闻
        $menu_info = $this->menu->where(['controller'=>'hot','type'=>2])->find();
        $hot = $news->where(['source'=>'Hot'])->order('create_time DESC')->limit(0,4)->select();
        if(!empty($hot)){
            foreach ($hot as $k=>$v){
                $hot[$k]['thumb']= strHandleImg($v['thumb']);
            }
        }
        $this->assign('hot',$hot);
        $this->assign('menu_info',$menu_info);
        //业务板块
        $business = $this->menu->where(['controller'=>'business','type'=>2])->find();
        $business['thumb'] = strHandleImg($business['thumb']);
        $this->assign('business',$business);
        $business_info = $this->about->where(['source'=>'Business'])->select();
        $this->assign('business_info',$business_info);
        //首页热门院校
        $hot_school = $this->parent_menu->where(['alias'=>'hot_school'])->field('id,name,tag')->find();
        $school_list = $this->secode_menu->where(['parent_id'=>$hot_school['id']])->select();
        if(!empty($school_list)){
            foreach ($school_list as $k1=>$v1){
                $school_list[$k1]['thumb'] = strHandleImg($v1['thumb']);
            }
        }
        $this->assign('hot_school',$hot_school);
        $this->assign('school_list',$school_list);
        //首页的热门专业
        $parent_info = $this->parent_menu->where(['alias'=>'hot_major'])->field('id,name,tag,alias,description,thumb')->find();
        $parent_info['thumb'] = strHandleImg($parent_info['thumb']);
        $second_info = $this->secode_menu->where(['parent_id'=>$parent_info['id']])->select();
        if(!empty($second_info)){
            foreach ($second_info as $k=>$v){
                $second_info[$k]['thumb'] = strHandleImg($v['thumb']);
                $second_info[$k]['count'] = count($second_info);
            }
        }
        $this->assign('parent_info',$parent_info);
        $this->assign('second_info',$second_info);
        //首页我们的优势
        $advantage_list = $this->parent_menu->where(['alias'=>'hot_advantage'])->field('id,name,tag,alias,description')->find();
        $advantage_info = $this->secode_menu->where(['parent_id'=>$advantage_list['id']])->select();
        if(!empty($advantage_info)){
            foreach ($advantage_info as $k=>$v){
                $advantage_info[$k]['thumb'] = strHandleImg($v['thumb']);
            }
        }
        $this->assign('advantage_list',$advantage_list);
        $this->assign('advantage_info',$advantage_info);
        //助学圆梦
        $aid_info = $this->menu->where(['controller'=>'aid','type'=>2])->field('name,alias,thumb')->find();
        $aid_info['thumb'] = strHandleImg($aid_info['thumb']);
        $aid_list = $this->about->where(['source'=>'Aid'])->select();
        $this->assign('aid_info',$aid_info);
        $this->assign('aid_list',$aid_list);
        //喜报列表
        $goodnews_list = $this->about->where(['source'=>'Goodnews'])->select();
        if(!empty($goodnews_list)){
            foreach ($goodnews_list as $k=>$v){
                $goodnews_list[$k]['thumb'] = strHandleImg($v['thumb']);
            }
        }
        $this->assign('goodnews_list',$goodnews_list);
        return $this->fetch();
    }
}
