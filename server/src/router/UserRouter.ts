import UserServices from "../service/UsersServices";

const router = require("express").Router();

router.post('/users/', UserServices.registrasiUsers);

router.get('/users/', UserServices.getAllUsers);

export default router;