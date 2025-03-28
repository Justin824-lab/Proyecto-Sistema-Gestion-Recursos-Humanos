const controller = {};

controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('select *from GrupoEscala',(err,GrupoEscala) =>{
            if(err){
                res.json(err);
            }
            res.json(GrupoEscala);
        });

    });

};

controller.edit = (req, res) => {

    const {IdGrupoEscala}= req.params;
   
    req.getConnection((err,conn) =>{
        conn.query('select *from GrupoEscala where IdGrupoEscala=?', [IdGrupoEscala], (err,GrupoEscala) => {
            res.json(GrupoEscala[0]);

        });

    });

};

controller.save = (req,res) =>{
    const data = req.body;
   req.getConnection((err,conn)=> {
       conn.query('insert into GrupoEscala set?', [data], (err,GrupoEscala) => {
        res.json(GrupoEscala);
       });
   })
};

controller.update = (req,res) =>{

    const {IdGrupoEscala}= req.params;
    const nuevo_GrupoEscala = req.body;
  
    req.getConnection((err, conn) => {
        conn.query('update GrupoEscala set ? where IdGrupoEscala =?', [nuevo_GrupoEscala, IdGrupoEscala], (err,rows) =>{ 
            res.json({ message: "Registro Actualizado" }); 

        });
    });
};

controller.delete = (req,res) =>{
    const {IdGrupoEscala}= req.params; 
  req.getConnection((err,conn) => {
      conn.query('delete from GrupoEscala where IdGrupoEscala =?', [IdGrupoEscala], (err, rows) => {
        res.json({ message: "Registro Eliminado" }); 
      });
  })
};

module.exports =controller;
