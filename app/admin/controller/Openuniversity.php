<?php

namespace app\admin\controller;
use app\common\model\About as Model;
use think\Db;
use think\Request;

/**
 * 国家开放大学简介
 * Class Openuniversity
 * @package app\admin\controller
 */
class Openuniversity extends Permissions
{
    use \app\admin\traits\Curd;
    public function _initialize()
    {
        $this->model = new Model();
        return parent::_initialize(); // TODO: Change the autogenerated stub
    }
}