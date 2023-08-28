<?php

    $server_name = "localhost";
    $user_name = "root";
    $password = "";
    $database = "carmelite_users";

    $connection = new mysqli($server_name,$user_name,$password,$database) or die("connection not successful");
    if(!$connection){
        die("Unable to connect to " . $database);
    }

?>