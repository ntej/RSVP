const { createRSVPApiError } = require('../errors/custom-error')
const asyncWrapper = require('../middleware/async')

const Rvsp = require('../model/rvsp')

const getRvsps = asyncWrapper(async (req, res, next) => {
    // try {
        const rvsps = await Rvsp.find({})
        res.status(200).json(rvsps)
    // } catch (error) {
    //     res.status(500).json(error)
    // }
})

const getRvsp = asyncWrapper(async (req, res, next) => {
    const { id: rvspId } = req.params
    // try {
        const rvsp = await Rvsp.findOne({ _id: rvspId })
        if (!rvsp) {
            return next(createRSVPApiError(`rvsp with id ${rvspId} not found`, 404))
        }
        res.status(200).json(rvsp)
    // } catch (error) {
    //     res.status(500).json(error)
    // }
})

const createRvsp =asyncWrapper( async (req, res, next) => {
//  try {
        const rvsp = await Rvsp.create(req.body) 
        res.status(201).json(rvsp)
    // } catch (error) {
    //     res.status(500).json(error)
    // }
})

const updateRvsp = asyncWrapper(async (req, res, next) => {
   // try {
        const { id: rvspId } = req.params
        const updatedRvsp = await Rvsp.findOneAndUpdate(
            { _id: rvspId },
            req.body,
            { new: true, runValidators: true }) //Options, returns updated rvsp and validate the new RVSP changes. 

        if (!updatedRvsp) {
            return next(createRSVPApiError(`rvsp with id ${rvspId} not found`, 404))
        }
        res.status(200).json(updatedRvsp)
    // } catch (error) {
    //     res.status(500).json(error)
    // }
})

const deleteRvsp = asyncWrapper(async (req, res, next) => {
  // try {
        const { id: rvspId } = req.params
        const deletedRvsp = await Rvsp.findOneAndDelete({ _id: rvspId });
        if (!deletedRvsp) {
            return next(createRSVPApiError(`rvsp with id ${rvspId} not found`, 404))
        }
        res.status(200).json(deletedRvsp)
    // } catch (error) {
    //     res.status(500).json(error)
    // }
})

module.exports = {
    getRvsp,
    getRvsps,
    createRvsp,
    updateRvsp,
    deleteRvsp
}

