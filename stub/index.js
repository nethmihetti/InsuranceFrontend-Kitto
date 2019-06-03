const express = require('express')
const path = require('path')
// const url = require('url')
const fs = require('fs')


const app = express()

app.use(express.json())
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    next();
});


app.get('/', (req, res) => {
    res.send("Hello!")
})


app.get('/requests', (req, res) => {
    let file_path = path.join(__dirname,'store/data.json')
    let file = JSON.parse(fs.readFileSync(file_path, 'utf-8'))

    if (Object.keys(req.query).length < 1) {
        setTimeout(()=> {
            res.status(200).json(file)
        }, 2000)
    } else {
        let page = +req.query.page
        let size = +req.query.size

        let from = (page, size) => page * size
        let to = (page, size) => page * size + size 

        console.log(`Page = ${page} from ${from(page, size)}`)
        console.log(`Size = ${size} to ${to(page, size)}`)

        let res_obj = {
            data: file.data.filter((elem, i) => i >= from(page, size) && i < to(page, size))
        }

        console.log(res_obj)
        console.log(res_obj.data.length)
        res.status(200).json(res_obj)
    }
})

app.get('/requests/:page/:size', (req, res) => {
    setTimeout(()=> {
        let file_path = path.join(__dirname, 'store/data.json')
        let file = JSON.parse(fs.readFileSycn(file_path, 'utf-8'))
        console.log(file)
        res.send(file)
    }, 2000)
})


app.patch('/update', (req, res) => {
    setTimeout(()=>{
        let id = req.body.data.insuranceId
        let status = req.body.data.status
        //Get data from store
        let file_path = path.join(__dirname,'store/data.json')
        let data = JSON.parse(fs.readFileSync(file_path, 'utf-8'))
    
        let i = 0
        let flag = false
        while ( i < data.data.length) {
            if (data.data[i].insurancerequestid == id) {
                data.data[i].status = status
                flag = true
                break
            }
            ++i
        }
    
        fs.writeFileSync(file_path, JSON.stringify(data, null, 2));
    
        if (flag === false) {
            res.send("5xx Not found")
        } else {
            res.send("200 OK")
        }
    }, 2000)

})


app.post('/create', (req, res) => {
    // Get file from datastore
    let file_path = path.join(__dirname,'store/data.json')
    let file = JSON.parse(fs.readFileSync(file_path, 'utf-8'))
    
    // Create new 
    let new_request = req.request
    file.requests.push(new_request)
    fs.writeFileSync(file_path, JSON.stringify(file, null, 2));
    
    if (true) {
        res.send({"response": "200 OK"})
    } else {
        res.send({"response": "5xx Bad"})
    }
})


app.listen(3030, () => {
    console.log("Kitto stub server listening on port 3030!")
})



// const fs = require('fs')
// const path = require('path')
// let file_path = path.join(__dirname,'store/data.json')
// let file = JSON.parse(fs.readFileSync(file_path, 'utf-8'))
// console.log(file)
