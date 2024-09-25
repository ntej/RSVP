const { createRSVPApiError } = require("../errors/custom-error");

const Rvsp = require("../model/rvsp");

const getRvsps = async (req, res, next) => {
  const rvsps = await Rvsp.find({});
  res.status(200).json(rvsps);
};

const getRvsp = async (req, res, next) => {
  const { id: rvspId } = req.params;
  const rvsp = await Rvsp.findOne({ _id: rvspId });
  if (!rvsp) {
    return next(createRSVPApiError(`rvsp with id ${rvspId} not found`, 404));
  }
  res.status(200).json(rvsp);
};

const createRvsp = async (req, res, next) => {
  const rvsp = await Rvsp.create(req.body);
  res.status(201).json(rvsp);
};

const updateRvsp = async (req, res, next) => {
  const { id: rvspId } = req.params;
  const updatedRvsp = await Rvsp.findOneAndUpdate({ _id: rvspId }, req.body, {
    new: true,
    runValidators: true,
  }); //Options, returns updated rvsp and validate the new RVSP changes.

  if (!updatedRvsp) {
    return next(createRSVPApiError(`rvsp with id ${rvspId} not found`, 404));
  }
  res.status(200).json(updatedRvsp);
};

const deleteRvsp = async (req, res, next) => {
  const { id: rvspId } = req.params;
  const deletedRvsp = await Rvsp.findOneAndDelete({ _id: rvspId });
  if (!deletedRvsp) {
    return next(createRSVPApiError(`rvsp with id ${rvspId} not found`, 404));
  }
  res.status(200).json(deletedRvsp);
};

module.exports = {
  getRvsp,
  getRvsps,
  createRvsp,
  updateRvsp,
  deleteRvsp,
};
