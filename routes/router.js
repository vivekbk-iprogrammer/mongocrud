const express =  require('express');
const userController =  require('../controller/user.controller');
const joivalidation = require('../middleware/joiValidation');
const router = express.Router();

router.post('/signup',joivalidation, userController.signup )
router.post('/signin', joivalidation, userController.signin )
router.get('/',userController.getallUser );
router.put('/update',  userController.updateUser);
router.put('/delete', userController.deleteuser);



module.exports = router;