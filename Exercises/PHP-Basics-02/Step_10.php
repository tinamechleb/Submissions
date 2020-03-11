<?php
    function check_palindrome($string) {
        function ed7ashni($string) {
            $string = str_replace(' ', '', $string);
            return $string;
        }

        if(ed7ashni($string) == ed7ashni(strrev($string))) {
            return "c'est un palindrome";
        }
        else {
            return "hu2";
        }
    }

    echo check_palindrome("nurses run");
?>