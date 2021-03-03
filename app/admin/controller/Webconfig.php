<?php
// +----------------------------------------------------------------------
// | Tplay [ WE ONLY DO WHAT IS NECESSARY ]
// +----------------------------------------------------------------------
// | Copyright (c) 2017 http://tplay.pengyichen.com All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: 听雨 < 389625819@qq.com >
// +----------------------------------------------------------------------


namespace app\admin\controller;

use app\admin\controller\Permissions;
use \app\common\model\Webconfig as Model;
use \think\Db;
class Webconfig extends Permissions
{
    public function index()
    {
        $web_config = Db::name('webconfig')->where('web','web')->find();
        $web_config['contact_information'] = json_decode($web_config['contact_information'],true);
        $this->assign('web_config',$web_config);
        return $this->fetch();
    }

    public function publish()
    {
    	if($this->request->isPost()) {
    	    $web_config = new Model();
            $post = $this->request->post();
            //验证  唯一规则： 表名，字段名，排除主键值，主键名
            $validate = new \think\Validate([
                ['name', 'require', '网站名称不能为空'],
            ]);
            //验证部分数据合法性
            if (!$validate->check($post)) {
                $this->error('提交失败：' . $validate->getError());
            }

            if(empty($post['is_log'])) {
                $post['is_log'] = 0;
            } else {
                $post['is_log'] = $post['is_log'];
            }
            $arr = [];
//            $arr['info'] = json_encode($post['contact']);
            $post['contact_information'] = json_encode($post['contact']);
            if(false == $web_config->allowField(true)->save($post,['id'=>1])) {
                return $this->error('提交失败');
            } else {
                addlog();
                return $this->success('提交成功','admin/webconfig/index');
            }
        }
    }
}
