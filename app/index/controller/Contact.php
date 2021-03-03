<?php
namespace app\index\controller;
use app\common\model\Messages;
use app\common\model\Recruitment;
class Contact extends Base{
    public function index()
    {
        if($this->request->isPost()){
            $model = new Messages();
            $post = $this->request->post();
            $validate = new \think\Validate([
                ['name', 'require', '请填写姓名'],
            ]);
            //验证部分数据合法性
            if (!$validate->check($post)) {
                $this->error('提交失败：' . $validate->getError());
            }
            $post['phone'] = $post['tel'];
            $post['des'] = $post['cont'];
            $ret  = $model->insertData($post);
            if(!$ret){
                return $this->error('报名失败！');
            }
            return $this->success('报名成功!');

        }
        return $this->fetch();
    }

    /**
     * @Notes:人才招聘
     * @author: hzb
     * @Time: 2020/12/11   15:04
     */
    public function recruitment()
    {
        $recruitment = $this->menu->where(['id'=>257,'type'=>2])->field('name,description')->find();
        if($this->request->isPost()){
            $recruitmentModel = new Recruitment();
            $recruitment_list = $recruitmentModel->order(['is_top'=>'desc','create_time'=>'desc'])->paginate(10, false, ['query' => $this->request->param()]);
            echo json_encode($recruitment_list);exit();
        }
        $this->assign('recruitment',$recruitment);
        return $this->fetch();
    }
    public function advisoryCenter()
    {
        return $this->fetch();
    }

    public function feedback()
    {
        if($this->request->isPost()){
            $model = new Messages();
            $post = $this->request->post();
            $validate = new \think\Validate([
                ['name', 'require', '请填写姓名'],
            ]);
            //验证部分数据合法性
            if (!$validate->check($post)) {
                $this->error('提交失败：' . $validate->getError());
            }
            $post['phone'] = $post['tel'];
            $post['des'] = $post['cont'];
            $ret  = $model->insertData($post);
            if(!$ret){
                return $this->error('报名失败！');
            }
            return $this->success('报名成功!');

        }
        return $this->fetch();
    }
}