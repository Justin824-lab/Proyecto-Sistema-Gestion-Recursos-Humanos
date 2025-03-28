const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
<<<<<<< HEAD
        conn.query('SELECT * FROM Tlaboral', (err, Tlaboral) => {
            if (err) {
                res.json(err);
            }
            res.json(Tlaboral);
=======
        conn.query('SELECT * FROM Tlaboral ', (err, Tlaboral ) => {
            if (err) {
                res.json(err);
            }
            res.json(Tlaboral );
>>>>>>> 835de4343bcb8ac2cde08abd686c95236680d7ca
        });
    });
};

controller.edit = (req, res) => {
<<<<<<< HEAD
    const { IdCargo } = req.params;

    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM Tlaboral WHERE IdCargo = ?', [IdCargo], (err, Tlaboral) => {
            res.json(Tlaboral[0]);
=======
    const { CI } = req.params;

    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM Tlaboral  WHERE CI = ?', [CI], (err, Tlaboral ) => {
            res.json(Tlaboral [0]);
>>>>>>> 835de4343bcb8ac2cde08abd686c95236680d7ca
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
<<<<<<< HEAD
        conn.query('INSERT INTO Tlaboral SET ?', [data], (err, Tlaboral) => {
            res.json(Tlaboral);
=======
        conn.query('INSERT  Tlaboral  SET ?', [data], (err, Tlaboral ) => {
            res.json(Tlaboral );
>>>>>>> 835de4343bcb8ac2cde08abd686c95236680d7ca
        });
    });
};

controller.update = (req, res) => {
<<<<<<< HEAD
    const { IdCargo } = req.params;
    const nuevo_Tlaboral = req.body;

    req.getConnection((err, conn) => {
        conn.query('UPDATE Tlaboral SET ? WHERE IdCargo = ?', [nuevo_Tlaboral, IdCargo], (err, rows) => { 
=======
    const { CI } = req.params;
    const nuevo_Tlaboral  = req.body;

    req.getConnection((err, conn) => {
        conn.query('UPDATE Tlaboral  SET ? WHERE CI = ?', [nuevo_Tlaboral , CI], (err, rows) => { 
>>>>>>> 835de4343bcb8ac2cde08abd686c95236680d7ca
            res.json({ message: "Registro Actualizado" }); 
        });
    });
};

controller.delete = (req, res) => {
<<<<<<< HEAD
    const { IdCargo } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM Tlaboral WHERE IdCargo = ?', [IdCargo], (err, rows) => {
=======
    const { CI } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM Tlaboral  WHERE CI = ?', [CI], (err, rows) => {
>>>>>>> 835de4343bcb8ac2cde08abd686c95236680d7ca
            res.json({ message: "Registro Eliminado" });
        });
    });
};

module.exports = controller;