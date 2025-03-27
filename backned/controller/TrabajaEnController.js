const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        conn.query('SELECT * FROM TrabajaEn', (err, TrabajaEn) => {
            if (err) {
                res.json(err);
            }
            res.json(TrabajaEn);
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