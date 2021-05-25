const mongoose = require('mongoose');

try {
    mongoose
        .connect('mongodb+srv://sandy:Sandy@2021@crypt-cluster.dmhqc.mongodb.net/crypto_app_data', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => console.log('DB Connceted'));

} catch (error) {
    console.log('could not connect', error);
}

const dbConn = mongoose.connection;

const uploadSchema = new mongoose.Schema({
    name: String,
    asset_id: String,
    price_usd: Number
});

const uploadModel = mongoose.model('uploadModel', uploadSchema);

module.exports = uploadModel;
