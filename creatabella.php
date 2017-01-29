<?
// Imposta dati di accesso a MySql
$login = "";
$password = "";
$database = "";

// mi connetto e seleziono il database
$db = mysql_connect(localhost, $login, $password) or die ("Errore!");
mysql_select_db($database, $db);

// imposto la query per la creazione della tabella
$sql = "CREATE TABLE contaclick (
id int(20) NOT NULL auto_increment,
link varchar(255) NOT NULL default '',
count int(20) NOT NULL default '0',
PRIMARY KEY (id)
) TYPE=MyISAM;";

// eseguo la query
@mysql_query($sql) or die("Errore: $sql");

// inserisco la prima riga all'interno della nuova tabella
$sql = "INSERT INTO contaclick VALUES('', 'http://www.mrwebmaster.it', '0')";
@mysql_query($sql) or die("Errore: $sql");
?>