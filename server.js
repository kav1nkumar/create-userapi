const express = require("express");

const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// POST /user endpoint
app.post("/user", (req, res) => {
    const { name, email, role } = req.body;

    // Validate input
    if (!name || !email || !role) {
        return res.status(400).json({
            success: false,
            message: "Please provide name, email, and role."
        });
    }

    // Return success response
    res.status(201).json({
        success: true,
        message: "User created successfully",
        data: {
            name,
            email,
            role
        }
    });
});

// Root route
app.get("/", (req, res) => {
    res.send("User API is running...");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});