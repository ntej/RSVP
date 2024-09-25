const express = require("express");
const router = express.Router();
const {
  getRvsp,
  getRvsps,
  createRvsp,
  updateRvsp,
  deleteRvsp,
} = require("../controllers/rvsp_controller");

const {checkDeleteScope,checkReadScope,checkWriteScope,checkUpdateScope} = require("../middleware/authenticate");

//Admin scope
router.route("/").get(checkReadScope,getRvsps); 
router.route("/:id").get(checkReadScope,getRvsp);
router.route("/").post(checkWriteScope,createRvsp);
router.route("/:id").patch(checkUpdateScope,updateRvsp);
router.route("/:id").delete(checkDeleteScope,deleteRvsp); 

module.exports = router;