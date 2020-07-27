const express = require('express'),
    BusinessCtrl = require('../controllers/business-ctrl'),
    router = express.Router();

router.post('/businesses', BusinessCtrl.createBusiness);
router.get('/businesses/:business_id', BusinessCtrl.getBusinessById);
router.put('/businesses/:business_id', BusinessCtrl.updateBusiness);
router.delete('/businesses/:business_id', BusinessCtrl.deleteBusiness);

module.exports = router;
