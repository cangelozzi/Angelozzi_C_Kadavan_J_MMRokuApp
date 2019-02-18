<?php

require "scripts/functions.php";

if (isset($_GET['name'])) {
    $data = get_user($_GET['name']);
}


echo json_encode($data);