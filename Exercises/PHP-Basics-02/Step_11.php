<?php 
    function chayekni($num){
        $flag = true;
        if($num == 0){
            $flag = false;
        }
        else {
            for ($i=2; $i < $num-1; $i++) {
                if($num % $i == 0) {
                    $flag = false;
                }
            }
        }
        if($flag == true) {
            echo "prime";
        }
        else {
            echo "not prime";
        }
    }

    chayekni(7);
?>