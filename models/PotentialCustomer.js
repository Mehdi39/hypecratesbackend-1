const mongoose = require("mongoose");

const potentialCustomer = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
        },
        // isUser: {
        //     type: Boolean,
        //     default: false
        // },

        // isPurchased: {
        //     type: Boolean,
        //     default: false
        // }
    },
    {
        timestamps: true,
    }
);

const PotentialCustomer = mongoose.model("Potential_Customer", potentialCustomer);
module.exports = PotentialCustomer;

