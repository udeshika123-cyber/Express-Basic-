import express from 'express';
const router = express.Router(); // Just one definition

// GET route
router.get('/', (req, res) => {
    res.send( req.id);
});

// POST route
router.post('/', (req, res) => {
    res.send(req.body.msg);
});

router.get('/add', (req, res) => {
    res.send({ msg: 'user add from /api/user/add' });
});

router.post('/add', (req, res) => {
    res.send({ msg: 'user add from /api/user/add' });
});
export default router; // ✅ Proper ES module export
