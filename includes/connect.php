<?php 

//! Use Associative Array, for connection details.
$dbn_dsn = array(
  'host' => 'localhost',
  'dbname' => 'db_video_player',
  'charset' => 'utf8',
);

// set the divider inside the associative array
$dsn = 'mysql: ' . http_build_query($dbn_dsn, '', ';');

// This is the DB Credentials
$db_user = 'root';
$db_pass = 'root';

//PDO is a Php Data Object
try {
  $conn = new PDO($dsn, $db_user, $db_pass);
  // var_dump($pdo);
} catch (PDOException $exception) {
  echo 'Connection Error ' . $exception->getMessage();
  exit();
}

?>
