const controller = {};

controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('select *from Departamento',(err,Departamento) =>{
            if(err){
                res.json(err);
            }
            res.json(Departamento);
        });

    });

};

controller.edit = (req, res) => {

    const {IdDpto}= req.params;
   
    req.getConnection((err,conn) =>{
        conn.query('select *from Departamento where IdDpto=?', [IdDpto], (err,Departamento) => {
            res.json(Departamento[0]);

        });

    });

};

controller.save = (req,res) =>{
    const data = req.body;
   req.getConnection((err,conn)=> {
       conn.query('insert into Departamento set?', [data], (err,Departamento) => {
        res.json(Departamento);
       });
   })
};

controller.update = (req,res) =>{

    const {IdDpto}= req.params;
    const nuevo_Departamento = req.body;
  
    req.getConnection((err, conn) => {
        conn.query('update Departamento set ? where IdDpto =?', [nuevo_Departamento, IdDpto], (err,rows) =>{ 
            res.json({ message: "Registro Actualizado" }); 

        });
    });
};

controller.delete = (req,res) =>{
    const {IdDpto}= req.params; 
  req.getConnection((err,conn) => {
      conn.query('delete from Departamento where IdDpto =?', [IdDpto], (err, rows) => {
        res.json({ message: "Registro Eliminado" }); 
      });
  })
};

module.exports =controller;
