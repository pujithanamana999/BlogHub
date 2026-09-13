const express = require("express");

const router = express.Router();

// Temporary blog storage
let blogs = [];

// Create Blog API
router.post("/blogs", (req, res) => {

    const { title, content, category, author } = req.body;

    if (!title || !content || !category || !author) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    const newBlog = {
        id: blogs.length + 1,
        title: title,
        content: content,
        category: category,
        author: author
    };

    blogs.push(newBlog);

    res.status(201).json({
        message: "Blog created successfully",
        blog: newBlog
    });
});


// Get All Blogs API
router.get("/blogs", (req, res) => {

    res.status(200).json({
        message: "Blogs fetched successfully",
        blogs: blogs
    });

});


module.exports = router;