import express from 'express' 
import { newComment, getComments, deleteComment } from '../controller/comment-controller.js';
import { getImage, uploadImage } from '../controller/image-contoller.js';
import { authenticateToken } from '../controller/jwt-controller.js';
import { createPost, getAllPosts, getPost, updatePost, deletePost } from '../controller/post-controller.js';
import { loginUser, singupUser } from '../controller/user-controller.js';

import upload from '../utils/upload.js';

const router = express.Router(); 

router.post('/signup', singupUser);
router.post('/login', loginUser);

router.post('/file/upload', upload.single('file'), uploadImage);
router.get('/file/:filename', getImage);

router.post('/create', authenticateToken, createPost);

router.get('/posts', authenticateToken, getAllPosts);
router.get('/details/post/:id', authenticateToken, getPost);

router.put('/update/update/:id', authenticateToken, updatePost);

router.delete('/details/delete/:id', authenticateToken, deletePost);

router.post('/comment/new', authenticateToken, newComment);
router.get('/details/comments/:id', authenticateToken, getComments);
router.delete('/details/comment/delete/:id', authenticateToken, deleteComment);



export default router;
