<?php

namespace app\common\model;

class Messages extends Base
{
    /**
     * @Notes:写入数据
     * @param $data
     * @return bool
     * @author: hzb
     * @Time: 2020/12/11   9:51
     */
    public function insertData($data)
    {
        if(!$data){
            return false;
        }
        $ret = $this->allowField(true)->save($data);
        if(!$ret){
            return false;
        }
        return true;
    }
}
