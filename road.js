const express = require ('express')
const fs = require('fs')
const http = require ('http')

const app = express();
app.use (express.json());

const getAllData = () => {
    const jsonData = fs.readFileSync('road.json');
    const roads = JSON.parse(jsonData);
    return roads;
} 
const saveRoad = (data) => {
    const rStringfy = JSON.stringify(data);
    fs.writeFileSync('road.json',rStringfy)
}

app.get ('/', (req,res) => {
    const allRoad = getAllData();
    res.send(allRoad);
})

app.post ('/', (req,res) => {

    const r = getAllData();
    const roadIn = req.body;
   
    r.push(roadIn);
    saveRoad(r);
    res.send({msg: 'road added'});

})

app.patch('/:id',(req,res)=> {

    const rId = req.params.id;
    const ro = getAllData();
    const roadInput = req.body;

    const rFilter = ro.filter(Road => Road.id !== rId);
   // console.log(idRoad)
    rFilter.push(roadInput);
    saveRoad(rFilter);
    res.send({msg: " road saved"})
})
app.delete('/:id',(req,res) => {

    const idR = req.params.id;
    const rIn = getAllData();
    const rFilt = rIn.filter(road => road.id !== idR)

    saveRoad(rFilt);
    res.send({msg: " road deleted"})
})


app.get('/:id', (req,res)=>{

    const i = req.params.id;
    const roads = getAllData();
    const roadID = roads.find(road => road.id === i);
    
    res.send(roadID);
})

app.get ('/interRoad/:idroad', (req,res)=>{

    const idr = req.params.idroad;
    const roads = getAllData();
    const roID = roads.find(road => road.id === idr);
    res.send(`interRoad pour ${idr} sont : ${roID.interRoad}`);

})


app.listen(8080,()=> {
    console.log("server running");
})
