<?php
    function badelni($jemle){
        // $find = array("python","PHP");
        // $replace = array("PHP","python");

        // $tmp = str_replace($find,$replace,$jemle)."\n";

        $jemle = str_replace("PHP", "anything", $jemle);

        $jemle = str_replace("python", "PHP", $jemle);

        $jemle = str_replace("anything", "python", $jemle);
        
        return $jemle;
    }

    echo badelni("hi my name is PHP and I love python");
?>
