import express from "express";
import { createPost, deletePost, getPost, likeUnlikePost, replyToPost } from "../controllers/postController.js";
import protectRoute from "../middlewares/protectRoute.js";

const router = express.Router();


router.get("/:id", getPost);

router.post("/create", protectRoute ,createPost);
router.post("/like/:id", protectRoute ,likeUnlikePost);
router.post("/reply/:id", protectRoute ,replyToPost);

router.delete("/:id", protectRoute,deletePost);


export default router;