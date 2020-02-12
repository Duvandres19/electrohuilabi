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
function getTypeUsersAttrBD($con, $id_tipo_usuario)
{
    $sql = "SELECT id_tipo_usuario, tipo_usuario, descripcion_tipo_usuario
    FROM tipo_usuario
    WHERE id_tipo_usuario = $id_tipo_usuario
    ORDER BY 2";

    return executeQuery($con, $sql);
}
function deleteTypeUsersBD($con, $id_tipo_usuario)
{
    $sql = "DELETE FROM public.tipo_usuario
    WHERE id_tipo_usuario = $id_tipo_usuario";

    return executeQueryInsert($con, $sql);
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
function updateTypeUsersBD($con, $id_tipo_usuario, $tipo_usuario, $descripcion_tipo_usuario)
{
    $sql = "UPDATE public.tipo_usuario
    SET tipo_usuario='$tipo_usuario', descripcion_tipo_usuario='$descripcion_tipo_usuario'
	WHERE id_tipo_usuario=$id_tipo_usuario;";

    return executeQueryInsert($con, $sql);
}
function get_Users($con)
{
    $sql = "SELECT id_login as id_usuario, nombre_usuario, apellido_usuario, id_tipo_usuario, tipo_usuario, descripcion_tipo_usuario, user_login, pwd_login, cargo
    FROM login
    INNER JOIN tipo_usuario on pk_tipo_usuario = id_tipo_usuario
    ORDER BY 2";

    return executeQuery($con, $sql);
}
function getUserAttrBD($con, $idUser)
{
    $sql = "SELECT id_login as id_usuario, nombre_usuario, apellido_usuario, id_tipo_usuario, tipo_usuario, descripcion_tipo_usuario, user_login, pwd_login, cargo
    FROM login
    INNER JOIN tipo_usuario on pk_tipo_usuario = id_tipo_usuario
    WHERE id_login = $idUser";

    return executeQuery($con, $sql);
}
function delete_Users($con, $idUsers)
{
    $sql = "DELETE FROM public.login
    WHERE id_login = $idUsers";

    return executeQueryInsert($con, $sql);
}
function updateUsersBD($con, $id_usuario, $nombre_usuario, $apellido_usuario, $pk_tipo_usuario, $user_login, $pwd_login, $cargo)
{
    $sql = "UPDATE public.login
            SET nombre_usuario='$nombre_usuario', apellido_usuario='$apellido_usuario', pk_tipo_usuario='$pk_tipo_usuario', user_login='$user_login', pwd_login='$pwd_login', cargo='$cargo'
            WHERE id_login=$id_usuario;";

    return executeQueryInsert($con, $sql);
}
