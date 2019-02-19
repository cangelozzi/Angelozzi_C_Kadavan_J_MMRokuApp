<?php

require "scripts/functions.php";

$data = get_movies();

echo json_encode($data);