const controller = {};

controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('select *from ColorPelo',(err,ColorPelo) =>{
            if(err){
                res.json(err);
            }
            res.json(ColorPelo);
        });

    });

};

controller.edit = (req, res) => {

    const {IdColorPelo}= req.params;
   
    req.getConnection((err,conn) =>{
        conn.query('select *from ColorPelo where IdColorPelo=?', [IdColorPelo], (err,ColorPelo) => {
            res.json(ColorPelo[0]);

        });

    });

};

controller.save = (req,res) =>{
    const data = req.body;
   req.getConnection((err,conn)=> {
       conn.query('insert into ColorPelo set?', [data], (err,ColorPelo) => {
        res.json(ColorPelo);
       });
   })
};

controller.update = (req,res) =>{

    const {IdColorPelo}= req.params;
    const nuevo_ColorPelo = req.body;
  
    req.getConnection((err, conn) => {
        conn.query('update ColorPelo set ? where IdColorPelo =?', [nuevo_ColorPelo, IdColorPelo], (err,rows) =>{ 
            res.json({ message: "Registro Actualizado" }); 

        });
    });
};

controller.delete = (req,res) =>{
    const {IdColorPelo}= req.params; 
  req.getConnection((err,conn) => {
      conn.query('delete from ColorPelo where IdColorPelo =?', [IdColorPelo], (err, rows) => {
        res.json({ message: "Registro Eliminado" }); 
      });
  })
};

module.exports =controller;
