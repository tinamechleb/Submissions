<?php 
function nbrOfTime($word , $sentence){
$arr = explode(" " , $sentence);
$i = 0;
$count = 0;
while($i < count($arr)){
  if($arr[$i]===$word){
    $count ++;
  }
  $i++;
}
echo $count;
}
nbrOfTime("tina" , "tina tina tina notTina");