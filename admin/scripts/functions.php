<?php
	function redirect_to($location){
		if($location != NULL){
			header('Location:'.$location);
			exit();
		}
  }

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