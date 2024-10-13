// Project 1 PDF Merger

const express = require('express');
const path = require('path');
const app = express();
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });
const port = 3000;
const {mergePDFs} = require('./merge');
app.use('/static', express.static("./public"))


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "templates/index.html"));
});   

app.post('/merge', upload.array('pdfs', 2), async (req, res, next) => {
    console.log(req.files);
    let d = await mergePDFs(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path));
    
    res.redirect(`http://localhost:3000/static/pdf${d}.pdf`); //It redirect to this page

    // res.send({data: req.files}); // This gives data in json
});


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
