import express from 'express'
import { addField, contactMessage, deleteField, deleteuser, getAllFields, getAllRequest, getUser, updateField, UpdateUSer } from '../controls/admin/AdminControlers.js'
import { protect } from '../MidelWer/auth.js'


const router = express.Router()

//Fields router
router.get('/getAllFields',protect,getAllFields)
router.post('/add-field',protect,addField)
router.put('/update-fields/:id',protect,updateField)
router.delete('/delete-field/:id',protect,deleteField)

//User Router
router.get('/getUsers',protect,getUser)
router.delete('/deleteUser/:id',protect,deleteuser)
router.put('/Update-User/:id',protect,UpdateUSer)
router.post('/Contac-message',contactMessage)

// Requests Router
router.get('/getAllRequests',protect,getAllRequest)


export default router