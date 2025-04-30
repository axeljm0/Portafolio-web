<?php
// Una forma de recibir datos de un formulario y guardarlos en un archivo JSON
// y en una base de datos MySQL usando PDO.

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
header("locatio:index.html" );
exit;

// Migrar datos de personas a base de datos
try {
    // Configuración
    $servidor = "Tu Servidor";
    $basedatos = "Tu base de datos";
    $usuario = "tu usuario";
    $contrasena = "tu contraseña";
    
    // Crear conexión PDO
    $conexion = new PDO(
        "mysql:host=$servidor;dbname=$basedatos;charset=utf8", 
        $usuario, 
        $contrasena
    );
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Datos del formulario
    $nombre = $_POST['nombre'] ?? '';
    $email = $_POST['email'] ?? '';
    $texto = $_POST['texto'] ?? '';
    $fecha = date('Y-m-d H:i:s');
    
    // Preparar consulta
    $consulta = $conexion->prepare(
        "INSERT INTO usuarios (nombre, email, fecha_registro) 
         VALUES (:nombre, :email, :fecha)"
    );
    
    // Ejecutar con parámetros
    $consulta->execute([
        ':nombre' => $nombre,
        ':email' => $email,
        ":texto" => $texto,
        ':fecha' => $fecha
    ]);
    
    echo "Datos guardados correctamente. ID: " . $conexion->lastInsertId();
    
} catch(PDOException $e) {
    die("Error: " . $e->getMessage());
}

?>
