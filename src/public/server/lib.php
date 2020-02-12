<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');
require 'consultas.php';

class nomogramaApi
{
    private $con;

    public function __construct()
    {
        $this->connectDB();
    }

    public function connectDB()
    {
        //DB DATA DEVEPLOPER
        $database = "dfgcngqjd837ol";
        $uid = "skzqgpgpmmnqhm";
        $pwd = "7ad67af7ac11aa3819e8650c7aa6aa1ac07372c9fa3e17242c11624d7ca330bc";
        $host = "ec2-54-235-86-101.compute-1.amazonaws.com";

        //establecer la conexión
        $this->con = new PDO("pgsql:host=$host;port=5432;dbname=$database;user=$uid;password=$pwd");
        if (!$this->con) {
            die('error de conexión');
        }
    }
    //Decodificacion de json que llega del front
    public function detectRequestBody()
    {
        $inputJSON = file_get_contents('php://input');
        $input = json_decode($inputJSON, true);
        return $input;
    }

    // Interpretacion de datos. CRUD LOGIN (USUARIOS, TIPOS DE USUARIOS)
    public function getLogin($usrLogin, $pwdLogin)
    {
        $response = searchLogin($this->con, $usrLogin, $pwdLogin);
        if(count($response) > 0){
            return $response;
        } else {
            return 'No hay un correo registrado con esta cuenta';

        }
    }
    public function getTypeUsers()
    {
        return searchTypeUsersBD($this->con);
    }
    public function getTypeUsersAttr($id_tipo_usuario)
    {
        return getTypeUsersAttrBD($this->con, $id_tipo_usuario);
    }
    public function deleteTypeUsers($id_tipo_usuario)
    {
        return deleteTypeUsersBD($this->con, $id_tipo_usuario);
    }
    public function insertUsers($nombre_usuario, $apellido_usuario, $pk_tipo_usuario, $user_login, $pwd_login, $cargo)
    {
        return insertUsersBD($this->con, $nombre_usuario, $apellido_usuario, $pk_tipo_usuario, $user_login, $pwd_login, $cargo);
    }
    public function insertTypeUsers($tipo_usuario, $descripcion_tipo_usuario)
    {
        return insertTypeUsersBD($this->con, $tipo_usuario, $descripcion_tipo_usuario);
    }
    public function updateTypeUsers($id_tipo_usuario, $tipo_usuario, $descripcion_tipo_usuario)
    {
        return updateTypeUsersBD($this->con, $id_tipo_usuario, $tipo_usuario, $descripcion_tipo_usuario);
    }
    public function getUsers()
    {
        return get_Users($this->con);
    }
    public function deleteUsers($idUser)
    {
        return delete_Users($this->con, $idUser);
    }
    public function getUserAttr($idUser)
    {
        $response = getUserAttrBD($this->con, $idUser);
        if(count($response) > 0){
            return $response;
        } else {
            return 'No hay un usuario con este id';

        }
    }
    public function updateUsers($id_usuario, $nombre_usuario, $apellido_usuario, $pk_tipo_usuario, $user_login, $pwd_login, $cargo)
    {
        return updateUsersBD($this->con, $id_usuario, $nombre_usuario, $apellido_usuario, $pk_tipo_usuario, $user_login, $pwd_login, $cargo);
    }
    
}
