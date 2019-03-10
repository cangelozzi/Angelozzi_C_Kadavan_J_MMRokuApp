<?php
    require_once 'scripts/config.php';
    include('scripts/connect.php');


    $data = json_decode(file_get_contents('php://input'));

var_dump($data);
    if (empty($data)) {
        $message = 'No Data - Update Failed';
    } else {
        foreach ($data as $key) {
            $query = "UPDATE `tbl_movie` SET `movie_fav` = 1 WHERE `movie_id` = $key;";
            $update_fav = $pdo->prepare($query);
            $update_fav->execute();
        }
    }
