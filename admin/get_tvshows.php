<?php

require "scripts/functions.php";

$data = get_tvshows();

echo json_encode($data);