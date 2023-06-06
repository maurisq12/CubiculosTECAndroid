import { getConnection } from '../database/connection'

export const getAsignaciones = async (req, res) => {
    const con = await getConnection();
    const resp= await con.request().query("SELECT idCubiculo, Estudiantes.idEstudiante idEstudiante,Estudiantes.nombre nombre, Estudiantes.apellido1 apellido1 ,Estudiantes.apellido2 apellido2, fechaDeUso, horaInicio, horaFinal, confirmacion, fechaDeReservacion, idReservacion FROM Reservaciones INNER JOIN Estudiantes ON Reservaciones.idEstudiante = Estudiantes.idEstudiante");
    res.json(resp.recordset)
}

export const crearAsignacion = async (req,res) =>{

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

export const modificarAsignacion = async (req,res) =>{

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
