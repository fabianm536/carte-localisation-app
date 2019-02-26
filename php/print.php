<?php
require('fpdf181/fpdf.php');

define('UPLOAD_DIR', 'tmp/');

$img1 = $_FILES['picture1']['tmp_name'];
$img2 = $_FILES['picture2']['tmp_name'];
$img3 = $_FILES['picture3']['tmp_name'];
$file1 = UPLOAD_DIR . uniqid() . '.jpg';
$file2 = UPLOAD_DIR . uniqid() . '.jpg';
$file3 = UPLOAD_DIR . uniqid() . '.jpg';
copy($img1, $file1);
copy($img2, $file2);
copy($img3, $file3);

$pdf = new FPDF();
$pdf->AddPage();
$pdf->SetFont('Times','',12);

$pdf->Image($file1,15,15,180);
$pdf->Image($file2,15,135,180);
$pdf->Image($file3,15,228,70);

$pdf->Output(null, 'foobar-' . time() . '.pdf');

?>