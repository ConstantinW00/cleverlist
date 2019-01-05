<!--
PROPRIETARY / CONFIDENTIAL.
// Use of this product is subject to license terms.
// Copyright © 2016-2018 Constantin Weitzmann.
// All rights reserved.
-->


<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="user-scalable=yes, initial-scale=1.0, maximum-scale=1.5, minimum-scale=0.5, width=device-width" />
    <link rel="SHORTCUT ICON" href="pictures/tab.jpg" type="image/x-icon">
    <title>Process_Login</title>
</head>

<?php
include 'db_connect.php';
include 'functions.php';
include 'forms.js';
include 'sha512.js';


sec_session_start(); // Our custom secure way of starting a PHP session.

if (isset($_POST['email'], $_POST['p'])) {
    $email = $_POST['email'];
    $password = $_POST['p']; // The hashed password.
    
    if (login($email, $password, $mysqli) == true) {
        // Login success 
        echo("Hat gefunzt")
        header('Location: https://www.cfung.de/');
    } else {
        // Login failed 
        header('Location: https://www.cfung.de/impressum.html');
    }
} else {
    // The correct POST variables were not sent to this page. 
    echo 'Invalid Request';
    header('Location: https://www.cfung.de/impressum.html');
}

?>
</html>