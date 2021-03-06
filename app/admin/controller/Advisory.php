<?php

namespace app\admin\controller;
use app\common\model\About as Model;
use think\Db;
use think\Request;

/**
 * 报考咨询
 * Class Certificate
 * @package app\admin\controller
 */
class Advisory extends Permissions
{
    use \app\admin\traits\Curd;
    public function _initialize(Request $request = null)
    {
        $this->model = new Model();
        parent::_initialize($request);
    }
    public function index()
    {
        return $this->fetch();
    }
}