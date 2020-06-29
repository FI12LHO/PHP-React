<?php
    $usr = "root";
    $pass = "";
    $db = "guide";

    try{
        $pdo = new PDO("mysql:host=localhost; dbname=$db", $usr, $pass);

    } catch(PDOException $error){
        echo json_encode(
            array("Error" => $error -> getMessage())
        );
        exit;
    }