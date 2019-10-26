const path = require("path");
const router = require("express").Router();
const APIRoutes = require("./api")
router.use("/api", APIRoutes);

// If no API routes are hit, send to the React app
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// Export router
module.exports = router;