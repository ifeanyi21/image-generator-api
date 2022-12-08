const { generateImage } = require("../controllers/openaiControllers");

const router = require("express").Router();

router.post("/generateimage", generateImage);

module.exports = router;
