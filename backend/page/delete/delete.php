<?php
    // Header
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Credentials: true");
        header("Access-Control-Max-Age: 1000");
        header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
        header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE");
        
        require_once "../../configuration/connection.php";

        $data = json_decode(file_get_contents("php://input"), true);

        if(empty($data)){
            echo json_encode(array("status" => "failed"));
            exit;
        }

        $id = $data[0];
        $name = $data[1];
        $owner = $data[2];

        $queryUpdate = "DELETE FROM restaurant WHERE id = ?";
        $stmt = $pdo -> prepare($queryUpdate);
        $stmt -> bindParam(1, $id);
        $stmt -> execute();

        echo json_encode(array("status" => "delete"));
        exit;
        