<?php require 'db_connect.php' ?>
<?php
@header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Connection, User-Agent, Cookie');
@header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Origin: http://localhost:8080");

session_start();

$_SESSION['userinfooo'] = [
  'uid' => 123,
  'username' => '11113333'
];

// if(isset($_POST['username'])){ $name = $_POST['username']; }
// if(isset($_POST['password'])){ $psd = $_POST['password']; }
//
//
// $result = array('access_token' =>2 , 'username' => $name );
//
// $db= new db();
// $db ->setAttribute(PDO::ATTR_CASE,PDO::CASE_UPPER);
// $statement = $db ->sel(" INSERT INTO `bbs`.`user` (`id`, `username`, `password`) VALUES (NULL, '$name', '$psd');");
// $statement ->execute();
//
// echo json_encode($result);
