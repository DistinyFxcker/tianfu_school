<?php

namespace app\admin\controller;
use app\common\model\About as Model;
use think\Db;
use think\Request;

/**
 * 成人高考学历提升的优势
 * Class Enhancement
 * @package app\admin\controller
 */
class Enhancement extends Permissions
{
    use \app\admin\traits\Curd;
    public function _initialize(Request $request = null)
    {
        $this->model = new Model();
        parent::_initialize($request);
    }
}