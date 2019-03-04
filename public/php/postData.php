<?php

require 'conndb.php';

$fields = $_GET['fields'];
$values = $_GET['values'];


//sql requete final
$sql = "INSERT INTO etudes_sites_geoter_monde ( $fields ) VALUES ( $values );
update etudes_sites_geoter_monde set geom=st_SetSrid(st_MakePoint(long, lat), 4326);";

//recuperer le resultat de la requete
$result = pg_query($connection,$sql);

if (!$result) {
  echo "An error occurred.\n";
  exit;

}

echo "Project saved";

?>

