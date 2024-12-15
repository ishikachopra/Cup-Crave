const express = require('express');
const router = express.Router();
const {handleDeleteCakes,handleGetCakes,handleCreateCakes,handleUpdateCakes}=require('../controllers/cakes');
const multer = require('multer');
const storage = require('../helper/multer');
const upload = multer({ storage });


router.post('/', upload.single('img'), handleCreateCakes );
router.get('/',handleGetCakes );
router.put('/:id', handleUpdateCakes);
router.delete('/:id',handleDeleteCakes);

module.exports=router;
