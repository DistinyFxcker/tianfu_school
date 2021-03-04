<?php

namespace app\index\controller;

use app\common\model\About as Model;

class Chami extends Base
{
    public function index()
    {
        //关于我们
        $about_us = $this->menu->where(['id'=>97,'type'=>2])->find();
        $about = $this->about->where('source','about')->find();
        //助学圆梦
        $aid_info = $this->menu->where(['id'=>116,'type'=>2])->find();
        //宣传视频
        $video = $this->menu->where(['id'=>119,'type'=>2])->find();
        $video['thumb'] = strHandleImg($video['thumb']);
        //企业相册
        $album = $this->menu->where(['id'=>131,'type'=>2])->find();
        $album_list = $this->about->where('source','Album')->select();
        if(!empty($album_list)){
            foreach ($album_list as $k=>$v){
                $album_list[$k]['thumb'] = strHandleImg($v['thumb']);
            }
        }
        //企业荣誉
        $honor = $this->menu->where(['id'=>122,'type'=>2])->find();
        $honor_list = $this->about->where('source','Honor')->find();
        $count = count(explode(',',$honor_list['thumbs']));
        $thumbs = explode(',',$honor_list['thumbs']);
        $arr = [];
        if(count($count)>0){
           foreach($thumbs as $k=>$v){
               $arr[$k] = strHandleImg($v);
           }
            $honor_list['thumbs'] = $arr;
        }
        //天府英才文化
        $culture = $this->menu->where(['id'=>125,'type'=>2])->field('thumb,name,alias')->find();
        $culture['thumb'] = strHandleImg($culture['thumb']);
        $culture_list = $this->about->where('source','Culture')->select();
        $this->assign('culture_list',$culture_list);
        $this->assign('culture',$culture);
        $this->assign('honor',$honor);
        $this->assign('honor_list',$honor_list);
        $this->assign('album_list',$album_list);
        $this->assign('about_us',$about_us);
        $this->assign('about',$about);
        $this->assign('aid_info',$aid_info);
        $this->assign('video',$video);
        $this->assign('album',$album);
        return $this->fetch();
    }

    /**
     * @Notes:相册列表
     * @param $id
     * @author: hzb
     * @Time: 2020/12/11   10:51
     */
    public function detailList($id)
    {
        $thumbs_list = $this->about->where('id',$id)->field('thumbs,introduction_tag')->find();
        $thumbs = explode(',',$thumbs_list['thumbs']);
        if(!empty($thumbs)){
            $arr = [];
            foreach ($thumbs as $k=>$v){
                $arr[$k] = strHandleImg($v);
            }
            $thumbs_list['thumbs'] = $arr;
        }

        $this->assign('thumbs_list',$thumbs_list);
        return $this->fetch();
    }
}