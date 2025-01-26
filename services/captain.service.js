const captainModel = require('../models/captain.model');


module.exports.createCaptain = async ({
    firstname, lastname, email, password,
    vehicleType, plate, color, capacity
}) => {
    if (!firstname || !lastname || !email || !password || !vehicleType || !plate || !color || !capacity) {
        throw new Error('All fields are required');
    }

    const captain = captainModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password,
        vehicle: {
            color,
            plate,
            capacity,
            vehicleType
        }
    });
    return captain;
}