import express from "express";
const userController = require("../controller/userController");

const router= express.Router();

// export const userRouter = express.Router();

router.get('/',userController.get).get('/:id',userController.getId)

module.exports = router;