<?php
namespace app\admin\controller;
class Recommend extends Permissions{
    public function index(){
        return $this->fetch();
    }
}