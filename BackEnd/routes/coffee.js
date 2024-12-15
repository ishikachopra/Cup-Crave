const express = require('express');
const router = express.Router();
const multer = require('multer');
const { handleDeleteCoffee, handleGetCoffee, handleCreateCoffee, handleUpdateCoffee } = require('../controllers/coffee');
const storage = require('../helper/multer');
const upload = multer({ storage });

router.post('/', upload.single('img'), handleCreateCoffee);
router.get('/', handleGetCoffee);
router.put('/:id', handleUpdateCoffee);
router.delete('/:id', handleDeleteCoffee);

module.exports = router;
