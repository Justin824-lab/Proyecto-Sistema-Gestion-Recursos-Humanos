const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        conn.query('SELECT * FROM OtrosPagosEmpleados', (err, OtrosPagosEmpleados) => {
            if (err) {
                res.json(err);
            }
            res.json(OtrosPagosEmpleados);
        });
    });
};

controller.edit = (req, res) => {
    const { id } = req.params; // Ejemplo: "1002/10"
    const [CI, IdPagos] = id.split('/'); // Divide en "1002" y "10"
    console.log('Cargando datos para CI:', CI, 'IdPagos:', IdPagos);
    req.getConnection((err, conn) => {
      if (err) {
        console.error('Error de conexión:', err);
        return res.status(500).json({ error: 'Error de conexión' });
      }
      conn.query('SELECT * FROM OtrosPagosEmpleados WHERE CI = ? AND IdPagos = ?', [CI, IdPagos], (err, OtrosPagosEmpleados) => {
        if (err) {
          console.error('Error en la consulta:', err);
          return res.status(500).json({ error: err.message });
        }
        if (OtrosPagosEmpleados.length === 0) {
          console.log('No se encontró registro para CI:', CI, 'IdPagos:', IdPagos);
          return res.status(404).json({ message: 'Registro no encontrado' });
        }
        res.json(OtrosPagosEmpleados[0]);
      });
    });
  };

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO OtrosPagosEmpleados SET ?', [data], (err, OtrosPagosEmpleados) => {
            res.json(OtrosPagosEmpleados);
        });
    });
};

controller.update = (req, res) => {
    const { CI } = req.params;
    const nuevo_OtrosPagosEmpleados = req.body;

    req.getConnection((err, conn) => {
        conn.query('UPDATE OtrosPagosEmpleados SET ? WHERE CI = ?', [nuevo_OtrosPagosEmpleados, CI], (err, rows) => { 
            res.json({ message: "Registro Actualizado" }); 
        });
    });
};

controller.delete = (req, res) => {
    const { CI } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM OtrosPagosEmpleados WHERE CI = ?', [CI], (err, rows) => {
            res.json({ message: "Registro Eliminado" });
        });
    });
};

module.exports = controller;