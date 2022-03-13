import { Router } from "express";
import { deleteUser, getUser, getUserID, postUser, putUser } from "../controllers/user";

const router = Router()

router.get('/', getUser)

router.get('/:id', getUserID)

router.post('/', postUser)

router.put('/:id', putUser)

router.delete('/:id', deleteUser)

export default router