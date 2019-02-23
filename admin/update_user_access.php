<?php
    require_once 'scripts/config.php';

    $data = json_decode(file_get_contents('php://input'));

    if (empty($data)) {
        $message = 'No Data - Update Failed';
    } else {
        $message = update_user_access($data);
    }

    // echo json_encode($message);