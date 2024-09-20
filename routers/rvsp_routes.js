const express = require('express')
const router = express.Router()
const {
    getRvsp,
    getRvsps,
    createRvsp,
    updateRvsp,
    deleteRvsp
} = require('../controllers/rvsp_controller')


router.route('/').get(getRvsps)
router.route('/:id').get(getRvsp)
router.route('/').post(createRvsp)
router.route('/:id').patch(updateRvsp)
router.route('/:id').delete(deleteRvsp)

module.exports = router