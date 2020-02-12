<?php

require '../lib.php';

$api = new nomogramaApi();

$input = $api->detectRequestBody();
$descripcion_tipo_usuario = '';

if (isset($input['descripcion_tipo_usuario'])) {
    $descripcion_tipo_usuario = $input['descripcion_tipo_usuario'];
}

if (isset($input['id_tipo_usuario'], $input['tipo_usuario'])) {

    $json = $api->updateTypeUsers($input['id_tipo_usuario'], $input['tipo_usuario'], $descripcion_tipo_usuario);
} else {
    $json = 'Entrada de datos incorrecta';
}

echo json_encode($json);
