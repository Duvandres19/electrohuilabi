<?php

require '../lib.php';

$api = new nomogramaApi();

$input = $api->detectRequestBody();

$json = $api->getUsers();

echo json_encode($json);
