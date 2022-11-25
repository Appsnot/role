const smpledbcon = require('../controller/sampledb.js')
const express = require('express')
var cors = require('cors')
var Router = express.Router() 
var app = express()

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

Router.post('/post', smpledbcon.roleInsert)
Router.get('/get', smpledbcon.getRoles)
Router.delete('/dlt', smpledbcon.deleteRole)
Router.put('/put', smpledbcon.updateRole)
Router.get('/get1', smpledbcon.getOneRole)
module.exports = Router
/*
 //Getting all
// Router.get('/', async(req,res) =>{
//     try{
//         const sampledbs = await sampledb.find()
//         res.send(sampledbs)
//     }catch(error){
//         res.send(error)
//     }
//     })

Router.get('/getroute', async(req,res) =>{
    try{
        const sampledbs = await sampledb.find()
        res.send(sampledbs)
    }catch(error){
        res.send(error)
    }

    })
    Router.post('/postroute',async(req,res) => {
        try{
            let sdbcrt = await sampledb.create({
                role_name : req.body.role_name,
                role_id : req.body.role_id
            })
            sdbcrt.save((err, db) => {
                if (!err) {
                    let dbdetails = {
                        message: "data inserted",
                        db
                    }
                    console.log("data inserted")
                    return res.send(dbdetails);
                }
                else {
                    let dbdetails = { message: 'Can not add project', code: 400 }
                    return res.send(dbdetails);
                }
            });
        }catch(error) {
            res.send(error)
        }
    })
    Router.put('/putroute',async(req,res) => {
        try{
            let sdbcrt = await sampledb.findOneAndUpdate(
                { role_id : req.params.role_id },{role_name  : req.body.role_name})
            sdbcrt.save((err, db) => {
                if (!err) {
                   let dbdetails = {
                        message: "data updated",
                        db
                    }
                  console.log("data updated")
                  return res.send(dbdetails);
              }
               else {
                   let dbdetails = { message: 'Can not update project', code: 400 }
                   return res.send(dbdetails);
             }
            });
        }catch(error) {
            res.send(error)
        }
    })
        
         
    

 //Getting one
 //Router.get('/:id', (req,res) =>{

//})
 //createing one
// Router.post('/', (req,res) =>{

//})
 //updateing one
 //Router.patch('/:id', (req,res) =>{

//})
 //deleting one
 //Router.delete('/:id', (req,res) =>{

//})
*/
