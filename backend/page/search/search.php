<?php
    // Header
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Max-Age: 1000");
    header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
    header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE");
    
    require_once "../../configuration/connection.php";
    
    $querySearch = "SELECT * FROM restaurant";
    $stmt = $pdo -> prepare($querySearch);
    $stmt -> execute();
    $list = $stmt -> fetchAll();

    echo json_encode($list);
    exit;