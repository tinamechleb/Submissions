<?php

    function isItPowerOfTwoHmm($num) {
        if($num === 0) {
            return "hu2\n";
        }
        else {
            while($num % 2 === 0) {
                $numm = $num / 2;
            return ($numm/2)."\n";
            
            break;
            }
            return "hu2\n";
        }
    }

    function isPowerOfTwoAgain($num) {
        if($num === 0) {
            return "hu2\n";
        }
        else {
            if(($num & ($num - 1)) == 0) {
                return "${num} is power of 2\n";
            }
            else {
                return "hu2\n";
            }
        }
    }

    echo isItPowerOfTwoHmm(128);
    echo isPowerOfTwoAgain(16);

?>