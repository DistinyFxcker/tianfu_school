<?php

namespace app\admin\controller;
use app\common\model\About as Model;
use think\Db;
use think\Request;

/**
 * 证书展示
 * Class Adultcertificate
 * @package app\admin\controller
 */
class Adultcertificate extends Permissions
{
    use \app\admin\traits\Curd;
    public function _initialize(Request $request = null)
    {
        $this->model = new Model();
        parent::_initialize($request);
    }
}