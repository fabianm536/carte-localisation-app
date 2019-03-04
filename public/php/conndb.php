<?php
$user="postgres";
$password="postgres";
$dbname="gtrtest";
$port="5432";
$host="localhost";

$connStr = "host=$host port=$port dbname=$dbname user=$user password=$password";

$connection=pg_connect($connStr) or die ("Connection error:".pg_last_error());

?>

