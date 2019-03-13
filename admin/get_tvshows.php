<?php

require "scripts/functions.php";

if (isset($_GET['myList'])) {
    $data = myList_tvshows();
} else {
    $data = get_tvshows();
}


echo json_encode($data);
