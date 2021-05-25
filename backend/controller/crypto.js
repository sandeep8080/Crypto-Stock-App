const uploadModel = require('../model/schema');
const uploadData = require('../model/schema');

exports.savedCData = async (req, res) => {
    try {
        //console.log(req.body);
        const { name, asset_id, price_usd } = req.body;
        const cryptoDataAdd = await uploadData.create({
            name,
            asset_id,
            price_usd
        });
        res.status(200).send({
            status: 'Success',
            message: 'Record Added!'
        });
    } catch (error) {
        console.log(error);
        return res.status(404).send({
            status: 'Fail',
            message: { error }
        });
    }
};
exports.getData = async (req, res) => {
    try {
        const schemaData = await uploadData.find({});
        console.log(schemaData);
        res.status(200).send({
            message: 'Success',
            data: schemaData
        })
    } catch (err) {
        console.log(err);
        return res.status(404).send({
            status: 'Fail',
            message: { err }
        })
    }
};

exports.deleteRecord = async (req, res) => {
    const selectedId = req.params.id;
    console.log(selectedId);
    try {
        const cryptoDataDel = await uploadModel.findByIdAndDelete(selectedId);
        res.status(200).send({
            status: 'Success',
            message: 'Record Deleted'
        })
    } catch (err) {
        console.log(err);
        return res.status(400).send({
            status: 'Fail',
            message: 'Record Not instered'
        })
    }
};
exports.test = async (req, res) => {
    res.send('Working');
}