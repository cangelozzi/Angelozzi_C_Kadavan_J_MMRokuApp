<?php
require 'connect.php';

function get_single_video($pdo, $vid)
{
      // prepare query
  $statement = $pdo->prepare("SELECT * FROM tbl_videos WHERE id = ?");
  // Bind ID
  $statement->bindParam(1, $vid);
  // execute query
  $statement->execute();

  $results = array();
  while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
    $results[] = $row;
  }
  return $results;
}

function get_all_videos($pdo)
{
    // prepare query
  $statement = $pdo->prepare("SELECT * FROM `tbl_movie`");
  // execute query
  $statement->execute();
  
  $results = array();
  while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
    $results[] = $row;
  }
  return $results;
}
?>