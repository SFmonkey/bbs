<?php require 'db_connect.php' ?>
<?php
@header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Connection, User-Agent, Cookie');
@header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Origin: http://localhost:8080");

if(isset($_POST['username']) && isset($_POST['password'])){
  $name = $_POST['username'];
  $psd = $_POST['password'];

  if(strlen($name) && strlen($psd)){
    $db= new db();
    $db ->setAttribute(PDO::ATTR_CASE,PDO::CASE_UPPER);
    $statement = $db ->sel(" SELECT * FROM `user` WHERE `username` = '$name' AND `password` = '$psd';");
    $statement ->execute();

    $statement ->setFetchMode(PDO::FETCH_NUM);
    $result = $statement->fetchAll();

    if(count($result)!=0){
      session_start();

      $_SESSION['name']=$name;
    }
  }
}
