import { getConnection } from '../database/connection'

export const getEstudiantes = async (req, res) => {
    const con = await getConnection();
    const resp= await con.request().query("SELECT idEstudiante,cedula,carne, nombre, apellido1, apellido2,fechaDeNacimiento, correo,idEstadoEstudiante, contrasena FROM Estudiantes WHERE idEstudiante>1");
    res.json(resp.recordset)
}

