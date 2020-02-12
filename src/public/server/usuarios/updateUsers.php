<?php

require '../lib.php';

$api = new nomogramaApi();

$input = $api->detectRequestBody();
$cargo = '';

if (isset($input['id_usuario'], $input['nombre_usuario'], $input['apellido_usuario'], $input['id_tipo_usuario'], $input['user_login'], $input['pwd_login'], $input['cargo'])) {

    $json = $api->updateUsers($input['id_usuario'], $input['nombre_usuario'], $input['apellido_usuario'], $input['id_tipo_usuario'], $input['user_login'], $input['pwd_login'], $input['cargo']);
} else {
    $json = 'Error, entrada de datos incorrecta';
}

echo json_encode($json);
