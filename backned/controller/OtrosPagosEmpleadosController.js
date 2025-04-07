const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        if (error) return res.status(500).json({ error: 'Error de conexión' });
        const query = `
            SELECT 
                ope.CI,
                ope.IdPagos,
                CONCAT(e.Nombre, ' ', e.Apellido) AS NombreEmpleado,
                op.Descripcion AS DescripcionPago,
                ope.Estado
            FROM OtrosPagosEmpleados ope
            INNER JOIN Empleados e ON ope.CI = e.CI
            INNER JOIN OtrosPagos op ON ope.IdPagos = op.IdPagos
        `;
        conn.query(query, (err, pagos) => {
            if (err) return res.status(500).json({ error: err.message });
            console.log('Datos enviados desde OtrosPagosEmpleados:', pagos);
            res.json(pagos);
        });
    });
};

controller.edit = (req, res) => {
    const { id } = req.params; // Ejemplo: "1002/10"
    const [CI, IdPagos] = id.split('/'); // Divide en "1002" y "10"
    console.log('Cargando datos para CI:', CI, 'IdPagos:', IdPagos);
    req.getConnection((err, conn) => {
        if (err) return res.status(500).json({ error: 'Error de conexión' });
        conn.query('SELECT * FROM OtrosPagosEmpleados WHERE CI = ? AND IdPagos = ?', [CI, IdPagos], (err, pagos) => {
            if (err) return res.status(500).json({ error: err.message });
            if (pagos.length === 0) return res.status(404).json({ message: 'Registro no encontrado' });
            res.json(pagos[0]);
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        if (err) return res.status(500).json({ error: 'Error de conexión' });
        conn.query('INSERT INTO OtrosPagosEmpleados SET ?', [data], (err, pago) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(pago);
        });
    });
};

controller.update = (req, res) => {
    const { id } = req.params; // Ejemplo: "1002/10"
    const [CI, IdPagos] = id.split('/'); // Divide en "1002" y "10"
    const nuevoPago = req.body;
    req.getConnection((err, conn) => {
        if (err) return res.status(500).json({ error: 'Error de conexión' });
        conn.query('UPDATE OtrosPagosEmpleados SET ? WHERE CI = ? AND IdPagos = ?', [nuevoPago, CI, IdPagos], (err, rows) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ message: "Registro Actualizado" });
        });
    });
};

controller.delete = (req, res) => {
    console.log('Solicitud DELETE recibida en el controlador');
    const { id } = req.params; // Ejemplo: "1002/1"
    console.log('ID recibido en backend:', id);
    const [CI, IdPagos] = id.split('/');
    console.log('CI:', CI, 'IdPagos:', IdPagos);
    if (!CI || !IdPagos) {
        return res.status(400).json({ error: 'Faltan CI o IdPagos en la solicitud' });
    }
    req.getConnection((err, conn) => {
        if (err) return res.status(500).json({ error: 'Error de conexión' });
        conn.query('DELETE FROM OtrosPagosEmpleados WHERE CI = ? AND IdPagos = ?', [CI, IdPagos], (err, rows) => {
            if (err) {
                console.error('Error en la consulta:', err);
                return res.status(500).json({ error: err.message });
            }
            console.log('Filas afectadas:', rows.affectedRows);
            res.json({ message: "Registro Eliminado" });
        });
    });
};

module.exports = controller;