<?php require 'db_connect.php' ?>
<?php
@header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Connection, User-Agent, Cookie');
@header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Origin: http://localhost:8080");

if (isset($_POST['id'])) {
  $id = $_POST['id'];
  $db= new db();
  $db ->setAttribute(PDO::ATTR_CASE,PDO::CASE_UPPER);
  $statement = $db ->sel("SELECT * FROM `activity` WHERE `id` = $id;");
  $statement ->execute();

  $statement ->setFetchMode(PDO::FETCH_OBJ);
  $data = $statement->fetch();

  echo json_encode($data);
}
