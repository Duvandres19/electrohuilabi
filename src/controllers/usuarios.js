const conexionPG = require('../database/conexion');
const service = require('../services');
const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');


const getUsers = async(req, res) => {

    const response = await conexionPG.conexion.query('SELECT codigo,nombres,apellidos,correo,rol, comercial,controlperdidas,facturacion,reconexion,pqr,suspensiones FROM dwusuarios');

    res.status(200).send({
        usuarios: response.rows
    });



};



const createUser = async(req, res) => {

    var {
        nombres,
        apellidos,
        rol,
        correo,
        contrasena,
        comercial,
        facturacion,
        controlperdidas,
        reconexion,
        suspensiones,
        pqr
    } = req.body;

    bcrypt.genSalt(10, (err, salt) => {
        if (err) return err;

        bcrypt.hash(contrasena, salt, null, async(err, hash) => {
            if (err) return err;

            contrasena = hash;

            let query = 'INSERT INTO dwusuarios(nombres, apellidos, rol, correo,contrasena,comercial,facturacion,controlperdidas,reconexion,suspensiones,pqr) ';
            query += ' VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)';
            const response = await conexionPG.conexion.query(query, [nombres, apellidos, rol, correo, contrasena, comercial, facturacion, controlperdidas, reconexion, suspensiones, pqr]);
            res.status(200).send({
                message: 'registro afectado',
                body: {
                    usuario: {
                        nombres,
                        apellidos,
                        rol,
                        correo,
                        contrasena,
                        comercial,
                        facturacion,
                        controlperdidas,
                        reconexion,
                        suspensiones,
                        pqr
                    }
                }
            });


        });
    });


};


const signIn = async(req, res) => {

    const {
        correo,
        contrasena
    } = req.body;

    let user = await conexionPG.conexion.query('SELECT nombres, apellidos, rol, correo,contrasena,comercial,facturacion,controlperdidas,reconexion,suspensiones,pqr FROM dwusuarios WHERE correo=$1', [correo]);
    if (user.rows.length > 0) {
        console.log(user.rows[0].contrasena);

        bcrypt.compare(contrasena, user.rows[0].contrasena, (err, isMatch) => {

            if (err) return res.status(200).send({
                message: `Error ${err}`
            });
            if (!isMatch) return res.status(200).send({
                message: `Error de contraseña`
            });

            console.log(user.rows[0]);
            return res.status(200).send({

                message: `Te has logueado correctamente`,
                token: service.createToken(user.rows[0]),
                id: user.rows[0].codigo,
                correo: user.rows[0].correo,
                nombres: user.rows[0].nombres,
                apellidos: user.rows[0].apellidos,
                rol: user.rows[0].rol,
                comercial: user.rows[0].comercial,
                facturacion: user.rows[0].facturacion,
                reconexion: user.rows[0].reconexion,
                controlperdidas: user.rows[0].controlperdidas,
                suspensiones: user.rows[0].suspensiones,
                pqr: user.rows[0].pqr



            });
        });


    } else {

        return res.status(200).send({
            message: "sin datos"
        });

    }

};

const updateUser = async(req, res) => {
    const id = parseInt(req.params.codigo);
    const {
        nombres,
        apellidos,
        rol,
        correo,
        comercial,
        facturacion,
        controlperdidas,
        reconexion,
        suspensiones,
        pqr
    } = req.body;

    let query = 'UPDATE dwusuarios SET nombres = $1, apellidos = $2, rol = $3, correo = $4,';
    query += 'comercial = $5, facturacion = $6, controlperdidas = $7, reconexion= $8 , suspensiones= $9, pqr = $10';
    query += ' WHERE codigo = $11';
    let response = await conexionPG.conexion.query(query, [
        nombres, apellidos, rol, correo, comercial, facturacion, controlperdidas,
        reconexion, suspensiones, pqr, id
    ]);

    return res.status(200).send({
        message: "registro afectado"
    });

};

const deleteUser = async(req, res) => {
    const id = parseInt(req.params.codigo);
    console.log(req.params.codigo);
    let response = await conexionPG.conexion.query('DELETE FROM dwusuarios WHERE codigo= $1', [id]);

    return res.status(200).send({
        message: "registro afectado"
    });
};



module.exports = {
    createUser,
    getUsers,
    signIn,
    updateUser,
    deleteUser

};