<?php

namespace app\index\controller;
use think\Request;

class Recruitment extends Base
{
    public function index()
    {
        return $this->fetch();
    }
}