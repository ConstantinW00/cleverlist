<?php
include 'db_connect.php';

$error_msg = "";

if (isset($_POST['username'], $_POST['email'], $_POST['p'])) {
    // Sanitize and validate the data passed in
    $username = filter_input(INPUT_POST, 'username', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $email = filter_var($email, FILTER_VALIDATE_EMAIL);
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Not a valid email
        $error_msg .= '<p class="error">The email address you entered is not valid</p>';
    }
    
    $password = filter_input(INPUT_POST, 'p', FILTER_SANITIZE_STRING);
    if (strlen($password) != 128) {
        // The hashed pwd should be 128 characters long.
        // If it's not, something really odd has happened
        $error_msg .= '<p class="error">Invalid password configuration.</p>';
    }

    // Username validity and password validity have been checked client side.
    // This should should be adequate as nobody gains any advantage from
    // breaking these rules.
    //
    
    $prep_stmt = "SELECT id FROM members WHERE email = ? LIMIT 1";
    $stmt = $mysqli->prepare($prep_stmt);
    
    if ($stmt) {
        $stmt->bind_param('s', $email);
        $stmt->execute();
        $stmt->store_result();
        
        if ($stmt->num_rows == 1) {
            // A user with this email address already exists
            $error_msg .= '<p class="error">A user with this email address already exists.</p>';
        }
    }
    
    // TODO: 
    // We'll also have to account for the situation where the user doesn't have
    // rights to do registration, by checking what type of user is attempting to
    // perform the operation.

    if (empty($error_msg)) {
        // Create a random salt
        $random_salt = hash('sha512', 
					uniqid(openssl_random_pseudo_bytes(16), TRUE));

        // Create salted password 
        $password = hash('sha512', $password . $random_salt);

        // Insert the new user into the database 
        if ($insert_stmt = $mysqli->prepare("INSERT INTO members (username, email, password, salt) VALUES (?, ?, ?, ?)")) {

            $insert_stmt->bind_param('ssss', 
						$username, 
						$email, 
						$password, 
						$random_salt);

            // Execute the prepared query.
            $insert_stmt->execute();
        }
        header('Location: ./register_success.php');
    }
}
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="user-scalable=yes, initial-scale=1.0, maximum-scale=1.5, minimum-scale=0.5, width=device-width" />
    <link rel="stylesheet" type="text/css" href="css/designanmelden.css" />
    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet">
    <link rel="SHORTCUT ICON" href="pictures/tab.jpg" type="image/x-icon">
    <title>Registrierung</title>
    <script language="javascript" type="text/javascript" src="javascript/jquery.min.js"></script>
    <script type = "text/javascript" src = "javascript/jquery-ui.min.js">
    </script>
    <script type="text/javascript" src="javascript/systemanmelden.js"></script>
    <script type="text/JavaScript" src="sha512.js"></script> 
    <script type="text/JavaScript" src="forms.js"></script>
</head>
    <body>
        <div class="header">
          <h1 style="color: #2B526B">-Spiele aus Spaß-</h1>
          <p style="color: gray; opacity: 0.8">Willkommen bei <br>-Spiele aus Spaß-</p>
        </div>
        <div class="topnav">
          <a href="index.html">Home</a>
          <a href="index.html" target="_blank">Spiele</a>
          <a href="support.html" target="_blank">Support</a>
          <a href="kontakt.html" target="_blank" style="float:right">Kontakt</a>
        </div>
        <!-- Registration form to be output if the POST variables are not
        set or if the registration script caused an error. -->
        <?php
        if (!empty($error_msg)) {
            echo $error_msg;
        }
        ?>
    <div class="row">
        <div class="card">
            <ul>
                <li>Dein Username darf nur Ziffern, groß und klein Buchstaben und Unterstriche enthalten</li>
                <li>Deine E-Mail muss ein gültiges E-Mail Adressen Format haben</li>
                <li>Dein Passwort muss mindestens sechs Stellen lang sein</li>
                <li>Dein Passwort muss enthalten:
                    <ul>
                        <li>Mindestens einen Großbuchstaben (A..Z)</li>
                        <li>Mindestens einen Kleinbuchstaben (a..z)</li>
                        <li>Mindestens eine Zahl (0..9)</li>
                    </ul>
                    </li>
                    <li>Passwort und Passwort Bestätigung müssen übereinstimmen</li>
                </ul>
            </div>
        <form action="<?php echo htmlentities($_SERVER['PHP_SELF']); ?>" method="post" name="registration_form">
            <div class="card" id="card2">
                <h2>Registrieren</h2>
                <input type="text" placeholder="Benutzername" name='username' id='username' />
                <input type="text" placeholder="E-Mail" name="email" id="email" />
                <input type="password" placeholder="Passwort" name="password" id="password"/>
                <input type="password" placeholder="Passwort wiederholen" name="confirmpwd" id="confirmpwd" />
                <button id="registrieren" onclick="return regformhash(this.form, this.form.username, this.form.email, this.form.password, this.form.confirmpwd);" />Registrieren</button>
                <p>Schon mal hier gewesen? <a id="anm" style="text-decoration: underline">Anmelden</a></p>
            </div>
        </form>
    </div>

<div class="footer">
    <p style="opacity: 0.7; font-size: 12px; margin-top: 1%; text-align: center"> 
    <a href ="impressum.html" style="text-decoration: underline; color: #000000">Impressum</a>
    Copyright © 2016-2018 Constantin Weitzmann. All rights reserved. This site was developed by Constantin W.
    </p>
</div>
    </body>
</html>




