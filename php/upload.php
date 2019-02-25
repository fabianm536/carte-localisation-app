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

    $csv_json = preg_replace('/
    ^
    [\pZ\p{Cc}\x{feff}]+
    |
    [\pZ\p{Cc}\x{feff}]+$
   /ux', '',$csv_json);

    return json_encode( $csv_json);
}

$epsg3 = $_POST['epsg3'];

 if(!empty($_FILES["fileToUpload"]["name"]))  
 {
$target_dir = "uploads/";
$temp = explode(".", $_FILES["fileToUpload"]["name"]);
$target_file = $target_dir .  round(microtime(true)) . '.' . end($temp);
$path_parts =pathinfo($target_file);
$allowed_ext = array("csv");  
$extension = $path_parts['extension'];

if(in_array($extension, $allowed_ext))  {

			if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {

            $jsonresult = csvtojson($target_file, ",",$epsg3);

            echo $jsonresult;

			} else {
				echo  '{"messageError":"Sorry, there was an error uploading your file."}';
			}
		
}
else {
        echo '{"messageError":"Sorry, only csv files are allowed."}';
    }
}
else {
        echo '{"messageError":"Sorry, there was an error uploading your file. Empty file"}';
    }

?>