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
    <link rel="stylesheet" type="text/css" href="css/designanmelden.css" />
    <link rel="SHORTCUT ICON" href="pictures/tab.jpg" type="image/x-icon">
    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet">
    <title>Anmeldung</title>
    <script language="javascript" type="text/javascript" src="javascript/jquery.min.js"></script>
    <script type = "text/javascript" src = "javascript/jquery-ui.min.js">
    </script>
    <script type="text/javascript" src="javascript/systemanmelden.js"></script>
    <script type = "text/javascript" src = "forms.js"></script>
    <script type="text/javascript" src="sha512.js"></script>
</head>

    <body> 
        <?php 
            if(isset($_GET['error'])) { 
                echo 'Error Logging In!'; 
            } 
        ?>
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

<div class="row">
  <div class="leftcolumn" style="width: 100%;">
    <form action="process_login.php" method="post" name="login_form">
    <div class="card" id="card1">
        <h2>Anmelden</h2>
            <input id="anmname" placeholder="E-mail" type="text" name="email" />
            <input id="anmpass" type="password" placeholder="Passwort" name="password" id="password"/>
            <button id="anmelden" onclick="formhash(this.form, this.form.password, this.form.email);" />Anmelden</button>
            <p>Noch nie angemeldet? <a id="reg" style="text-decoration: underline">Registrieren</a><br><p>
    </div>
    </form>

<div class="footer">
        <p style="opacity: 0.7; font-size: 12px; margin-top: 1%; text-align: center"> 
        <a href ="impressum.html" style="text-decoration: underline; color: #000000">Impressum</a>
        Copyright © 2016-2018 Constantin Weitzmann. All rights reserved. This site was developed by Constantin W.
    </p>
</div>
    </body>
</html>