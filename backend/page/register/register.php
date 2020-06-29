<?php
    // Header
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Max-Age: 1000");
    header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
    header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE");

    // Configuration
    require_once "../../configuration/connection.php";

    $data = json_decode(file_get_contents('php://input'), true);

    if( $data != []){
        $name = $data[0];
        $owner = $data[1];
        $opening = $data[2];
        $contact = $data[3];
        $address = strtolower($data[4]);
        $cep = $data[5];
        $delivery = $data[6];

        $id = date("dmyHis");
        $id .= implode("", explode(" ", strtolower($owner)));

        /* Validate System */
        $queryValidate = "SELECT * FROM restaurant WHERE id = ? AND  name = ? AND owner = ?";
        $stmt = $pdo -> prepare($queryValidate);
        $stmt -> bindParam(1, $id);
        $stmt -> bindParam(2, $name);
        $stmt -> bindParam(3, $owner);
        $stmt -> execute();

        $result = $stmt -> fetchAll();

        if($result != []){
            echo json_encode(array("status" => "failed"));
            exit;
        }

        /* Insert */
        $queryInsert = "INSERT INTO restaurant (id, name, owner, opening, contact, address, cep, delivery) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        $stmt = $pdo -> prepare($queryInsert);
        $stmt -> bindParam(1, $id);
        $stmt -> bindParam(2, $name);
        $stmt -> bindParam(3, $owner);
        $stmt -> bindParam(4, $opening);
        $stmt -> bindParam(5, $contact);
        $stmt -> bindParam(6, $address);
        $stmt -> bindParam(7, $cep);
        $stmt -> bindParam(8, $delivery);
        $stmt -> execute();
        
        $queryValidate = "SELECT * FROM restaurant WHERE id = ? AND  name = ? AND owner = ?";
        $stmt = $pdo -> prepare($queryValidate);
        $stmt -> bindParam(1, $id);
        $stmt -> bindParam(2, $name);
        $stmt -> bindParam(3, $owner);
        $stmt -> execute();

        $result = $stmt -> fetchAll();

        if($result == []){
            echo json_encode(array("status" => "failed"));
            exit;
        }

        echo json_encode(array("status" => "success"));
    }
    else{
        echo json_encode(array("status" => "failed"));
    }

    exit;