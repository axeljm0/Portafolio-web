<?php
// 1. Recibir datos del formulario
$nuevoDato = [
    'nombre' => $_POST['nombre'],
    'correo' => $_POST['correo'],
    'texto' => $_POST['texto'],
    'fecha' => date(format: 'd/m/Y H:i:s') // Fecha actual
];

// 2. Leer datos existentes (o crear array vacío)
$archivoJson = 'data.json';
$datosExistentes = [];
if (file_exists($archivoJson)) {
    $contenido = file_get_contents($archivoJson);
    $datosExistentes = json_decode($contenido, true);
}

// 3. Agregar el nuevo dato
$datosExistentes[] = $nuevoDato;

// 4. Guardar el array completo en el JSON
file_put_contents($archivoJson, json_encode($datosExistentes, JSON_PRETTY_PRINT));

// 5. Redirigir de vuelta al formulario
header('Location:  /View/Styles/index.html');
exit;

?>
