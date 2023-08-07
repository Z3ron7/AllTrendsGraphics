const express = require("express");
const Database = require("../configs/Database");
const router = express.Router();

router.get("/", async (req, res) => {
    const db = new Database(); //Instance
    const conn = db.connection; // Defined conn for connection prop
    const query = "SELECT * FROM books";

    await conn.connect((err) => {
      if (err) throw err;
      conn.query(query, (err, result) => {
        if (err) throw err;
        res.json(result);
      });
    });
  });

  router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const db = new Database(); //Instance
    const conn = db.connection; // Defined conn for connection prop
    await conn.connect((err) => {
      if (err) throw err;
      conn.query(`SELECT * FROM books where id = ${id}`, (error, rows) => {
        if (error) throw error;
        res.json(rows);
      });
    });
  });

  router.post("/", async (req, res) => {
    const { name, price, imageALT, category, image, status } = req.body;
  
    const db = new Database(); //Instance
    const conn = db.connection; // Defined conn for connection prop
  
    await conn.connect((err) => {
      if (err) throw err;
      conn.query(
        `INSERT into books (name, price, image, imageALT, status, category) VALUES (?,?,?,?,?,?)`, 
        [name,price,imageALT,category,image,status],
        (error, result) => {
          if (error) throw error;
          res.json({ success: true, message: "Successfully added" });
        }
      );
    });
  });

  router.put('/update/:id', async function(req,res) {
    const db = new Database();
    const conn = db.connection;

    const {id} = req.params
    const {name,price,status,category} = req.body
    

    const query = "UPDATE books SET name = ?,  price = ?, status = ?, category = ? WHERE id = ?"
    const values = [
        name,
        parseFloat(price),
        status,
        category,
        id
    ]

    await conn.connect((err) => {
        if(err) throw err;
        conn.query(query,values, (err, result) => {
            if(err) throw err;
            console.log(result)
            res.json({message: "Books updated successfully"});
        })
    })

})

router.delete('/delete/:id', async function(req, res) {
  const db = new Database();
  const conn = db.connection;

  const {id} = req.params
  const query = "DELETE FROM books WHERE id = ?"

  await conn.connect((err) => {
      if(err) throw err;
      conn.query(query,id,(err,result) => {
          if(err) throw err;
          console.log(result)
          res.json(result)
      })
  })
})


  module.exports = router;