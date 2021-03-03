<?php

namespace app\admin\controller;

use app\common\model\Answer as Model;
use think\Db;
use think\Session;

class Answer extends Permissions
{
    /**
     * 安装规程
     * @return mixed
     */
    public function index()
    {
        $model = new Model();
        $post = $this->request->param();
        if (isset($post['keywords']) and !empty($post['keywords'])) {
            $where['title'] = ['like', '%' . $post['keywords'] . '%'];
        }
        $info = empty($where) ? $model->order('create_time ASC')->paginate(20) : $model->where($where)->order('create_time ASC')->paginate(20, false, ['query' => $this->request->param()]);
        foreach ($info as $key => $value) {
            $info[$key]['audit_name'] = Db::name('admin')->where('id', $value['audit_id'])->value('name');
        }
        return $this->fetch('', [
            'info' => $info,
            'title' => empty($post['keywords']) ? '' : $post['keywords']
        ]);
    }

    public function publish()
    {
        //获取菜单id
        $id = $this->request->has('id') ? $this->request->param('id', 0, 'intval') : 0;
        $model = new Model();
        //是正常添加操作
        if ($id > 0) {
            //是修改操作
            if ($this->request->isPost()) {
                //是提交操作
                $post = $this->request->post();
                //验证  唯一规则： 表名，字段名，排除主键值，主键名
                $validate = new \think\Validate([
                    ['title', 'require', '标题不能为空'],
                    ['content', 'require', '内容不能为空'],
                    ['thumb', 'require', '图片不能为空'],
                ]);
                //验证部分数据合法性
                if (!$validate->check($post)) {
                    $this->error('提交失败：' . $validate->getError());
                }
                $content_01 = $post["content"];//从数据库获取富文本content
                $content_02 = htmlspecialchars_decode($content_01);//把一些预定义的 HTML 实体转换为字符
                $content_03 = str_replace("&nbsp;", "", $content_02);//将空格替换成空
                $contents = strip_tags($content_03);//函数剥去字符串中的 HTML、XML 以及 PHP 的标签,获取纯文本内容
                $con = mb_substr($contents, 0,100, "utf-8");//返回字符串中的前100字符串长度的字符
                $post['content_html'] = $con;
                //验证菜单是否存在
                $info = $model->where('id', $id)->find();
                if (empty($info)) {
                    return $this->error('id不正确');
                }
                if (false == $model->allowField(true)->save($post, ['id' => $id])) {
                    return $this->error('修改失败');
                } else {
                    addlog($model->id);//写入日志
                    return $this->success('修改成功', 'admin/answer/index');
                }
            } else {
                //非提交操作
                $info = $model->where('id', $id)->find();
                if (!empty($info)) {
                    $this->assign('info', $info);
                    return $this->fetch();
                } else {
                    return $this->error('id不正确');
                }
            }
        } else {
            //是新增操作
            if ($this->request->isPost()) {
                //是提交操作
                $post = $this->request->post();
                //验证  唯一规则： 表名，字段名，排除主键值，主键名
                $validate = new \think\Validate([
                    ['title', 'require', '标题不能为空'],
                    ['content', 'require', '内容不能为空'],
                    ['thumb', 'require', '图片不能为空'],
                ]);
                //验证部分数据合法性
                if (!$validate->check($post)) {
                    $this->error('提交失败：' . $validate->getError());
                }
                $content_01 = $post["content"];//从数据库获取富文本content
                $content_02 = htmlspecialchars_decode($content_01);//把一些预定义的 HTML 实体转换为字符
                $content_03 = str_replace("&nbsp;", "", $content_02);//将空格替换成空
                $contents = strip_tags($content_03);//函数剥去字符串中的 HTML、XML 以及 PHP 的标签,获取纯文本内容
                $con = mb_substr($contents, 0, 100, "utf-8");//返回字符串中的前100字符串长度的字符
                $post['content_html'] = $con;
                $post['date_year'] = date('Y', time());
                $post['date_month'] = date('m-d', time());
                $post['audit_id'] = Session::get('admin');
                if (false == $model->allowField(true)->save($post)) {
                    return $this->error('添加失败');
                } else {
                    addlog($model->id);//写入日志
                    return $this->success('添加成功', 'admin/answer/index');
                }
            } else {
                //非提交操作
                return $this->fetch();
            }
        }
    }

    public function delete()
    {
        if ($this->request->isAjax()) {
            $id = $this->request->has('id') ? $this->request->param('id', 0, 'intval') : 0;
            if (false == Db::name('answer')->where('id', $id)->delete()) {
                return $this->error('删除失败');
            } else {
                addlog($id);//写入日志
                return $this->success('删除成功', 'admin/answer/index');
            }
        }
    }
}