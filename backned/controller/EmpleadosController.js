const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        conn.query('SELECT * FROM Empleados', (err, empleados) => {
            if (err) {
                res.json(err);
            }
            res.json(empleados);
        });
    });
};

controller.edit = (req, res) => {
    const { CI } = req.params;

    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM Empleados WHERE CI = ?', [CI], (err, empleado) => {
            res.json(empleado[0]);
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO Empleados SET ?', [data], (err, empleado) => {
            res.json(empleado);
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