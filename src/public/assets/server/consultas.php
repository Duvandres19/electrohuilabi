<?php
ini_set('display_errors', '1');
date_default_timezone_set('America/Bogota');

function executeQuery($con, $sql)
{
    $result = $con->query($sql);
    if ($result) {
        $fetched_data = array();
        while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            array_push($fetched_data, $row);
        }
        return $fetched_data;
    } else {
        return $con->errorInfo()[2];
    }
}
function executeQueryInsert($con, $sql)
{
    $result = $con->query($sql);
    if ($result) {
        return "ok";
    } else {
        return $con->errorInfo()[2];
    }
}

//CRUD DE LOGIN(USUARIOS- TIPO USUARIOS)
function searchLogin($con, $usrLogin, $pwdLogin)
{
    $sql = "SELECT id_login, nombre_usuario, apellido_usuario, tipo_usuario, descripcion_tipo_usuario, user_login, pwd_login, cargo
    FROM login
    INNER JOIN tipo_usuario on pk_tipo_usuario = id_tipo_usuario
    WHERE user_login = '$usrLogin' AND pwd_login = '$pwdLogin'";

    return executeQuery($con, $sql);
}
function searchTypeUsersBD($con)
{
    $sql = "SELECT id_tipo_usuario, tipo_usuario, descripcion_tipo_usuario
    FROM tipo_usuario";

    return executeQuery($con, $sql);
}
function insertUsersBD($con, $nombre_usuario, $apellido_usuario, $pk_tipo_usuario, $user_login, $pwd_login, $cargo)
{
    $sql = "INSERT INTO public.login(
	id_login, nombre_usuario, apellido_usuario, pk_tipo_usuario, user_login, pwd_login, cargo)
    VALUES (nextval('sec_users'), '$nombre_usuario', '$apellido_usuario', $pk_tipo_usuario, '$user_login', '$pwd_login', '$cargo');";

    return executeQueryInsert($con, $sql);
}
function insertTypeUsersBD($con, $tipo_usuario, $descripcion_tipo_usuario)
{
    $sql = "INSERT INTO public.tipo_usuario(
        id_tipo_usuario, tipo_usuario, descripcion_tipo_usuario)
        VALUES (nextval('sec_type_users'), '$tipo_usuario', '$descripcion_tipo_usuario');";

    return executeQueryInsert($con, $sql);
}
