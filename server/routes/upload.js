const express = require("express");
const { attachments } = require("../controller/uploadController");

const router = express.Router();

router.use(express.json())

router.post("/attachments", attachments)

module.exports = router;