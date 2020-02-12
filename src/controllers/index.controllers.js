//Clase para Almacenar las funciones y operaciones
const conexionPG = require('../database/conexion');

//Filtros
const getFiltros = async(req, res) => {
    let tabla = req.query.tabla;

    if (tabla == "controlperdidas") getFiltrosControlPerdidas(req, res);

    if (tabla == "reconexion") getFiltrosReconexion(req, res);
    if (tabla == "comercial") getFiltrosComercial(req, res);
    if (tabla == "facturacion") getFiltrosFacturacion(req, res);
    if (tabla == undefined) res.status(200).send({
        message: "sin datos"
    });





};

const getFiltrosControlPerdidas = async(req, res) => {

    let aniofiltros = await conexionPG.conexion.query(`SELECT ano FROM dwcontrolperdidas  GROUP BY ano ORDER BY ano`);
    let mesfiltros = await conexionPG.conexion.query(`SELECT mes FROM dwcontrolperdidas  GROUP BY mes ORDER BY mes`);
    let deptofiltros = await conexionPG.conexion.query(`SELECT departamento FROM dwcontrolperdidas  GROUP BY departamento ORDER BY departamento`);
    let munifiltros = await conexionPG.conexion.query(`SELECT municipio FROM dwcontrolperdidas  GROUP BY municipio ORDER BY municipio`);
    let ubicacionfiltros = await conexionPG.conexion.query(`SELECT ubicacion FROM dwcontrolperdidas  GROUP BY ubicacion`);
    let estratofiltros = await conexionPG.conexion.query(`SELECT estrato FROM dwcontrolperdidas  GROUP BY estrato ORDER BY estrato`);
    let serviciofiltros = await conexionPG.conexion.query(`SELECT clase_servicio FROM dwcontrolperdidas  GROUP BY clase_servicio`);
    let observacionVisitaFiltros = await conexionPG.conexion.query(`SELECT observacion_visita FROM dwcontrolperdidas  GROUP BY observacion_visita`);


    for (let i in aniofiltros.rows) {
        if (aniofiltros.rows[i].ano) {
            aniofiltros.rows[i].ano = parseInt(aniofiltros.rows[i].ano);
        }
    }
    for (let i in estratofiltros.rows) {
        if (estratofiltros.rows[i].estrato) {
            estratofiltros.rows[i].estrato = parseInt(estratofiltros.rows[i].estrato);
        }
    }

    res.status(200).send([{
            icon: "fas fa-map-marker-alt",
            label: "Seleccione el año",
            arrayFiltrado: aniofiltros.rows,
            sFiltrosenArray: "ano",
            nombre: "Año",
            bMostrar: true,
            bMultipleSeleccion: true

        },
        {
            icon: "fas fa-map-marker-alt",
            label: "Seleccione el mes",
            arrayFiltrado: mesfiltros.rows,
            sFiltrosenArray: "mes",
            nombre: "Mes",
            bMostrar: true,
            bMultipleSeleccion: true

        },
        {
            icon: "fas fa-map-marker-alt",
            label: "Seleccione el departamento",
            arrayFiltrado: deptofiltros.rows,
            sFiltrosenArray: "departamento",
            nombre: "Departamento",
            bMostrar: true,
            bMultipleSeleccion: true

        },
        {
            icon: "fas fa-map-marker-alt",
            label: "Seleccione el municipio",
            arrayFiltrado: munifiltros.rows,
            sFiltrosenArray: "municipio",
            nombre: "Municipio",
            bMostrar: true,
            bMultipleSeleccion: true

        },
        {
            icon: "fas fa-map-marker-alt",
            label: "Seleccione la ubicacion",
            arrayFiltrado: ubicacionfiltros.rows,
            sFiltrosenArray: "ubicacion",
            nombre: "Ubicacion",
            bMostrar: true,
            bMultipleSeleccion: true


        },
        {
            icon: "fas fa-map-marker-alt",
            label: "Seleccione el estrato",
            arrayFiltrado: estratofiltros.rows,
            sFiltrosenArray: "estrato",
            nombre: "Estrato",
            bMostrar: true,
            bMultipleSeleccion: true

        },
        {
            icon: "fas fa-map-marker-alt",
            label: "Seleccione la clase de servicio",
            arrayFiltrado: serviciofiltros.rows,
            sFiltrosenArray: "clase_servicio",
            nombre: "Clase de Servicio",
            bMostrar: true,
            bMultipleSeleccion: true

        },
        {
            icon: "fas fa-map-marker-alt",
            label: "Seleccione tipo visita",
            arrayFiltrado: observacionVisitaFiltros.rows,
            sFiltrosenArray: "observacion_visita",
            nombre: "Observacion Visita",
            bMostrar: false,
            bMultipleSeleccion: true
        }
    ]);


};

const getFiltrosReconexion = async(req, res) => {

    let aniofiltros = await conexionPG.conexion.query(`SELECT ano FROM dwreconexion  GROUP BY ano ORDER BY ano`);
    let mesfiltros = await conexionPG.conexion.query(`SELECT mes FROM dwreconexion  GROUP BY mes ORDER BY mes`);
    let deptofiltros = await conexionPG.conexion.query(`SELECT departamento FROM dwreconexion  GROUP BY departamento ORDER BY departamento`);
    let munifiltros = await conexionPG.conexion.query(`SELECT municipio FROM dwreconexion  GROUP BY municipio ORDER BY municipio`);
    let ubicacionfiltros = await conexionPG.conexion.query(`SELECT ubicacion FROM dwreconexion  GROUP BY ubicacion`);
    let estratofiltros = await conexionPG.conexion.query(`SELECT estrato FROM dwreconexion  GROUP BY estrato ORDER BY estrato`);
    let serviciofiltros = await conexionPG.conexion.query(`SELECT clase_servicio FROM dwreconexion  GROUP BY clase_servicio`);
    let observacionReconexionFiltros = await conexionPG.conexion.query(`SELECT observacion_reconexion FROM dwreconexion WHERE observacion_reconexion IS NOT NULL GROUP BY observacion_reconexion`);


    for (let i in aniofiltros.rows) {
        if (aniofiltros.rows[i].ano) {
            aniofiltros.rows[i].ano = parseInt(aniofiltros.rows[i].ano);
        }
    }
    for (let i in estratofiltros.rows) {
        if (estratofiltros.rows[i].estrato) {
            estratofiltros.rows[i].estrato = parseInt(estratofiltros.rows[i].estrato);
        }
    }

    res.status(200).send([{
            icon: "fas fa-map-marker-alt",
            label: "Seleccione el año",
            arrayFiltrado: aniofiltros.rows,
            sFiltrosenArray: "ano",
            nombre: "Año",
            bMostrar: true,
            bMultipleSeleccion: true

        },
        {
            icon: "fas fa-map-marker-alt",
            label: "Seleccione el mes",
            arrayFiltrado: mesfiltros.rows,
            sFiltrosenArray: "mes",
            nombre: "Mes",
            bMostrar: true,
            bMultipleSeleccion: true
        },
        {
            icon: "fas fa-map-marker-alt",
            label: "Seleccione el departamento",
            arrayFiltrado: deptofiltros.rows,
            sFiltrosenArray: "departamento",
            nombre: "Departamento",
            bMostrar: true,
            bMultipleSeleccion: true

        },
        {
            icon: "fas fa-map-marker-alt",
            label: "Seleccione el municipio",
            arrayFiltrado: munifiltros.rows,
            sFiltrosenArray: "municipio",
            nombre: "Municipio",
            bMostrar: true,
            bMultipleSeleccion: true
        },
        {
            icon: "fas fa-map-marker-alt",
            label: "Seleccione la ubicacion",
            arrayFiltrado: ubicacionfiltros.rows,
            sFiltrosenArray: "ubicacion",
            nombre: "Ubicacion",
            bMostrar: true,
            bMultipleSeleccion: true

        },
        {
            icon: "fas fa-map-marker-alt",
            label: "Seleccione el estrato",
            arrayFiltrado: estratofiltros.rows,
            sFiltrosenArray: "estrato",
            nombre: "Estrato",
            bMostrar: true,
            bMultipleSeleccion: true
        },
        {
            icon: "fas fa-map-marker-alt",
            label: "Seleccione la clase de servicio",
            arrayFiltrado: serviciofiltros.rows,
            sFiltrosenArray: "clase_servicio",
            nombre: "Clase de Servicio",
            bMostrar: true,
            bMultipleSeleccion: true
        },
        {
            icon: "fas fa-map-marker-alt",
            label: "Seleccione tipo reconexion",
            arrayFiltrado: observacionReconexionFiltros.rows,
            sFiltrosenArray: "observacion_reconexion",
            nombre: "Observacion de Reconexion",
            bMostrar: false,
            bMultipleSeleccion: true
        }
    ]);


};

const getFiltrosComercial = async(req, res) => {

    let aniofiltros = await conexionPG.conexion.query(`SELECT ano FROM dwcomercial  GROUP BY ano ORDER BY ano`);
    let mesfiltros = await conexionPG.conexion.query(`SELECT mes FROM dwcomercial  GROUP BY mes ORDER BY mes`);
    let deptofiltros = await conexionPG.conexion.query(`SELECT departamento FROM dwcomercial  GROUP BY departamento ORDER BY departamento`);
    let munifiltros = await conexionPG.conexion.query(`SELECT municipio FROM dwcomercial  GROUP BY municipio ORDER BY municipio`);
    let ubicacionfiltros = await conexionPG.conexion.query(`SELECT ubicacion FROM dwcomercial  GROUP BY ubicacion`);
    let estratofiltros = await conexionPG.conexion.query(`SELECT estrato FROM dwcomercial  GROUP BY estrato ORDER BY estrato`);
    let serviciofiltros = await conexionPG.conexion.query(`SELECT clase_servicio FROM dwcomercial  GROUP BY clase_servicio`);
    let conceptoFiltros = await conexionPG.conexion.query(`SELECT nombre_concepto FROM dwcomercial  GROUP BY nombre_concepto`);
    let bancoFiltros = await conexionPG.conexion.query(`SELECT nombre_banco FROM dwcomercial  GROUP BY nombre_banco`);


    for (let i in aniofiltros.rows) {
        if (aniofiltros.rows[i].ano) {
            aniofiltros.rows[i].ano = parseInt(aniofiltros.rows[i].ano);
        }
    }
    for (let i in estratofiltros.rows) {
        if (estratofiltros.rows[i].estrato) {
            estratofiltros.rows[i].estrato = parseInt(estratofiltros.rows[i].estrato);
        }
    }

    res.status(200).send([{
            icon: "fas fa-map-marker-alt",
            label: "Seleccione el año",
            arrayFiltrado: aniofiltros.rows,
            sFiltrosenArray: "ano",
            nombre: "Año",
            bMostrar: true,
            bMultipleSeleccion: true

        },
        {
            icon: "fas fa-map-marker-alt",
            label: "Seleccione el mes",
            arrayFiltrado: mesfiltros.rows,
            sFiltrosenArray: "mes",
            nombre: "Mes",
            bMostrar: true,
            bMultipleSeleccion: true
        },
        {
            icon: "fas fa-map-marker-alt",
            label: "Seleccione el departamento",
            arrayFiltrado: deptofiltros.rows,
            sFiltrosenArray: "departamento",
            nombre: "Departamento",
            bMostrar: true,
            bMultipleSeleccion: true

        },
        {
            icon: "fas fa-map-marker-alt",
            label: "Seleccione el municipio",
            arrayFiltrado: munifiltros.rows,
            sFiltrosenArray: "municipio",
            nombre: "Municipio",
            bMostrar: true,
            bMultipleSeleccion: true
        },
        {
            icon: "fas fa-map-marker-alt",
            label: "Seleccione la ubicacion",
            arrayFiltrado: ubicacionfiltros.rows,
            sFiltrosenArray: "ubicacion",
            nombre: "Ubicacion",
            bMostrar: true,
            bMultipleSeleccion: true

        },
        {
            icon: "fas fa-map-marker-alt",
            label: "Seleccione el estrato",
            arrayFiltrado: estratofiltros.rows,
            sFiltrosenArray: "estrato",
            nombre: "Estrato",
            bMostrar: true,
            bMultipleSeleccion: true
        },
        {
            icon: "fas fa-map-marker-alt",
            label: "Seleccione la clase de servicio",
            arrayFiltrado: serviciofiltros.rows,
            sFiltrosenArray: "clase_servicio",
            nombre: "Clase de Servicio",
            bMostrar: true,
            bMultipleSeleccion: true
        },
        {
            icon: "fas fa-map-marker-alt",
            label: "Seleccione Concepto",
            arrayFiltrado: conceptoFiltros.rows,
            sFiltrosenArray: "nombre_concepto",
            nombre: "Concepto",
            bMostrar: false,
            bMultipleSeleccion: true
        },
        {
            icon: "fas fa-map-marker-alt",
            label: "Seleccione Banco",
            arrayFiltrado: bancoFiltros.rows,
            sFiltrosenArray: "nombre_banco",
            nombre: "Banco",
            bMostrar: false,
            bMultipleSeleccion: true
        }
    ]);


};


const getFiltrosFacturacion = async(req, res) => {

    let aniofiltros = await conexionPG.conexion.query(`SELECT ano FROM dwfacturacion  GROUP BY ano ORDER BY ano`);
    let mesfiltros = await conexionPG.conexion.query(`SELECT mes FROM dwfacturacion  GROUP BY mes ORDER BY mes`);
    let deptofiltros = await conexionPG.conexion.query(`SELECT departamento FROM dwfacturacion  GROUP BY departamento ORDER BY departamento`);
    let munifiltros = await conexionPG.conexion.query(`SELECT municipio FROM dwfacturacion  GROUP BY municipio ORDER BY municipio`);
    let ubicacionfiltros = await conexionPG.conexion.query(`SELECT ubicacion FROM dwfacturacion  GROUP BY ubicacion`);
    let estratofiltros = await conexionPG.conexion.query(`SELECT estrato FROM dwfacturacion  GROUP BY estrato ORDER BY estrato`);
    let serviciofiltros = await conexionPG.conexion.query(`SELECT clase_servicio FROM dwfacturacion  GROUP BY clase_servicio`);
    let conceptoFiltros = await conexionPG.conexion.query(`SELECT nombre_concepto FROM dwfacturacion  GROUP BY nombre_concepto`);


    for (let i in aniofiltros.rows) {
        if (aniofiltros.rows[i].ano) {
            aniofiltros.rows[i].ano = parseInt(aniofiltros.rows[i].ano);
        }
    }
    for (let i in estratofiltros.rows) {
        if (estratofiltros.rows[i].estrato) {
            estratofiltros.rows[i].estrato = parseInt(estratofiltros.rows[i].estrato);
        }
    }

    res.status(200).send([{
            icon: "fas fa-map-marker-alt",
            label: "Seleccione el año",
            arrayFiltrado: aniofiltros.rows,
            sFiltrosenArray: "ano",
            nombre: "Año",
            bMostrar: true,
            bMultipleSeleccion: true

        },
        {
            icon: "fas fa-map-marker-alt",
            label: "Seleccione el mes",
            arrayFiltrado: mesfiltros.rows,
            sFiltrosenArray: "mes",
            nombre: "Mes",
            bMostrar: true,
            bMultipleSeleccion: true
        },
        {
            icon: "fas fa-map-marker-alt",
            label: "Seleccione el departamento",
            arrayFiltrado: deptofiltros.rows,
            sFiltrosenArray: "departamento",
            nombre: "Departamento",
            bMostrar: true,
            bMultipleSeleccion: true

        },
        {
            icon: "fas fa-map-marker-alt",
            label: "Seleccione el municipio",
            arrayFiltrado: munifiltros.rows,
            sFiltrosenArray: "municipio",
            nombre: "Municipio",
            bMostrar: true,
            bMultipleSeleccion: true
        },
        {
            icon: "fas fa-map-marker-alt",
            label: "Seleccione la ubicacion",
            arrayFiltrado: ubicacionfiltros.rows,
            sFiltrosenArray: "ubicacion",
            nombre: "Ubicacion",
            bMostrar: true,
            bMultipleSeleccion: true

        },
        {
            icon: "fas fa-map-marker-alt",
            label: "Seleccione el estrato",
            arrayFiltrado: estratofiltros.rows,
            sFiltrosenArray: "estrato",
            nombre: "Estrato",
            bMostrar: true,
            bMultipleSeleccion: true
        },
        {
            icon: "fas fa-map-marker-alt",
            label: "Seleccione la clase de servicio",
            arrayFiltrado: serviciofiltros.rows,
            sFiltrosenArray: "clase_servicio",
            nombre: "Clase de Servicio",
            bMostrar: true,
            bMultipleSeleccion: true
        },
        {
            icon: "fas fa-map-marker-alt",
            label: "Seleccione Concepto",
            arrayFiltrado: conceptoFiltros.rows,
            sFiltrosenArray: "nombre_concepto",
            nombre: "Concepto",
            bMostrar: false,
            bMultipleSeleccion: true
        }
    ]);


};



//operaciones para la vista comercial
const getTableComercial = async(req, res) => {
    let bancos = [];
    let conceptos = [];
    let pagosFacturas = 0;
    var {
        ano,
        mes,
        departamento,
        municipio,
        ubicacion,
        estrato,
        clase_servicio,
        nombre_concepto,
        nombre_banco
    } = req.query;


    var variables = [ano, mes, departamento, municipio, ubicacion, estrato, clase_servicio, nombre_concepto, nombre_banco];

    var query = "(ano= $1 OR $1 is null) AND (mes= $2 OR $2 is null) AND (departamento= $3 OR $3 is null)";
    query += "AND (municipio= $4 OR $4 is null) AND (ubicacion= $5 OR $5 is null) AND ";
    query += "(estrato=$6 OR $6 is null) AND (clase_servicio= $7 OR $7 is null) AND (nombre_concepto= $8 OR $8 is null)";
    query += "AND (nombre_banco= $9 OR $9 is null)";

    let consultaInstalaciones = await conexionPG.conexion.query("SELECT COUNT(DISTINCT niu) FROM dwclientes  ");
    let consultaInstalacionesActivas = await conexionPG.conexion.query("SELECT COUNT(DISTINCT niu) as activos FROM dwclientes WHERE ciclo not in (33,44,69,79,97,98,99) AND estado NOT IN ('E','I','N','M') AND nombre_clase_papa  <> 'Integradores' ");
    let consultaFacturasPagadas = await conexionPG.conexion.query("SELECT COUNT(DISTINCT id_factura) FROM dwComercial WHERE " + query, variables);
    let consultaValorFacturado = await conexionPG.conexion.query("SELECT valor_total_facturado as valor FROM dwComercial WHERE" + query + " GROUP BY id_factura, valor_total_facturado", variables);
    let consultaValorPago = await conexionPG.conexion.query("SELECT SUM(valor_pago) as valorpagado FROM dwComercial WHERE " + query, variables);
    let consultaPagoBanco = await conexionPG.conexion.query("SELECT ROUND((SUM(valor_pago)/(SELECT SUM(valor_pago) FROM dwComercial WHERE" + query + "))*100,2) as valor_pagado , nombre_banco FROM dwComercial WHERE" + query + " GROUP BY nombre_banco ORDER BY valor_pagado DESC LIMIT 5", variables);
    let consultaPagoBancoOtros = await conexionPG.conexion.query("SELECT ROUND((SUM(valor_pago)/(SELECT SUM(valor_pago) FROM dwComercial  WHERE" + query + "))*100,2) as valor_pagado , nombre_banco FROM dwComercial WHERE" + query + "GROUP BY nombre_banco ORDER BY valor_pagado DESC", variables);
    let cosnultaConcepto = await conexionPG.conexion.query("SELECT ROUND((SUM(valor_pago)),2) as valor_pagado , nombre_concepto FROM dwComercial WHERE " + query + "GROUP BY nombre_concepto ORDER BY valor_pagado DESC LIMIT 4", variables);
    let cosnultaConceptoOtros = await conexionPG.conexion.query("SELECT ROUND((SUM(valor_pago)),2) as valor_pagado , nombre_concepto FROM dwComercial WHERE" + query + "GROUP BY nombre_concepto ORDER BY valor_pagado DESC", variables);

    if (consultaValorPago.rows[0].valorpagado != null) {
        bancos = consultaPagoBanco.rows;
        conceptos = cosnultaConcepto.rows;
        let otrosBancos = {
            valor_pagado: 0,
            nombre_banco: "Otros"
        };
        let otrosConceptos = {
            valor_pagado: 0,
            nombre_concepto: "Otros"
        };
        let otrosConceptosReconexion = {
            valor_pagado: 0,
            nombre_concepto: "Reconexion"
        };

        for (let i = 5; i < consultaPagoBancoOtros.rows.length; i++) {
            otrosBancos.valor_pagado += parseFloat(consultaPagoBancoOtros.rows[i].valor_pagado);
        }
        for (let i = 4; i < cosnultaConceptoOtros.rows.length; i++) {
            if (cosnultaConceptoOtros.rows[i].nombre_concepto.includes('Impuesto Alum Publico')) {
                conceptos.push(cosnultaConceptoOtros.rows[i]);
            } else if (cosnultaConceptoOtros.rows[i].nombre_concepto.includes('Reconex')) {
                otrosConceptosReconexion.valor_pagado += parseFloat(cosnultaConceptoOtros.rows[i].valor_pagado);
            } else {
                otrosConceptos.valor_pagado += parseFloat(cosnultaConceptoOtros.rows[i].valor_pagado);
            }
        }

        for (let i = 0; i < consultaValorFacturado.rows.length; i++) {
            pagosFacturas += parseFloat(consultaValorFacturado.rows[i].valor);

        }
        let porcentajeValorPagado = ((parseFloat(consultaValorPago.rows[0].valorpagado) / pagosFacturas) * 100).toFixed(2);
        otrosBancos.valor_pagado = (parseFloat(otrosBancos.valor_pagado)).toFixed(2);
        bancos.push(otrosBancos);
        conceptos.push(otrosConceptos);
        conceptos.push(otrosConceptosReconexion);
        await res.status(200).send({
            instalaciones: parseInt(consultaInstalaciones.rows[0].count),
            activas: parseInt(consultaInstalacionesActivas.rows[0].activos),
            inactivas: parseInt(consultaInstalaciones.rows[0].count) - parseInt(consultaInstalacionesActivas.rows[0].activos),
            facturas_pagadas: parseInt(consultaFacturasPagadas.rows[0].count),
            valor_pagado: parseInt(consultaValorPago.rows[0].valorpagado),
            valor_facturado: pagosFacturas, //parseInt(consultaValorFacturado.rows[0].valorfacturado),
            valor_total_pagado: (parseFloat(porcentajeValorPagado)).toFixed(2),
            pagos_banco: bancos,
            pagos_concepto: conceptos
        });
    } else {
        await res.status(200).send({
            message: "sin datos"
        });
    }

};


//operaciones para la vista Reconexion
const getReconexion = async(req, res) => {

    var {
        ano,
        mes,
        departamento,
        municipio,
        ubicacion,
        estrato,
        clase_servicio,
        observacion_reconexion
    } = req.query;
    // JSON con distintos valores para utilizar en la demo
    //  var json = { 'valor1': 1, 'valor2': [1, 2, 3, 4], 'valor3': '3' };

    // Obteniendo todas las claves del JSON
    //for (var clave in json) {
    // Controlando que json realmente tenga esa propiedad
    //  if (json.hasOwnProperty(clave)) {
    // Mostrando en pantalla la clave junto a su valor
    //   console.log("La clave es " + clave + " y el valor es " + json[clave]);
    //}
    //}

    var variables = [ano, mes, departamento, municipio, ubicacion, estrato, clase_servicio, observacion_reconexion];

    var query = "(ano= $1 OR $1 is null) AND (mes= $2 OR $2 is null) AND (departamento= $3 OR $3 is null)";
    query += "AND (municipio= $4 OR $4 is null) AND (ubicacion= $5 OR $5 is null) AND ";
    query += "(estrato=$6 OR $6 is null) AND (clase_servicio= $7 OR $7 is null) AND (observacion_reconexion= $8 OR $8 is null)";


    let consultaInstalaciones = await conexionPG.conexion.query("SELECT COUNT(DISTINCT niu) FROM dwclientes  ");
    let consultaInstalacionesActivas = await conexionPG.conexion.query("SELECT COUNT(DISTINCT niu) as activos FROM dwclientes WHERE ciclo not in (33,44,69,79,97,98,99) AND estado NOT IN ('E','I','N','M') AND nombre_clase_papa  <> 'Integradores' ");
    let consultaCantidadReco = await conexionPG.conexion.query("SELECT COUNT(cuenta) as cantidad FROM dwReconexion WHERE" + query, variables);
    let consultaTendenciaMes = await conexionPG.conexion.query("SELECT COUNT(cuenta) as cantidad, mes FROM dwReconexion WHERE" + query + " GROUP BY mes", variables);
    let consultaTipoReco = await conexionPG.conexion.query("SELECT COUNT(cuenta) as cantidad, observacion_reconexion as tipo_reconexion FROM dwReconexion WHERE" + query + " GROUP BY observacion_reconexion", variables);
    let consultaPorcentajeCuenta = await conexionPG.conexion.query("SELECT ROUND((CAST(COUNT(distinct cuenta)AS NUMERIC)/(SELECT COUNT(distinct niu) FROM dwClientes WHERE niu IS NOT NULL))*100,2) as cantidad FROM dwReconexion WHERE" + query, variables);
    let consultaPuntosReconexion = await conexionPG.conexion.query("SELECT latitud, longitud FROM dwReconexion WHERE latitud IS NOT NULL AND latitud > 0 AND longitud IS NOT NULL AND " + query, variables);
    if (parseInt(consultaCantidadReco.rows[0].cantidad) > 0) {
        res.status(200).send({
            instalaciones: parseInt(consultaInstalaciones.rows[0].count),
            activas: parseInt(consultaInstalacionesActivas.rows[0].activos),
            inactivas: parseInt(consultaInstalaciones.rows[0].count) - parseInt(consultaInstalacionesActivas.rows[0].activos),
            cantidad_reconexiones: parseInt(consultaCantidadReco.rows[0].cantidad),
            cuentas_reconectadas: parseFloat(consultaPorcentajeCuenta.rows[0].cantidad),
            tendencia_mes: consultaTendenciaMes.rows,
            tipo_reconexion: consultaTipoReco.rows,
            puntos_reconexion: consultaPuntosReconexion.rows

        });

    } else {
        await res.status(200).send({
            message: "sin datos"
        });
    }
    //console.log(consulta.rows);

};

//operaciones para la vista Control Perdidas
const getControlPerdidas = async(req, res) => {

    var {
        ano,
        mes,
        departamento,
        municipio,
        ubicacion,
        estrato,
        clase_servicio,
        observacion_visita
    } = req.query;
    // JSON con distintos valores para utilizar en la demo
    //  var json = { 'valor1': 1, 'valor2': [1, 2, 3, 4], 'valor3': '3' };

    // Obteniendo todas las claves del JSON
    //for (var clave in json) {
    // Controlando que json realmente tenga esa propiedad
    //  if (json.hasOwnProperty(clave)) {
    // Mostrando en pantalla la clave junto a su valor
    //   console.log("La clave es " + clave + " y el valor es " + json[clave]);
    //}
    //}

    var variables = [ano, mes, departamento, municipio, ubicacion, estrato, clase_servicio, observacion_visita];

    var query = "(ano= $1 OR $1 is null) AND (mes= $2 OR $2 is null) AND (departamento= $3 OR $3 is null)";
    query += "AND (municipio= $4 OR $4 is null) AND (ubicacion= $5 OR $5 is null) AND ";
    query += "(estrato=$6 OR $6 is null) AND (clase_servicio= $7 OR $7 is null) AND (observacion_visita= $8 OR $8 is null)";

    let consultaInstalaciones = await conexionPG.conexion.query("SELECT COUNT(DISTINCT niu) FROM dwclientes  ");
    let consultaInstalacionesActivas = await conexionPG.conexion.query("SELECT COUNT(DISTINCT niu) as activos FROM dwclientes WHERE ciclo not in (33,44,69,79,97,98,99) AND estado NOT IN ('E','I','N','M') AND nombre_clase_papa  <> 'Integradores' ");
    let consultaVisitas = await conexionPG.conexion.query("SELECT COUNT(cuenta) as cantidad, ROUND((CAST(COUNT(cuenta)AS NUMERIC)/(SELECT COUNT(distinct niu) FROM dwclientes))*100,2) AS porcentaje_visitas FROM dwcontrolperdidas WHERE " + query, variables);
    let consultaIrregularidades = await conexionPG.conexion.query("SELECT COUNT(cuenta) as cantidad, ROUND((CAST(COUNT(cuenta)AS NUMERIC)/(SELECT COUNT(distinct niu) FROM dwclientes))*100,2) AS porcentaje_irregularidades  FROM dwcontrolperdidas  WHERE observacion_visita='SI' AND " + query, variables);
    let consultaVisitasEstrato = await conexionPG.conexion.query("SELECT ROUND((CAST(COUNT(cuenta)AS NUMERIC)/(SELECT COUNT(cuenta) FROM dwcontrolperdidas WHERE " + query + "))*100,2) as cantidad, estrato FROM dwcontrolperdidas WHERE " + query + " GROUP BY estrato", variables);
    let consultaIrregularidadesEstrato = await conexionPG.conexion.query("SELECT ROUND((CAST(COUNT(cuenta)AS NUMERIC)/(SELECT COUNT(cuenta) FROM dwcontrolperdidas WHERE " + query + " AND observacion_visita='SI'))*100,2) as cantidad, estrato FROM dwcontrolperdidas WHERE " + query + " AND observacion_visita='SI'  GROUP BY estrato", variables);
    let consultaVisitasMuniMensual = await conexionPG.conexion.query("SELECT COUNT(cuenta) as cantidad, municipio,mes  FROM dwcontrolperdidas WHERE " + query + "  GROUP BY municipio,mes", variables);

    //console.log(consultaVisitas.rows[0].porcentaje_visitas) 

    //console.log(consulta.rows);
    if (parseInt(consultaVisitas.rows[0].cantidad) > 0) {
        res.status(200).send({
            instalaciones: parseInt(consultaInstalaciones.rows[0].count),
            activas: parseInt(consultaInstalacionesActivas.rows[0].activos),
            inactivas: parseInt(consultaInstalaciones.rows[0].count) - parseInt(consultaInstalacionesActivas.rows[0].activos),
            visitas: parseInt(consultaVisitas.rows[0].cantidad),
            porcentaje_visitas: parseFloat(consultaVisitas.rows[0].porcentaje_visitas),
            irregularidades: parseInt(consultaIrregularidades.rows[0].cantidad),
            porcentaje_irregularidades: parseFloat(consultaIrregularidades.rows[0].porcentaje_irregularidades),
            visitas_estrato: consultaVisitasEstrato.rows,
            irregularidades_estrato: consultaIrregularidadesEstrato.rows,
            visitas_municipio_mensual: consultaVisitasMuniMensual.rows

        });

    } else {
        await res.status(200).send({
            message: "sin datos"
        });
    }

};

const getFacturacion = async(req, res) => {
    let TotalFacturado = 0;
    let pagosFacturas = 0;
    let diasMora = 0;
    let consumoPromedio = 0;
    let contribucion = 0;
    var {
        ano,
        mes,
        departamento,
        municipio,
        ubicacion,
        estrato,
        clase_servicio,
        nombre_concepto
    } = req.query;
    // JSON con distintos valores para utilizar en la demo
    //  var json = { 'valor1': 1, 'valor2': [1, 2, 3, 4], 'valor3': '3' };

    // Obteniendo todas las claves del JSON
    //for (var clave in json) {
    // Controlando que json realmente tenga esa propiedad
    //  if (json.hasOwnProperty(clave)) {
    // Mostrando en pantalla la clave junto a su valor
    //   console.log("La clave es " + clave + " y el valor es " + json[clave]);
    //}
    //}

    var variables = [ano, mes, departamento, municipio, ubicacion, estrato, clase_servicio, nombre_concepto];

    var query = "(ano= $1 OR $1 is null) AND (mes= $2 OR $2 is null) AND (departamento= $3 OR $3 is null)";
    query += "AND (municipio= $4 OR $4 is null) AND (ubicacion= $5 OR $5 is null) AND ";
    query += "(estrato=$6 OR $6 is null) AND (clase_servicio= $7 OR $7 is null) AND (nombre_concepto= $8 OR $8 is null)";
    let consultaInstalaciones = await conexionPG.conexion.query("SELECT COUNT(DISTINCT niu) FROM dwclientes  ");
    let consultaInstalacionesActivas = await conexionPG.conexion.query("SELECT COUNT(DISTINCT niu) as activos FROM dwclientes WHERE ciclo not in (33,44,69,79,97,98,99) AND estado NOT IN ('E','I','N','M') AND nombre_clase_papa  <> 'Integradores' ");
    let consultaValorPago = await conexionPG.conexion.query("SELECT SUM(valor_pago) as valorpagado FROM dwFacturacion WHERE " + query, variables);
    let consultaPromedio = await conexionPG.conexion.query("SELECT avg( distinct consumo_promedio_mensual) as consumo_promedio,avg(dias_mora) as dias_mora from dwfacturacion WHERE " + query + " GROUP BY id_factura", variables);
    let consultaValorContribucion = await conexionPG.conexion.query("SELECT valor_contribucion FROM dwFacturacion WHERE " + query + " GROUP by id_factura,valor_contribucion", variables);
    let consultaTotalFacturado = await conexionPG.conexion.query("SELECT valor_total_facturado as valor FROM dwComercial WHERE " + query + " GROUP BY id_factura, valor_total_facturado", variables);
    let consultaConsumoSubsidiado = await conexionPG.conexion.query("SELECT ROUND(((SELECT COUNT( DISTINCT niu) FROM dwFacturacion WHERE estrato IN ('1','2','3') AND clase_Servicio='Residencial')/  CAST((SELECT COUNT(DISTINCT niu) FROM dwFacturacion WHERE estrato IN ('1','2','3') AND clase_Servicio='Residencial' AND valor_subsidio =0 AND valor_total_facturado > 0 AND consumos=0)AS NUMERIC) ),2) AS consumo_subsidiado FROM dwFacturacion WHERE " + query + " GROUP BY consumo_subsidiado", variables);
    let consultaFacturadoMes = await conexionPG.conexion.query("SELECT valor_total_facturado, SUM(valor_pago) as valor_pagado, mes FROM dwFACTURACION WHERE " + query + " GROUP BY id_factura, valor_total_facturado, mes", variables);

    if (consultaConsumoSubsidiado.rows[0]) {


        for (let i = 0; i < consultaPromedio.rows.length; i++) {
            diasMora += parseFloat(consultaPromedio.rows[i].dias_mora);
            consumoPromedio += parseFloat(consultaPromedio.rows[i].consumo_promedio);
        }
        for (let i = 0; i < consultaValorContribucion.rows.length; i++) {
            contribucion += parseFloat(consultaValorContribucion.rows[i].valor_contribucion);
        }
        for (let i = 0; i < consultaTotalFacturado.rows.length; i++) {
            pagosFacturas += parseFloat(consultaTotalFacturado.rows[i].valor);

        }
        var resultData = Object.values(groupBy(consultaFacturadoMes.rows, 'mes'));
        for (let i in resultData) {
            if (resultData[i].valor_pagado) {
                TotalFacturado += parseFloat(resultData[i].valor_total_facturado);
            }
        }
        for (let i in resultData) {
            if (resultData[i].valor_pagado) {
                resultData[i].valor_pagado = (parseFloat((resultData[i].valor_pagado / TotalFacturado)) * 100).toFixed(2);
                resultData[i].valor_total_facturado = (parseFloat((resultData[i].valor_total_facturado / TotalFacturado)) * 100).toFixed(2);
                console.log(resultData[i].valor_pagado);
            }
        }
        //console.log(consulta.rows);
        res.status(200).send({
            instalaciones: parseInt(consultaInstalaciones.rows[0].count),
            activas: parseInt(consultaInstalacionesActivas.rows[0].activos),
            inactivas: parseInt(consultaInstalaciones.rows[0].count) - parseInt(consultaInstalacionesActivas.rows[0].activos),
            consumo_promedio: parseFloat((consumoPromedio / consultaPromedio.rowCount).toFixed(2)),
            promedio_dias_mora: parseFloat((diasMora / consultaPromedio.rowCount).toFixed(2)),
            valor_contribucion: parseFloat(contribucion),
            porcentaje_valor_contribucion: parseFloat((contribucion / consultaValorPago.rows[0].valorpagado).toFixed(2)),
            valor_total_facturado: pagosFacturas,
            consumo_subsidiado: parseFloat(consultaConsumoSubsidiado.rows[0].consumo_subsidiado),
            valor_facturado_pagado: resultData

        });
    } else {
        await res.status(200).send({
            message: "sin datos"
        });
    }


};

var groupBy = function(miarray, prop) {
    return miarray.reduce(function(groups, item) {
        var val = item[prop];
        groups[val] = groups[val] || {
            mes: item.mes,
            valor_total_facturado: 0,
            valor_pagado: 0
        };
        groups[val].valor_total_facturado += parseFloat(item.valor_total_facturado);
        groups[val].valor_pagado += parseFloat(item.valor_pagado);

        return groups;
    }, {});
};


module.exports = {
    getFiltros,
    getReconexion,
    getTableComercial,
    getControlPerdidas,
    getFacturacion

};