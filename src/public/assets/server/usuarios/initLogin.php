<?php

require '../lib.php';

$api = new nomogramaApi();

$input = $api->detectRequestBody();

if (isset($input['user_login'], $input['pwd_login'])) {
    
    $json = $api->getLogin($input['user_login'], $input['pwd_login']);
} else {
    $json = 'Entrada de datos incorrecta';
}

echo json_encode($json);
