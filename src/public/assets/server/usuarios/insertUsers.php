<?php

require '../lib.php';

$api = new nomogramaApi();

$input = $api->detectRequestBody();
$cargo = '';

if (isset($input['cargo'])) {
    $cargo = $input['cargo'];
}

if (isset($input['nombre_usuario'], $input['apellido_usuario'], $input['id_tipo_usuario'], $input['user_login'], $input['pwd_login'])) {

    $json = $api->insertUsers($input['nombre_usuario'], $input['apellido_usuario'], $input['id_tipo_usuario'], $input['user_login'], $input['pwd_login'], $cargo);
} else {
    $json = 'Entrada de datos incorrecta';
}

echo json_encode($json);
