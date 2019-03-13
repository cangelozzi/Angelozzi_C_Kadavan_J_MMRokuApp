<?php

require "scripts/functions.php";

if (isset($_GET['myList'])) {
    $data = myList_music();
} else {
    $data = get_music();
}


echo json_encode($data);
