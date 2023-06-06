import { getConnection,sql } from '../database/connection'

export const getEstudiantes = async (req, res) => {
    const con = await getConnection();
    const resp= await con.request().query("SELECT idEstudiante,cedula,carne, nombre, apellido1, apellido2,fechaDeNacimiento, correo,idEstadoEstudiante, contrasena FROM Estudiantes WHERE idEstudiante>1");
    res.json(resp.recordset)
}

export const editarEstudiante = async (req,res) =>{

    const {pCedula,pCarne, pNombre, pApellido1, pApellido2, pFechaNacimiento, pCorreo, pContrasena} = req.body

    if( pCedula==null || pCarne==null || pNombre==null || pApellido1==null || pApellido2==null || pFechaNacimiento==null || pCorreo==null || pContrasena==null){
        return res.status(400).json({msg:"Bad request. Please fill all fields"})
    }

    const pool = await getConnection();
    pool.request()
    .input('pCedula',sql.Int,pCedula)
    .input('pCarne',sql.Int,pCarne)
    .input('pNombre', sql.VarChar, pNombre)
    .input('pApellido1', sql.VarChar, pApellido1)
    .input('pApellido2', sql.VarChar, pApellido2)
    .input('pFechaNacimiento',sql.Date, pFechaNacimiento)
    .input('pCorreo',sql.SmallInt,pCorreo)
    .input('pContrasena',sql.SmallInt,pContrasena)
    .input('pEstado',sql.SmallInt,1)
    .query("modificarEstudiante @pCorreo, @pContrasena,@pCedula,@pCarne, @pNombre, @pApellido1, @pApellido2, @pFechaNacimiento, @pEstado")

    res.json('prueba')
}

export const eliminarEstudiante = async (req,res) =>{

    const {idEstudiante} = req.body

    if(idEstudiante==null){
        return res.status(400).json({msg:"Bad request. Please fill all fields"})
    }

    const pool = await getConnection();
    pool.request()
    .input('idEstudiante',sql.Int, idEstudiante)
    .query("eliminarEstudiante @idEstudiante")

    res.json('prueba')
}
