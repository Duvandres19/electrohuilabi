<?php

require '../lib.php';

$api = new nomogramaApi();

$input = $api->detectRequestBody();

if (isset($input['id_tipo_usuario'])) {
    $json = $api->getTypeUsersAttr($input['id_tipo_usuario']);
} else {
    $json = 'Entrada de datos incorrecta';
}

echo json_encode($json);
