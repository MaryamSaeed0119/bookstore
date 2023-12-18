const mongoose = require('mongoose');

const connection = () => {
    const uri = 'mongodb+srv://fa20bse008:fa20bse008@cluster0.1sfpbsf.mongodb.net/?retryWrites=true&w=majority/bookstore';

    mongoose.connect(uri);

    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'Connection error:'));
    db.once('open', () => {
        console.log('Connected to the database');
    });
}

module.exports = connection;
