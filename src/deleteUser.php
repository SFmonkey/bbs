<?php
@header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Connection, User-Agent, Cookie');
@header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Origin: http://localhost:8080");

session_start();

if(isset($_SESSION['name'])){
  unset($_SESSION);
  session_destroy();
  $deleteStatus = true;
  echo json_encode($deleteStatus);
}else {
  $deleteStatus = false;
  echo json_encode($deleteStatus);
}
