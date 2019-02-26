<?php
require('../fpdf.php');

$pdf = new FPDF('P','mm','A4');
$pdf->AddPage();
// Sélection de la police
$pdf->SetFont('Arial','B',16);
// Décalage de 8 cm à droite
$pdf->Cell(80);
// Texte centré dans une cellule 20*10 mm encadrée et retour à la ligne
$pdf->Cell(20,10,'Titre',1,1,'C');
$pdf->Output();
?>
