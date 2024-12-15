const Coffee = require('../models/coffee');

async function handleCreateCoffee(req, res) {
    try {
        const { name, price, description } = req.body;

        if (!name || !price || !req.file ||!description) {
            return res.status(400).json({
                msg: "Name, price, and image fields are required.",
            });
        }

        const newCoffee = await Coffee.create({
            name,
            price,
            img: `/uploads/${req.file.filename}`,
            description
        });

        console.log("Coffee created successfully");

        return res.status(200).json({
            msg: "Coffee created",
            data: newCoffee
        });
    } catch (error) {
        console.error("Error creating coffee:", error);

        return res.status(500).json({
            msg: "Failed to create coffee",
            error: error.message
        });
    }
}


async function handleGetCoffee(req, res) {
    const coffee = await Coffee.find();
    console.log(coffee);
    res.send(coffee);
}

async function handleUpdateCoffee(req, res) {
    try{
        const updatedcoffee = await Coffee.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send(updatedcoffee);
    }
    catch(error){
        console.error("Error updating coffee:", error.message);
        res.status(500).send({ message: "Error updating coffee", error: error.message });
    }
}

async function handleDeleteCoffee(req, res) {
    await Coffee.findByIdAndDelete(req.params.id);
    console.log(req.params.id)
    res.send({ message: 'Coffee deleted' });
}

module.exports = {
    handleCreateCoffee,
    handleDeleteCoffee,
    handleGetCoffee,
    handleUpdateCoffee,
}