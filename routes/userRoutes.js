const express = require ('express');
const { addUser, deleteUser, updateUser, getUsers } = require('../controllers/userControllers.js');
const router = express.Router()

router.post('/',addUser);
router.get('/',getUsers);
router.delete('/:id',deleteUser);
router.put('/:id',updateUser); 

module.exports= router;