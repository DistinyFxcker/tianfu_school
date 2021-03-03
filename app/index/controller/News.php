<?php

namespace app\index\controller;
use app\common\model\News as newsCenter;
use think\Db;
use think\helper\Str;

class News extends Base
{
    public function index()
    {
        if($this->request->isPost()){
            $news = new newsCenter();
            $where['source']  = 'Hot';
            $new_list = $news->where($where)->order(['is_top'=>'desc','create_time'=>'desc'])->field('thumb,introduction_title,create_time,id')->paginate(10, false, ['query' => $this->request->param()]);
            foreach ($new_list as $k=>$v){
                $new_list[$k]['thumb'] = strHandleImg($v['thumb']);
            }
            echo json_encode($new_list);exit();
        }
        return $this->fetch();
    }

    public function detail($id)
    {
        if(!$id){
            return $this->error('id不正确');
        }
        $news = new newsCenter();
        $row = $news->where('id',$id)->find();
        if(!empty($row)){
            $news->where('id',$id)->setInc('view_count',1);
        }
        $title = $row['introduction_title'].'-'.$this->config_params['name'];
        if($row['keywords']){
            $keywords = $row['keywords'];
            $this->assign('keywords',$keywords);
        }
        if($row['ccont']){
            $description = $row['ccont'];
            $this->assign('description',$description);
        }
        $this->assign('source','通知公告');
        if($row['source'] == 'Hot'){
            $this->assign('source','热门新闻');
        }
        $this->assign('title',$title);
        $this->assign('row',$row);
        return $this->fetch();
    }

    /**
     * @Notes:热门新闻
     * @Time: 2020/12/11   16:38
     */
    public function hot()
    {
        if($this->request->isPost()){
            $action = $this->request->action();
            $news = new newsCenter();
            $where['source']  = $action;
            $new_list = $news->where($where)->order(['is_top'=>'desc','create_time'=>'desc'])->field('thumb,introduction_title,create_time,id')->paginate(10, false, ['query' => $this->request->param()]);
            foreach ($new_list as $k=>$v){
                $new_list[$k]['thumb'] = strHandleImg($v['thumb']);
            }
            echo json_encode($new_list);exit();
        }
        return $this->fetch();
    }

    /**
     * @Notes:通知公告
     * @Time: 2020/12/11   16:38
     */
    public function notice()
    {
        if($this->request->isPost()){
            $action = $this->request->action();
            $news = new newsCenter();
            $where['source']  = $action;
            $notice_list = $news->where($where)->order(['is_top'=>'desc','create_time'=>'desc'])->field('introduction_title,ccont,create_time,id,view_count')->paginate(10, false, ['query' => $this->request->param()]);
            echo json_encode($notice_list);exit();
        }
        return $this->fetch();
    }

    /**
     * @Notes:权威发布
     * @author: hzb
     * @Time: 2020/12/28   16:50
     */
    public function authority()
    {
        if($this->request->isPost()){
            $action = $this->request->action();
            $news = new newsCenter();
            $where['source']  = $action;
            $new_list = $news->where($where)->order(['is_top'=>'desc','create_time'=>'desc'])->field('thumb,introduction_title,create_time,id')->paginate(10, false, ['query' => $this->request->param()]);
            foreach ($new_list as $k=>$v){
                $new_list[$k]['thumb'] = strHandleImg($v['thumb']);
            }
            echo json_encode($new_list);exit();
        }
        return $this->fetch();
    }
}