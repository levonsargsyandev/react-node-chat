import express from "express";
const router = express.Router();

router.get('/data', (req, res) => {
    res.send("Hello From Node Server!");
})

export default router;
