<?php

//! Redirect Function for Backend
	function redirect_to($location){
		if($location != NULL){
			header('Location:'.$location);
			exit();
		}
  }

  //! Fetch all movies to Frontend
  function get_all_movies() {
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

//   //! Create User
//   	function createUser($fname,$username,$password,$email){
// 		include('connect.php');

// 		$create_user_query = 'INSERT INTO tbl_user(`user_name`,`username`,`password`,user_email)';
// 		$create_user_query .= ' VALUES(:fname,:username,:password,:email)';

// 		$create_user_set = $pdo->prepare($create_user_query);
// 		$create_user_set->execute(
// 			array(
// 				':fname'=>$fname,
// 				':username'=>$username,
// 				':password'=>$password,
// 				':email'=>$email
// 			)
// 		);

// 		if($create_user_set->rowCount()){
// 			redirect_to('index.php');
// 		}else{
// 			$message = 'Something went wrong. Try again.';
// 			return $message;
// 		}

// }