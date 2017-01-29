<?
// Imposta dati di accesso a MySql
$login = "";
$password = "";
$database = "";

// mi connetto e seleziono il database
$db = mysql_connect(localhost, $login, $password) or die ("Errore!");
mysql_select_db($database, $db);

// Recuperiamo l'ID del link passato attraverso la querystring
$linkid = $_GET['id'];

// Selezioniamo il record corrispondente all'ID del link
$sql = "SELECT link FROM contaclick WHERE id = '$linkid'";
$result = @mysql_query($sql);
$numrows = mysql_num_rows($result);

// Se troviamo l'ID selezionato..
if ($numrows!=0) {
  // Recuperiamo il valore del campo link...
  $resrow = mysql_fetch_row($result);
  $link_to_redirect = $resrow[0];

  // Aggiorniamo il contatore
  $sql2 = "UPDATE contaclick SET count = count + 1 WHERE id = '$linkid'";
  $result2 = @mysql_query($sql2);

  // Reindiriziamo l'utente sul sito di destinazione
  header("Location: ". $link_to_redirect);
}
// Se invece l'ID non esiste... 
else
{
  // stampiamo un errore!
  echo "Errore... il link non esiste!";
}
?>