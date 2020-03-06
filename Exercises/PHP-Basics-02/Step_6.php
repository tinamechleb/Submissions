<?php
    function ejma3ni($num){
        $sum = 0;
        $array = str_split($num);
        $length = strlen($num);
        for($i = 0;$i < $length;$i++){
            $sum += $array[$i];
        }
        return $sum;

    }
    echo ejma3ni(1111111)."\n";

?>