const controller = {};

controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('select *from Etnia',(err,Etnia) =>{
            if(err){
                res.json(err);
            }
            res.json(Etnia);
        });

    });

};

controller.edit = (req, res) => {

    const {IdEtnia}= req.params;
   
    req.getConnection((err,conn) =>{
        conn.query('select *from Etnia where IdEtnia=?', [IdEtnia], (err,Etnia) => {
            res.json(Etnia[0]);

        });

    });

};

controller.save = (req,res) =>{
    const data = req.body;
   req.getConnection((err,conn)=> {
       conn.query('insert into Etnia set?', [data], (err,Etnia) => {
        res.json(Etnia);
       });
   })
};

controller.update = (req,res) =>{

    const {IdEtnia}= req.params;
    const nuevo_Etnia = req.body;
  
    req.getConnection((err, conn) => {
        conn.query('update Etnia set ? where IdEtnia =?', [nuevo_Etnia, IdEtnia], (err,rows) =>{ 
            res.json({ message: "Registro Actualizado" }); 

        });
    });
};

controller.delete = (req,res) =>{
    const {IdEtnia}= req.params; 
  req.getConnection((err,conn) => {
      conn.query('delete from Etnia where IdEtnia =?', [IdEtnia], (err, rows) => {
        res.json({ message: "Registro Eliminado" }); 
      });
  })
};

module.exports =controller;
