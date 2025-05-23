<?php
// obtener datos de formulario y llevarlo a la base de datos mongoDB
$nombre = $_POST['nombre'];
$apellido = $_POST['correo'];   
$mensaje = $_POST['mensaje'];

// Conectar a la base de datos MongoDB
$conexion = new MongoDB\Driver\Manager("mongodb://localhost:27017");
// Crear un nuevo documento
$documento = new MongoDB\Driver\BulkWrite();
$documento->insert([
    'nombre' => $nombre,
    'apellido' => $apellido,
    'mensaje' => $mensaje
]);
// Insertar el documento en la colección "usuarios"
$conexion->executeBulkWrite('mi_base_datos.usuarios', $documento);
// Redirigir a la página de agradecimiento
header('Location: gracias.html');       

$conexion = null;
// Fin del script


?>

