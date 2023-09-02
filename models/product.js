const mongoose = require('mongoose');
const Schrema = mongoose.Schema;
const productSchrema = new Schrema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true
    }//,
    // category:{
    //     type: Schrema.ObjectID,
    //     ref: 'category'
    // },
    // status:{
    //     type: Schrema.ObjectID,
    //     ref: 'status'
    // }
});

module.exports = mongoose.model('Product', productSchrema);