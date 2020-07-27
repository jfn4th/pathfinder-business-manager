const Business = require('../models/business');

createBusiness = (req, res) => {
    const body = req.body;

    if (!body) {
        return RandomSource.status(400).json({
            success: false,
            error: 'You must provide a business!'
        });
    }

    const business = new Business(body);

    if (!business) {
        return res.status(400).json({ success: false, error: err });
    }

    business
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: business._id,
                message: 'Business created!'
            });
        })
        .catch((err) => {
            return res.status(400).json({
                err,
                message: 'Business not created!'
            });
        });
};

getBusinessById = async (req, res) => {
    await Business.findById(req.params.business_id, (err, business) => {
        if (err) {
            return res.status(400).json({ success: false, error: err });
        }
        if (!business) {
            return res.status(404).json({ success: false, error: 'Business not found!' });
        }
        return res.status(200).json({ success: true, data: business });
    }).catch((err) => console.log(err));
};

updateBusiness = async (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update!'
        });
    }

    await Business.findByIdAndUpdate(req.params.business_id, body.business, (err, business) => {
        if (err) {
            return res.status(400).json({
                success: false,
                err,
                message: 'Business not updated!'
            });
        }
        if (!business) {
            return res.status(404).json({ success: false, error: 'Business not found!' });
        }
        return res.status(200).json({
            success: true,
            id: business._id,
            message: 'Business updated!'
        });
    });
};

deleteBusiness = async (req, res) => {
    await Business.findByIdAndDelete(req.params.business_id, (err, business) => {
        if (err) {
            return res.status(400).json({
                success: false,
                err,
                message: 'Business not deleted!'
            });
        }
        if (!business) {
            return res.status(404).json({ success: false, error: 'Business not found!' });
        }
        return res.status(200).json({
            success: true,
            id: business._id,
            message: 'Business deleted!'
        });
    });
};

module.exports = {
    createBusiness,
    getBusinessById,
    updateBusiness,
    deleteBusiness
};
