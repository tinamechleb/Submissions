<?php

$transactions = array(
    array(
        "id" => 1,
        "name"=> "Gaby",
        "email"=> "gaby@codi.tech"
    ),
    array(
       "id" => 3,
       "name"=> "Omar",
       "email"=> "omar@codi.tech"
    )
);

foreach ($transactions as $key => $val) {
    echo "id: ".$val["id"].", name: ".$val["name"].", email: ".$val["email"]."\n";
    
}
?>
