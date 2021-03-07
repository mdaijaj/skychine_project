const express=require('express')
const user = require('../controller/user')
const users=require('../controller/user')
const router=express()


router.get('/form', users.form)
router.post('/add_detail', users.add_detail)
router.get('/all_data', users.all_data)
router.get('/single_data', users.single_data)
router.put('/update', users.update)
router.delete('/delete', users.deleted)

module.exports={
   router
}
