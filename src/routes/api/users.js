import Router from 'express';
import UserController from '../../controllers/userController';
import checkSignup from '../../middlewares/checkSignup';
import verifyExist from '../../middlewares/verifyExist';
import confirmPassword from '../../middlewares/confirmPassword';

const router = new Router();

const { signup } = UserController;

router.post('/register', checkSignup, verifyExist, confirmPassword, signup);

export default router;
