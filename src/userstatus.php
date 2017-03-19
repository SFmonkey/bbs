<?php
@header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Connection, User-Agent, Cookie');
@header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Origin: http://localhost:8080");

class result{
  public $sign = 0;
}

$result = new result();

session_start();

if(isset($_SESSION['name'])){
  $userStatus = $_SESSION['name'];
  echo $userStatus;
}else {
  $result->sign = 1;
  echo json_encode($result);
}
