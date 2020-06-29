<?php
    // Header
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Credentials: true");
        header("Access-Control-Max-Age: 1000");
        header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
        header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE");
        
        require_once "../../configuration/connection.php";

        $id = json_decode(file_get_contents("php://input"), true);
        $id = $id[0];

        if(empty($id)){
            echo json_encode(array("status" => "failed"));
            exit;
        }

        $queryValidate = "SELECT * FROM restaurant WHERE id = ?";
        $stmt = $pdo -> prepare($queryValidate);
        $stmt -> bindParam(1, $id);
        $stmt -> execute();
        $result = $stmt -> fetchAll();

        if(empty($result)){
            echo json_encode(array("status" => "unknown"));
            exit;
        }

        echo json_encode($result[0]);
        exit;