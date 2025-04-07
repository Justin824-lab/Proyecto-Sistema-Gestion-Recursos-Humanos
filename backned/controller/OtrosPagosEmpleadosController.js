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
    const { IdCargo } = req.params;

    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM OtrosPagosEmpleados WHERE IdCargo = ?', [IdCargo], (err, OtrosPagosEmpleados) => {
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