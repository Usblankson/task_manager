const express = require('express')
const app = express()


// routes
app.get('/', (req,res) => {
   res.send("Task Manager App"); 
})
app.listen(3000, () => {
    console.log('Server listening on 3000')
})
