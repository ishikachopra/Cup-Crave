const express = require('express');
const multer = require('multer');
const router = express.Router();
const { handleDeleteCookies, handleGetCookies, handleCreateCookies, handleUpdateCookies } = require('../controllers/cookies');
const storage = require('../helper/multer');
const upload = multer({ storage });

// Create a cake
router.post('/', upload.single('img'), handleCreateCookies);

// Read all cakes
router.get('/', handleGetCookies);

// Update a cake by ID
router.put('/:id', handleUpdateCookies);

// Delete a cake by ID
router.delete('/:id', handleDeleteCookies);

module.exports = router;