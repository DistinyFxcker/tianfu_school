<?php

namespace app\admin\controller;
use app\common\model\About as Model;
use think\Db;
use think\Request;

/**
 * 网络教育历年题目题库
 * @package app\admin\controller
 */
class Onlinequestion extends Permissions
{
    use \app\admin\traits\Curd;
    public function _initialize()
    {
        $this->model = new Model();
        return parent::_initialize(); // TODO: Change the autogenerated stub
    }
}