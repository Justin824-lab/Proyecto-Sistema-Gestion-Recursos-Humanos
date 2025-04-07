const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        if (error) return res.status(500).json({ error: 'Error de conexión' });
        const query = `
            SELECT 
                t.CI,
                e.Nombre AS NombreEmpleado,
                e.Apellido AS ApellidoEmpleado,
                t.IdDpto,
                d.Nombre AS NombreDepartamento,
                t.FechaAlta,
                t.Estado
            FROM TrabajaEn t
            INNER JOIN Empleados e ON t.CI = e.CI
            INNER JOIN Departamento d ON t.IdDpto = d.IdDpto
        `;
        conn.query(query, (err, trabajaEn) => {
            if (err) return res.status(500).json({ error: err.message });
            console.log('Datos enviados desde TrabajaEn:', trabajaEn); // Depuración
            res.json(trabajaEn);
        });
    });
};

controller.edit = (req, res) => {
    const { CI } = req.params;

    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM TrabajaEn WHERE CI = ?', [CI], (err, TrabajaEn) => {
            res.json(TrabajaEn[0]);
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO TrabajaEn SET ?', [data], (err, TrabajaEn) => {
            res.json(TrabajaEn);
        });
    });
};

controller.update = (req, res) => {
    const { CI } = req.params;
    const nuevo_TrabajaEn = req.body;

    req.getConnection((err, conn) => {
        conn.query('UPDATE TrabajaEn SET ? WHERE CI = ?', [nuevo_TrabajaEn, CI], (err, rows) => { 
            res.json({ message: "Registro Actualizado" }); 
        });
    });
};

controller.delete = (req, res) => {
    const { CI } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM TrabajaEn WHERE CI = ?', [CI], (err, rows) => {
            res.json({ message: "Registro Eliminado" });
        });
    });
};

module.exports = controller;