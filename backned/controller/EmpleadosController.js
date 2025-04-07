const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        if (error) return res.status(500).json({ error: 'Error de conexión' });
        const query = `
            SELECT 
                e.CI,
                e.Nombre,
                e.Apellido,
                et.Nombre AS NombreEtnia,
                ec.Estado AS NombreEstadoCivil,
                cp.Color AS NombreColorPelo,
                u.Direccion AS DireccionUbicacion,
                c.TipoContrato,
                co.Nombre AS NombreCargo, -- Usamos Nombre de CatOcupacional
                es.NombreEstado,
                e.Estado
            FROM Empleados e
            INNER JOIN Etnia et ON e.IdEtnia = et.IdEtnia
            INNER JOIN EstadoCivil ec ON e.IdCivil = ec.IdCivil
            INNER JOIN ColorPelo cp ON e.IdColorPelo = cp.IdColorPelo
            INNER JOIN Ubicacion u ON e.IdUbicacion = u.IdUbicacion
            INNER JOIN Contrato c ON e.IdContrato = c.IdContrato
            INNER JOIN Cargo ca ON e.IdCargo = ca.IdCargo
            INNER JOIN CatOcupacional co ON ca.IdCatOcupacional = co.IdCatOcupacional
            INNER JOIN Estado es ON e.IdEstado = es.IdEstado
        `;
        conn.query(query, (err, empleados) => {
            if (err) return res.status(500).json({ error: err.message });
            console.log('Datos enviados desde Empleados:', empleados); // Depuración
            res.json(empleados);
        });
    });
};

controller.edit = (req, res) => {
    const { CI } = req.params;

    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM Empleados WHERE CI = ?', [CI], (err, empleados) => {
            res.json(empleados[0]);
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO Empleados SET ?', [data], (err, empleados) => {
            res.json(empleados);
        });
    });
};

controller.update = (req, res) => {
    const { CI } = req.params;
    const nuevo_empleado = req.body;

    req.getConnection((err, conn) => {
        conn.query('UPDATE Empleados SET ? WHERE CI = ?', [nuevo_empleado, CI], (err, rows) => { 
            res.json({ message: "Registro Actualizado" }); 
        });
    });
};

controller.delete = (req, res) => {
    const { CI } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM Empleados WHERE CI = ?', [CI], (err, rows) => {
            res.json({ message: "Registro Eliminado" });
        });
    });
};

module.exports = controller;