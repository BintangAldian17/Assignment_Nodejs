import express from "express"
import { Login, Logout, Register } from "../controller/UsersController.js"
import { addPost, deletePost, getAllPost } from "../controller/PostsController.js"
import { verifyToken } from "../middleware/Jwt.js"

const router = express.Router()

router.post('/register', Register)
router.post('/login', Login)
router.post('logout', Logout)

router.post('/post', verifyToken, addPost)
router.get('/post', verifyToken, getAllPost)
router.delete('/post/:postId', verifyToken, deletePost)

export default router