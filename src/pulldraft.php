<?php require 'db_connect.php' ?>
<?php
@header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Connection, User-Agent, Cookie');
@header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Origin: http://localhost:8080");

class result{
    public $article = array();
    public function pushData($source,$target){
        for($i=0;$i<count($target);$i++){
            array_push($source,$target[$i]);
        }
        return $source;
    }
}

$db= new db();
$db ->setAttribute(PDO::ATTR_CASE,PDO::CASE_UPPER);
$statement = $db ->sel(" SELECT * FROM `draft`");
$statement ->execute();

$statement ->setFetchMode(PDO::FETCH_ASSOC);
$data = $statement->fetchAll();

$reward = new result();
$reward->article=$reward->pushData($reward->article,$data);

echo json_encode($reward);
