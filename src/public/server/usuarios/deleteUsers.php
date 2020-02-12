<?php

require '../lib.php';

$api = new nomogramaApi();

$input = $api->detectRequestBody();

if (isset($input['id_usuario'])) {
    
    $json = $api->deleteUsers($input['id_usuario']);
} else {
    $json = 'Error, entrada de datos incorrecta';
}

echo json_encode($json);
