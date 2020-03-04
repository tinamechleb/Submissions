<?php
    $name = "Tina";
    $position = "Boss Lady";
    $github_url = "https://github.com/tinamechleb";
    echo "Hello, I'm ".$name.", I'm a ".$position." please check my github link ".$github_url."\n";

    echo "Hello, I'm ${name}, I'm a ${position} please check my github link ${github_url}\n";

    echo 'Hello, I\'m '. $name .', I\'m a ' .$position. ' please check my github link '.$github_url;

?>
<?php echo "\n"?>Hello, I'm <?php echo $name?>, I'm a <?php echo $position?> please check my github link <?php echo $github_url?>