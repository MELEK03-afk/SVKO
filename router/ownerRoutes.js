import express from 'express'
import {  addField, deleteField,    CanceledReservation,  getFieldsOwner,  getRequest,  getReservation,  updateField, UpdateRequest  } from '../controls/owner/OwnerControlers.js'
import { protect } from '../MidelWer/auth.js'
import upload from '../MidelWer/multer.js';

const router = express.Router()

//Fields router
router.post('/add-field', upload.array('images', 5),addField);
router.get('/get-fields-Owner/:id',protect,getFieldsOwner)
router.put('/update-fields/:id',protect,updateField)
router.delete('/delete-field/:id',protect,deleteField)
router.get('/get-Requests-Owner/:id',protect,getRequest)
router.get('/get-Reservation-Owner/:id',protect,getReservation)
router.put('/CanceledReservation/:id',protect,CanceledReservation)
router.post('/UpdateRequest/:id',protect,UpdateRequest)





export default router