
<?php
require 'functions.php';
require 'connect.php';



// TODO -> PLEASE SANITIZE INPUTS! htmlentities, prepare statement, etc...
// TODO -> Bcrypt password in database

if (isset($_GET['username'])) {
  $data = validate_login($conn, $_GET['username'], $_GET['password']);
  echo json_encode($data);
} elseif (isset($_GET['user'])) {
  $data = get_single_user($conn, $_GET['user']);
  echo json_encode($data);
} elseif (isset($_GET['movie'])) {
  $data = get_single_video($conn, $_GET['movie']);
  echo json_encode($data);
} else {
  $data = get_all_videos($conn);
  echo json_encode($data);
}