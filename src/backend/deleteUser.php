<?php require 'db_connect.php' ?>
<?php
@header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Connection, User-Agent, Cookie');
@header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Origin: http://localhost:8080");

if(isset($_POST['TITLE']) && isset($_POST['TIME'])){
  $title = $_POST['TITLE'];
  $time = $_POST['TIME'];
  $content = $_POST['CONTENT'];
  $author = $_POST['AUTHOR'];
  $avatar = $_POST['AVATAR'];

  $db= new db();
  $db ->setAttribute(PDO::ATTR_CASE,PDO::CASE_UPPER);
  $statement = $db ->sel("INSERT INTO `bbs`.`draft` (`id`, `title`, `time`, `author`, `avatar`, `content`) VALUES (NULL, '$title', '$time', '$author', '$avatar', '$content');");
  $statement ->execute();

  $statement = $db ->sel("select `id` from `draft` order by `id` DESC limit 1;");
  $statement ->execute();

  $statement ->setFetchMode(PDO::FETCH_OBJ);
  $data = $statement->fetch();

  echo json_encode($data);
}
