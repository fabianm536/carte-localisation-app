<?php
require('fpdf181/fpdf.php');

define('UPLOAD_DIR', 'tmp/');
//$logo= '../img/logo.png';

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
//$pdf->Image($logo,171.5,-0.1,24.7);
//$pdf->SetDrawColor(218,190,134);
//$pdf->Line(10, 26, 200, 26);
//$pdf->Line(10, 285, 200, 285);
$pdf->Image($file1,15,30,180);
$pdf->Image($file2,15,150,180);
$pdf->Image($file3,15,228,70);

$pdf->Output(null, 'foobar-' . time() . '.pdf');

?>