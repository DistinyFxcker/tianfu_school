<?php

namespace app\index\traits;

trait Detail
{
    public function detail($id)
    {
        if(!$id){
            return $this->error('id不正确');
        }
        $row = $this->about->where('id',$id)->find();
        $title = $row['introduction_title'].'-'.$this->config_params['name'];
        if($row['keywords']){
            $keywords = $row['keywords'];
            $this->assign('keywords',$keywords);
        }
        if($row['ccont']){
            $description = $row['ccont'];
            $this->assign('description',$description);
        }
        $this->assign('title',$title);
        $this->assign('row',$row);
        return $this->fetch();
    }
}