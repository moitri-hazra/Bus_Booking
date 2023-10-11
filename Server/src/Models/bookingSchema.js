// Import the required module
import mongoose from "mongoose";

// Destructure ObjectId from mongoose.Schema
const { ObjectId } = mongoose.Schema;

// Define the schema for booking tickets
const bookTicketSchema = new mongoose.Schema({
    // References the bus details
    busId: {
        type: ObjectId,
        ref: "BusDetails"
    },
    // Specifies the date of the journey (required)
    dateOfJourney: {
        type: Date,
        required: true,
    },
    // Holds a list of booked seats
    seatsBooked: [
        {
            seatNumber: {
                type: String,
            },
        },
    ],
    // References the route
    routeId: {
        type: ObjectId,
        ref: "Routes"
    },
    // Stores user information
    userName: {
        type: String,
        required: true,
    },
    userMobile: {
        type: String,
        required: true,
    },
    userEmail: {
        type: String,
        required: true,
    },
    userGender: {
        type: String,
        required: true,
    },
    userAge: {
        type: String,
        required: true,
    },
    // Represents the total price of the ticket (required)
    totalPrice: {
        type: String,
        required: true,
    },
},
{
    // Enables timestamps (createdAt and updatedAt fields)
    timestamps: true,
});

// Export the model with a modified name
export default mongoose.model('BookedTicket', bookTicketSchema);
