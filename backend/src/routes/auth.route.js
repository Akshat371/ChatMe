import express from "express"
import { checkAuth, login, logout, signup, updateProfile } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup",signup);
router.post("/login",login);
router.post("/logout",logout);

//Update->protectRoute(Check the user is authenticated or not){middleware}
router.put("/update-profile",protectRoute,updateProfile);

//Call while refresh page
router.get("/check",protectRoute,checkAuth);

export default router;