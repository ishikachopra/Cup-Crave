const express=require('express');
const Orders=require('../models/orders');

async function HandleGetHistory(req,res){
    try{
        const userId = req.user._id; // Extracted from the token by the `authenticate` middleware
        const userorders = await Orders.find({ user: userId });
        res.send(userorders);
    }
    catch{
        // console.error('Error fetching orders:', error);
        return res.status(500).json({ success: false, message: 'Failed to fetch orders' });
    }
    
}

module.exports={
    HandleGetHistory,
}