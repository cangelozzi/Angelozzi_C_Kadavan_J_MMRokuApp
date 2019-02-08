<?php

function login($username, $password, $ip)
{
    require_once 'connect.php';
    //Check if username exists

    $check_exist_query = 'SELECT COUNT(*) FROM tbl_user';
    $check_exist_query .= ' WHERE `username` = :username';

    $user_set = $pdo->prepare($check_exist_query);
    $user_set->execute(
        array(
            ':username'=>$username
        )
    );


    if ($user_set->fetchColumn()>0) {
        $get_user_query = 'SELECT * FROM tbl_user WHERE `username` = :username';
        $get_user_query .= ' AND `password` = :password';


        $get_user_set = $pdo->prepare($get_user_query);

        $get_user_set->execute(
            array(
                ':username'=>$username,
                ':password'=>$password
            )
        );

        while ($found_user = $get_user_set->fetch(PDO::FETCH_ASSOC)) {
            $id = $found_user['user_id'];
            $_SESSION['user_id'] = $id;
            $_SESSION['username'] = $found_user['username'];

            //Update user login IP
      //       $update_ip_query = 'UPDATE tbl_user SET user_ip=:ip WHERE user_id=:id';
      //       $update_ip_set = $pdo->prepare($update_ip_query);
      //       $update_ip_set->execute(
      //           array(
      //               ':ip'=>$ip,
      //               ':id'=>$id
      //           )
      // );

            $user = [];
            $user['id'] = $found_user['user_id'];
            $user['username'] = $found_user['username'];
            $user['admin'] = $found_user['user_admin'];
            $user['access'] = $found_user['user_access'];

            return $user;
        }

        if (empty($id)) {
            $message = 'Login Failed!';
            return $message;
        }

        redirect_to('index.php');
    } else {
        $message = 'Login Failed!';
        return $message;
    }
}
