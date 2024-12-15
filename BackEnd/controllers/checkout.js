const Order=require("../models/orders");

async function handleOrderPlacement(req,res){
    try {
        const { cartItems, total } = req.body;

        if (!cartItems || cartItems.length === 0) {
            return res.status(400).json({ message: 'Cart is empty' });
        }

        // Create a new order
        const newOrder = new Order({
            user: req.user._id, // From authenticate middleware
            items: cartItems,
            total,
        });
        await newOrder.save();

        res.status(201).json({ message: 'Order placed successfully', order: newOrder });
    } catch (error) {
        console.error('Error placing order:', error);
        res.status(500).json({ message: 'Failed to place order' });
    }

}

module.exports={
    handleOrderPlacement
}