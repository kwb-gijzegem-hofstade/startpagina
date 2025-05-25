<?php
$bestand = __DIR__ . '/counter.txt'; // Zorg voor absoluut pad

// Controleer of bestand bestaat, anders aanmaken met 0
if (!file_exists($bestand)) {
    file_put_contents($bestand, '0');
}

// Lees huidige waarde
$aantal = (int)file_get_contents($bestand);

// Verhoog teller
$aantal++;

// Schrijf terug
file_put_contents($bestand, $aantal);

// Genereer afbeelding
$breedte = 200;
$hoogte = 40;
$image = imagecreate($breedte, $hoogte);

// Kleuren
$bg = imagecolorallocate($image, 255, 255, 255); // wit
$textColor = imagecolorallocate($image, 0, 0, 0); // zwart

// Tekst
$tekst = "Bezoeker: $aantal";
imagestring($image, 5, 10, 12, $tekst, $textColor);

// Toon als PNG
header("Content-Type: image/png");
imagepng($image);
imagedestroy($image);
?>
