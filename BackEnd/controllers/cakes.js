const Cakes = require('../models/cakes');

async function handleCreateCakes(req, res) {
    try {
        const { name,price } = req.body;

        if (!name || !price || !req.file) {
            return res.status(400).json({
                msg: "Name, price, and image fields are required.",
            });
        }

        const newCake = await Cakes.create({
            name,
            price,
            img: `/uploads/${req.file.filename}`,
        });

        console.log("Cake created successfully");

        return res.status(200).json({
            msg: "Cake created",
            data: newCake,
        });
    } catch (error) {
        console.error("Error creating cake:", error);
        return res.status(500).json({
            msg: "Server error. Failed to create cake.",
            error: error.message,
        });
    }
}


async function handleGetCakes(req, res) {
    const cakes = await Cakes.find();
    console.log(cakes);
    res.send(cakes);
}

async function handleUpdateCakes(req, res) {
    const updatedCake = await Cakes.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(updatedCake);
}

async function handleDeleteCakes(req, res) {
    await Cakes.findByIdAndDelete(req.params.id);
    res.send({ message: 'Cake deleted' });
}

module.exports={
    handleCreateCakes,
    handleDeleteCakes,
    handleGetCakes,
    handleUpdateCakes,
}