//Router Node Module - Option 2
const { Router } = require("express");
const router = Router();

router.get("/users", (req, res) => {
    res.render("users");
});

module.exports = router;