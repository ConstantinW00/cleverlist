<?php

$db_server = 'rdbms.strato.de';
$db_benutzer = 'U3559541';
$db_passwort = 'ujaskbas77623490';
$db_name = 'DB3559541';

# Verbindungsaufbau
if(mysql_connect($db_server, $db_benutzer, $db_passwort)) {
echo 'Server-Verbindung erfolgreich, wähle Datenbank aus...
';
if(mysql_select_db($db_name)) {
echo 'Datenbank erfolgreich ausgewält, alle Tests abgeschlossen.';
}
else {
echo 'Die angegebene Datenbank konnte nicht ausgewählt werden, bitte die Eingabe prüfen!';

}
}
else {
echo 'Verbindung nicht möglich, bitte Daten prüfen!

';
echo 'MYSQL-Fehler: '.mysql_error();
}
?>