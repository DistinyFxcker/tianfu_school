<?php

namespace app\admin\controller;
use app\common\model\About as Model;
use think\Db;
use think\Request;

/**
 * 开放大学特点
 * Class Openfeatures
 * @package app\admin\controller
 */
class Openfeatures extends Permissions
{
    use \app\admin\traits\Curd;
    public function _initialize()
    {
        $this->model = new Model();
        return parent::_initialize(); // TODO: Change the autogenerated stub
    }
}