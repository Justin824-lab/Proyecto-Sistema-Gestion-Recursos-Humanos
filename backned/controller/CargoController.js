const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        if (error) return res.status(500).json({ error: 'Error de conexión' });
        const query = `
            SELECT 
                c.IdCargo,
                nr.Descripcion AS Resolucion,
                ge.Escala AS GrupoEscala,
                co.Nombre AS CategoriaOcupacional,
                c.Estado
            FROM Cargo c
            INNER JOIN NoResolucion nr ON c.IdNoResolucion = nr.IdNoResolucion
            INNER JOIN GrupoEscala ge ON c.IdGrupoEscala = ge.IdGrupoEscala
            INNER JOIN CatOcupacional co ON c.IdCatOcupacional = co.IdCatOcupacional
        `;
        conn.query(query, (err, cargos) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(cargos);
        });
    });
};

controller.edit = (req, res) => {
    const { IdCargo } = req.params;

    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM Cargo WHERE IdCargo = ?', [IdCargo], (err, cargo) => {
            res.json(cargo[0]);
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO Cargo SET ?', [data], (err, cargo) => {
            res.json(cargo);
        });
    });
};

controller.update = (req, res) => {
    const { IdCargo } = req.params;
    const nuevo_cargo = req.body;

    req.getConnection((err, conn) => {
        conn.query('UPDATE Cargo SET ? WHERE IdCargo = ?', [nuevo_cargo, IdCargo], (err, rows) => { 
            res.json({ message: "Registro Actualizado" }); 
        });
    });
};

controller.delete = (req, res) => {
    const { IdCargo } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM Cargo WHERE IdCargo = ?', [IdCargo], (err, rows) => {
            res.json({ message: "Registro Eliminado" });
        });
    });
};

module.exports = controller;