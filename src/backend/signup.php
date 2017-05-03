<?php require 'db_connect.php' ?>
<?php
@header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Connection, User-Agent, Cookie');
@header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Origin: http://localhost:8080");

if(isset($_POST['username']) && isset($_POST['password'])){
  $name = $_POST['username'];
  $psd = $_POST['password'];
  $db= new db();
  $db ->setAttribute(PDO::ATTR_CASE,PDO::CASE_UPPER);
  $statement = $db ->sel(" INSERT INTO `bbs`.`user` (`id`, `username`, `password`) VALUES (NULL, '$name', '$psd');");
  $statement ->execute();
}
