<?php 

function csvtojson($file,$delimiter,$epsg)
{
    if (($handle = fopen($file, "r")) === false)
    {
            die("can't open the file.");
    }

    $csv_headers = fgetcsv($handle, 4000, $delimiter);

    $csv_json = array();

    while ($row = fgetcsv($handle, 4000, $delimiter))
    {
            $csv_json[] = substr(json_encode(array_combine($csv_headers, $row)), 0, -1) . ' , "spatialReference" : {"wkid" : '.$epsg.'}}';
    }

    fclose($handle);

    return json_encode($csv_json);
}


$jsonresult = csvtojson("uploads/1550760642.csv", ",","32719");

echo $jsonresult;

?>