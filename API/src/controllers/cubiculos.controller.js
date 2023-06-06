import { getConnection, sql } from '../database/connection'

export const getCubiculos = async (req, res) => {
    const con = await getConnection();
    const resp= await con.request().query("SELECT idCubiculo, nombre, capacidad, EstadosCubiculo.estadoActual estado, tiempoMaximo FROM Cubiculos INNER JOIN EstadosCubiculo ON Cubiculos.idEstado = EstadosCubiculo.idEstado");
    res.json(resp.recordset)
}

export const crearCubiculo = async (req,res) =>{

    const {nombre,capacidad, estado} = req.body

    if(nombre==null || capacidad==null || estado==null){
        return res.status(400).json({msg:"Bad request. Please fill all fields"})
    }

    const pool = await getConnection();
    pool.request()
    .input('pNombre', sql.VarChar, nombre)
    .input('pEstado',sql.SmallInt,estado)
    .input('pCapacidad',sql.Int,capacidad)
    .query("crearCubiculo @pNombre, @pCapacidad, @pEstado")

    res.json('prueba')
}


export const editarCubiculo = async (req,res) =>{

    const {id,nombre,capacidad, estado} = req.body

    if(id==null || nombre==null || capacidad==null || estado==null){
        return res.status(400).json({msg:"Bad request. Please fill all fields"})
    }

    const pool = await getConnection();
    pool.request()
    .input('idCubiculo',sql.Int,id)
    .input('pNombre', sql.VarChar, nombre)
    .input('pEstado',sql.SmallInt,estado)
    .input('pCapacidad',sql.Int,capacidad)
    .input('pTiempoMáximo',sql.Time, Date.parse("00:00:00"))
    .query("modificarCubiculo @idCubiculo, @pNombre, @pEstado, @pCapacidad, @pTiempoMáximo")

    res.json('prueba')
}
