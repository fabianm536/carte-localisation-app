<?php
require('../fpdf.php');

$pdf = new FPDF('P','mm','A4');
$pdf->AddPage();
// S�lection de la police
$pdf->SetFont('Arial','B',16);
// D�calage de 8 cm � droite
$pdf->Cell(80);
// Texte centr� dans une cellule 20*10 mm encadr�e et retour � la ligne
$pdf->Cell(20,10,'Titre',1,1,'C');
$pdf->Output();
?>
