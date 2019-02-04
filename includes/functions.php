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

// TODO  => SANITIZE!!!

// TODO => handle if the username is in database!!  if it s not, just make it false.
// TODO => fix the above checking the $row count()
//! ------------ Login validation -----------------------
function validate_login($pdo, $user, $password)
{
  $query = "SELECT * FROM tbl_user WHERE username = '$user'";
  $get_user = $pdo->query($query);

  $results = [];

  while ($row = $get_user->fetch(PDO::FETCH_ASSOC)) {
    if ($row['password'] == $password) {
      // $row['password'] = 'XXXXXXXXXXXX';
      $results[] = $row;
    } else {
      $results[] = "false";
    }
  }
  return $results;
}
//! ------------ Login validation end    -----------------------


function get_all_users($pdo)
{
  $query = "SELECT * FROM users";
  $get_users = $pdo->query($query);

  $results = [];

  while ($row = $get_users->fetch(PDO::FETCH_ASSOC)) {
    $results[] = $row;
  }
  return $results;
}

function get_single_user($pdo, $user)
{
  $query = "SELECT * FROM users WHERE id = '$user'";
  $get_user = $pdo->query($query);

  $results = [];

  while ($row = $get_user->fetch(PDO::FETCH_ASSOC)) {
    $results[] = $row;
  }
  return $results;
}