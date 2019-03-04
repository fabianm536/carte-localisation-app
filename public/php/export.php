<?php
define('UPLOAD_DIR', 'tmp/');

$img = $_FILES['picture']['tmp_name'];
$file = UPLOAD_DIR . uniqid() . '.jpg';

copy($img, $file);

?>





