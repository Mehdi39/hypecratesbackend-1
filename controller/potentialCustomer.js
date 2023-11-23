const PotentialCustomer = require('../models/PotentialCustomer');

const addPotentialCustomer = async (req, res) => {
    try {
        const newPotentialCustomer = req.body;

        const registered = await PotentialCustomer.find({ email: newPotentialCustomer.email })
        if(!registered[0]) {
            const customer = await PotentialCustomer.create(newPotentialCustomer);

            res.status(200).json({
                successfull: true,
                data: customer,
                message: "Congratulations on signing up for our upcoming products notification! 🎉📩We're thrilled to have you on board and can't wait to share our latest and greatest products with you.Get ready for exclusive updates, sneak peeks, and early access to the hottest releases. Thank you for choosing HypeCrates! Your inbox is about to become a hub of excitement. 🛍️✨ If you ever have any questions or need assistance, feel free to reach out. Happy shopping! 🎁🛒"
            })
        } else {
            res.status(200).json({
                successfull: true,
                data: "",
                message: "already registered!"
            })
        }

    } catch (error) {
        console.error(error.message)
    }

}

const getAllPotentialCustomer = async (req, res) => {
    res.status(200).json({
        data: "getAllPotentialCustomer"
    })
}

module.exports = {
    addPotentialCustomer,
    getAllPotentialCustomer
}