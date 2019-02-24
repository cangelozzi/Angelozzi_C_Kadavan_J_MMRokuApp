<?php

require "scripts/functions.php";

$data = get_music();

echo json_encode($data);