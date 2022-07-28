/* DUDAS:
1. ¿Hacer lo mismo para registrar una nueva cuenta?
2. ¿Responsiva?
3. Pendiente de integrar correctamente con Mongoose
4. Cómo cargar imágenes
*/

////////////////////////////// DEPENDENCIES //////////////////////////////
var express = require("express");
var cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Material = require("./model/materials");

dotenv.config();

// SETUP EXPRESS APP
var app = express();
var PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGODB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db => console.log("DB is connected")).catch(err => console.log(err));

// HANDLE DATA PARSINT EXPRESS
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

////////////////////////////// ROUTES //////////////////////////////
// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.send("Servidor para manejo de almacen");
});

// Displays materials
app.get("/api/materials", async function(req, res) {
    const mat = await Material.find();
    return res.json(mat);
});

// Displays a single material, or returns false
app.get("/api/materials/:material", async function(req, res) {
    var chosen = req.params.material;
  
    console.log(chosen);
  
    const mat = await Material.findOne({routeName:chosen});
    if (mat) {
        return res.json(mat);
    } else {
        return res.json(`No se encontró el material ${chosen}`);
    }    
});

// Add material - takes in JSON input
app.post("/api/materials", async function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var addedMaterial = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    addedMaterial.routeName = addedMaterial.name.replace(/\s+/g, "").toLowerCase();

    const mat = new Material(addedMaterial);
    await mat.save().catch(err => console.log(err));
    console.log("Material added");
    console.log(addedMaterial);

    res.json(addedMaterial);
});
  
////////////////////////////// START SERVER //////////////////////////////
app.listen(PORT, function() {
console.log("App listening on PORT " + PORT);
});