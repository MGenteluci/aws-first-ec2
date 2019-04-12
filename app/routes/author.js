const router = require('express').Router();

router.get('/', (req, res) => res.status(200).json({
    message: 'Hey, I\'m glad you found this one! My name is Matheus Genteluci!'
}));

module.exports = router;
