<?php

//! Redirect Function for Backend
	function redirect_to($location){
		if($location != NULL){
			header('Location:'.$location);
			exit();
		}
  }

  //! Fetch all movies to Frontend
  function get_movies() {
    include('connect.php');

    $movie_query = "SELECT m.*, c.`cat_name` FROM tbl_movie m INNER JOIN tbl_mov_cat l INNER JOIN tbl_category c ON m.`movie_id` = l.`movie_id` AND l.`cat_id` = c.`cat_id`  ORDER BY m.`movie_year` DESC LIMIT 40;";

    $get_movies = $pdo->prepare($movie_query);
    $get_movies->execute();

    $movies = [];

    while($row = $get_movies->fetch(PDO::FETCH_ASSOC)) {
      $movies[] = $row;
    }
    return $movies;
  }

  //! Fetch all users to Frontend
  function get_all_users() {
    include('connect.php');
    $users_query = "SELECT * FROM tbl_user WHERE `user_active` = true";

    $get_users = $pdo->prepare($users_query);
    $get_users->execute();

    $users = [];
    while($row = $get_users->fetch(PDO::FETCH_ASSOC)) {
      $users[] = $row;
    }
    return $users;

  }

  //! Get Single User
  function get_user($user) {
    include('connect.php');
    $user_query = "SELECT * FROM tbl_user WHERE `user_active` = true AND `username` = :user";

    $get_user = $pdo->prepare($user_query);
    $get_user->execute(
      array (
        ':user' => $user
      )
    );

    $user = $get_user->fetch(PDO::FETCH_ASSOC);

    return $user;
  }

//! Update user access
function update_user_access($data) {

  include('connect.php');

  foreach ($data as $key) {

    $update_user_query = "UPDATE `tbl_user` SET `user_admin` = :admin, `user_access` = :access, `user_active` = :active WHERE `username` = :username;";

    $update_user_set = $pdo->prepare($update_user_query);
    $update_user_set->execute(
      array (
        ':admin' => $key->user_admin,
        ':access' => $key->user_access,
        ':active' => $key->user_active,
        ':username' => $key->username,
      )
    );
  }

}