// Import the required module
import mongoose from "mongoose";

// Destructure ObjectId from mongoose.Schema
const { ObjectId } = mongoose.Schema;

// Define the schema for trips
const tripsSchema = new mongoose.Schema({
    // Specifies the source of the trip (required)
    source: {
        type: String,
        required: true,
    },
    // Specifies the destination of the trip (required)
    destination: {
        type: String,
        required: true,
    },
    // Defines the departure time for the trip (required)
    departureTime: {
        type: String,
        required: true
    },
    // Defines the arrival time for the trip (required)
    arrivalTime: {
        type: String,
        required: true
    },
    // References to associated buses
    buses: [
        {
            type: ObjectId,
            ref: "BusDetails"
        },
    ],
},

{
    collection: 'trips' 
  }

);

// Export the model with a modified name
export default mongoose.model('TripsRoute', tripsSchema);
