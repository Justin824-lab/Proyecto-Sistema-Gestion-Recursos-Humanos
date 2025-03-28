const controller = {};

controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('select *from ReqConocimiento',(err,ReqConocimiento) =>{
            if(err){
                res.json(err);
            }
            res.json(ReqConocimiento);
        });

    });

};

controller.edit = (req, res) => {

    const {IdReqConoc}= req.params;
   
    req.getConnection((err,conn) =>{
        conn.query('select *from ReqConocimiento where IdReqConoc=?', [IdReqConoc], (err,ReqConocimiento) => {
            res.json(ReqConocimiento[0]);

        });

    });

};

controller.save = (req,res) =>{
    const data = req.body;
   req.getConnection((err,conn)=> {
       conn.query('insert into ReqConocimiento set?', [data], (err,ReqConocimiento) => {
        res.json(ReqConocimiento);
       });
   })
};

controller.update = (req,res) =>{

    const {IdReqConoc}= req.params;
    const nuevo_ReqConocimiento = req.body;
  
    req.getConnection((err, conn) => {
        conn.query('update ReqConocimiento set ? where IdReqConoc =?', [nuevo_ReqConocimiento, IdReqConoc], (err,rows) =>{ 
            res.json({ message: "Registro Actualizado" }); 

        });
    });
};

controller.delete = (req,res) =>{
    const {IdReqConoc}= req.params; 
  req.getConnection((err,conn) => {
      conn.query('delete from ReqConocimiento where IdReqConoc =?', [IdReqConoc], (err, rows) => {
        res.json({ message: "Registro Eliminado" }); 
      });
  })
};

module.exports =controller;
