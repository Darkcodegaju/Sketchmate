import express from "express";
import { googleSignIn, signin, signup } from "../controller/user.js";

const router = express.Router();


router.post("/signup", signup);
router.post("/signin", signin);
router.post("/googleSignIn", googleSignIn);

export default router;