const Cookies = require('../models/cookies');

async function handleCreateCookies(req, res) {
    try{
        const { name, price } = req.body;

        if (!name || !price || !req.file) {
            return res.status(400).json({
                msg: "Name, price, and image fields are required.",
            });
        }

        const cookie = await Cookies.create({
            name,
            price,
            img: `/uploads/${req.file.filename}`,
        });

        console.log("cookie created");

        return res.status(201).json({
            msg: "hello",
            data: cookie
        });
    }catch(error){
        return res.status(500).json({
            msg: "Failed to create cookie",
            error: error.message
        });
    }
    
}

async function handleGetCookies(req, res) {
    const cakes = await Cookies.find();
    console.log(cakes);
    res.send(cakes);
}

async function handleUpdateCookies(req, res) {
    const updatedCake = await Cookies.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(updatedCake);
}

async function handleDeleteCookies(req, res) {
    await Cookies.findByIdAndDelete(req.params.id);
    res.send({ message: 'Cake deleted' });
}

module.exports = {
    handleCreateCookies,
    handleDeleteCookies,
    handleGetCookies,
    handleUpdateCookies,
}