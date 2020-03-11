<?php
     function sqrtOf($num) {
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
?>