<?php

namespace app\admin\controller;
use app\common\model\About as Model;
use think\Db;
use think\Request;

/**
 * 学历提升的优势
 * @package app\admin\controller
 */
class Openeducation extends Permissions
{
    use \app\admin\traits\Curd;
    public function _initialize()
    {
        $this->model = new Model();
        return parent::_initialize(); // TODO: Change the autogenerated stub
    }
}