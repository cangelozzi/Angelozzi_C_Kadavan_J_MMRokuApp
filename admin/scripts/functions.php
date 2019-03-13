<?php

//! Redirect Function for Backend
    function redirect_to($location)
    {
        if ($location != null) {
            header('Location:'.$location);
            exit();
        }
    }

  //! Fetch all movies to Frontend
  function get_movies()
  {
      include('connect.php');

      $movie_query = "SELECT m.*, c.`cat_name` FROM tbl_movie m INNER JOIN tbl_mov_cat l INNER JOIN tbl_category c ON m.`movie_id` = l.`movie_id` AND l.`cat_id` = c.`cat_id`  ORDER BY m.`movie_year` DESC LIMIT 40;";

      $get_movies = $pdo->prepare($movie_query);
      $get_movies->execute();

      $movies = [];

      while ($row = $get_movies->fetch(PDO::FETCH_ASSOC)) {
          $movies[] = $row;
      }
      return $movies;
  }

        //! Fetch fav movies to Frontend
  function myList_movies()
  {
      include('connect.php');

      $movie_query = "SELECT * FROM tbl_movie WHERE `movie_fav` = 1;";

      $get_movie_fav = $pdo->prepare($movie_query);
      $get_movie_fav->execute();

      $myList_moviefav = [];

      while ($row = $get_movie_fav->fetch(PDO::FETCH_ASSOC)) {
          $myList_moviefav[] = $row;
      }

      return $myList_moviefav;
  }


  //! Fetch all tv shows to Frontend
  function get_tvshows()
  {
      include('connect.php');

      $tv_query = "SELECT t.*, c.`cat_name` FROM tbl_tv t INNER JOIN tbl_tv_cat l INNER JOIN tbl_category c ON t.`tv_id` = l.`tv_id` AND l.`cat_id` = c.`cat_id`  ORDER BY t.`tv_year` DESC LIMIT 40;";

      $get_tv = $pdo->prepare($tv_query);
      $get_tv->execute();

      $tvshows = [];

      while ($row = $get_tv->fetch(PDO::FETCH_ASSOC)) {
          $tvshows[] = $row;
      }
      return $tvshows;
  }

      //! Fetch fav shows to Frontend
  function myList_tvshows()
  {
      include('connect.php');

      $tv_query = "SELECT * FROM tbl_tv WHERE `tv_fav` = 1;";

      $get_tv_fav = $pdo->prepare($tv_query);
      $get_tv_fav->execute();

      $myList_tvfav = [];

      while ($row = $get_tv_fav->fetch(PDO::FETCH_ASSOC)) {
          $myList_tvfav[] = $row;
      }

      return $myList_tvfav;
  }


  //! Fetch all music to Frontend
  function get_music()
  {
      include('connect.php');

      $tv_query = "SELECT m.*, c.`cat_name` FROM tbl_music m INNER JOIN tbl_mus_cat l INNER JOIN tbl_category c ON m.`music_id` = l.`music_id` AND l.`cat_id` = c.`cat_id`  ORDER BY m.`music_year` DESC LIMIT 40;";

      $get_tv = $pdo->prepare($tv_query);
      $get_tv->execute();

      $tvshows = [];

      while ($row = $get_tv->fetch(PDO::FETCH_ASSOC)) {
          $tvshows[] = $row;
      }
      return $tvshows;
  }

    //! Fetch fav music to Frontend
  function myList_music()
  {
      include('connect.php');

      $music_query = "SELECT * FROM tbl_music WHERE `music_fav` = 1;";

      $get_music = $pdo->prepare($music_query);
      $get_music->execute();

      $myList_music = [];

      while ($row = $get_music->fetch(PDO::FETCH_ASSOC)) {
          $myList_music[] = $row;
      }

      return $myList_music;
  }

  //! Fetch all users to Frontend
  function get_all_users()
  {
      include('connect.php');
      $users_query = "SELECT * FROM tbl_user WHERE `user_active` = true";

      $get_users = $pdo->prepare($users_query);
      $get_users->execute();

      $users = [];
      while ($row = $get_users->fetch(PDO::FETCH_ASSOC)) {
          $users[] = $row;
      }
      return $users;
  }

  //! Get Single User
  function get_user($user)
  {
      include('connect.php');
      $user_query = "SELECT * FROM tbl_user WHERE `user_active` = true AND `username` = :user";

      $get_user = $pdo->prepare($user_query);
      $get_user->execute(
          array(
        ':user' => $user
      )
    );

      $user = $get_user->fetch(PDO::FETCH_ASSOC);

      return $user;
  }

//! Update user access
function update_user_access($data)
{
    include('connect.php');

    foreach ($data as $key) {
        $update_user_query = "UPDATE `tbl_user` SET `user_admin` = :admin, `user_access` = :access, `user_active` = :active WHERE `username` = :username;";

        $update_user_set = $pdo->prepare($update_user_query);
        $update_user_set->execute(
            array(
        ':admin' => $key->user_admin,
        ':access' => $key->user_access,
        ':active' => $key->user_active,
        ':username' => $key->username,
      )
    );
    }
}
