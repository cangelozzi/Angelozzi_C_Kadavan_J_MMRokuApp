<?php

require "scripts/functions.php";

if (isset($_GET['myList'])) {
    $data = myList_movies();
} else {
    $data = get_movies();
}



echo json_encode($data);
