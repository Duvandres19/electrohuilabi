<?php

require '../lib.php';

$api = new nomogramaApi();

$json = $api->getTypeUsers();

echo json_encode($json);
