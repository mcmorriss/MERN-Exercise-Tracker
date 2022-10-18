require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workout');

// Express App.
const app = express();

// Middleware.
app.use(express.json()); // JSON parsing.

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

// Routes (compartmentalized)
app.use('/api/workout', workoutRoutes)

// Connection to Database.
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // Listening for requests.
        app.listen(process.env.PORT, () => {
            console.log('Connected to MongoDB & listening on port 4000');
        })
    })
    .catch((error) => {
        console.log(error)
    })

