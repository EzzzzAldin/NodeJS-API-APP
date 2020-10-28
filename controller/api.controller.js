const Ninja = require('../model/ninja.model');

exports.getNinja = async (req, res) => {
    try {
        // Pass Data Location To User To Search Ninja
        const ninja = await Ninja.aggregate().near({
            near:{
                    // Pass Data such As In DataBase
                    type: "Point",
                    // Use ParseFloat Becuse I Create Coordinates is Number
                    coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]
            },
            maxDistance: 100000,
            spherical: true,
            distanceField: "distance"
        })
        res.send(ninja);
    } catch (error) {
        // Errror Handling
        res.status(422).send({
            // Show Error To User
            error: error.message
        })
    }
};

exports.postNinja = async (req, res) => {
    try {
        const ninja = await Ninja.create(req.body);
        res.send(ninja);
    } catch (error) {
        // Errror Handling
        res.status(422).send({
            // Show Error To User
            error: error.message
        })
    }
};

exports.putNinja = async (req, res) => {
    try {
        // Get Id
        const id = req.params.id;
        // Get Data And Update
        await Ninja.findByIdAndUpdate(id, req.body);
        const ninja = await Ninja.findById(id);
        res.send(ninja);
    } catch (error) {
        // Errror Handling
        res.status(422).send({
            // Show Error To User
            error: error.message
        })
    }
};

exports.deleteNinja = async (req, res) => {
    try {
        // Get Id
        const id = req.params.id;
        // Get Ninja Data ANd Remove
        const ninja = await Ninja.findByIdAndDelete({_id: id});
        res.send(ninja);
    } catch (error) {
        // Errror Handling
        res.status(422).send({
            // Show Error To User
            error: error.message
        })
    }
};