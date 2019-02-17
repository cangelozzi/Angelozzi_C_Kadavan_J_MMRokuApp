<?php

require "scripts/functions.php";

$data = get_all_users();

echo json_encode($data);