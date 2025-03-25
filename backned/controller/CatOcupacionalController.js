const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        conn.query('SELECT * FROM CatOcupacional', (err, catOcupacionales) => {
            if (err) {
                res.json(err);
            }
            res.json(catOcupacionales);
        });
    });
};

controller.edit = (req, res) => {
    const { IdCatOcupacional } = req.params;

    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM CatOcupacional WHERE IdCatOcupacional = ?', [IdCatOcupacional], (err, catOcupacional) => {
            res.json(catOcupacional[0]);
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO CatOcupacional SET ?', [data], (err, catOcupacional) => {
            res.json(catOcupacional);
        });
    });
};

controller.update = (req, res) => {
    const { IdCatOcupacional } = req.params;
    const nuevo_catOcupacional = req.body;

    req.getConnection((err, conn) => {
        conn.query('UPDATE CatOcupacional SET ? WHERE IdCatOcupacional = ?', [nuevo_catOcupacional, IdCatOcupacional], (err, rows) => { 
            res.json({ message: "Registro Actualizado" }); 
        });
    });
};

controller.delete = (req, res) => {
    const { IdCatOcupacional } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM CatOcupacional WHERE IdCatOcupacional = ?', [IdCatOcupacional], (err, rows) => {
            res.json({ message: "Registro Eliminado" });
        });
    });
};

module.exports = controller;