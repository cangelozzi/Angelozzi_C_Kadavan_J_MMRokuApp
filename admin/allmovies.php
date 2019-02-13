<?php

require "scripts/functions.php";

$data = get_all_movies();

echo json_encode($data);