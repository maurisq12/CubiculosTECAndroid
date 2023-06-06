import sql from 'mssql'

const dbSettings = {
    user: "maurisq_SQLLogin_1",
    password: "ecs335m2na",
    server: "cubiculosTEC.mssql.somee.com",
    database: "CubiculosTEC",
    options: {
        trustServerCertificate: true,
    }
}

export async function getConnection() {
    try {
        const pool = await sql.connect(dbSettings);
        return pool;
    }
    catch (error) {
        console.error(error);
    }

}

export {sql};
