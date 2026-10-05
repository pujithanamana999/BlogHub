const express = require("express");
const router = express.Router();

const Blog = require("../models/Blog");

// Create Blog API
router.post("/blogs", async (req, res) => {
    try {
        const { title, content, category, author } = req.body;

        if (!title || !content || !category || !author) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const newBlog = new Blog({
            title,
            content,
            category,
            author
        });

        const savedBlog = await newBlog.save();

        res.status(201).json({
            message: "Blog created successfully",
            blog: savedBlog
        });

    } catch (error) {
        console.error("Create blog error:", error.message);

        res.status(500).json({
            message: "Server error"
        });
    }
});


// Get All Blogs API
router.get("/blogs", async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 });

        res.status(200).json({
            message: "Blogs fetched successfully",
            blogs
        });

    } catch (error) {
        console.error("Get blogs error:", error.message);

        res.status(500).json({
            message: "Server error"
        });
    }
});
// Get Single Blog API
router.get("/blogs/:id", async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);

        if (!blog) {
            return res.status(404).json({
                message: "Blog not found"
            });
        }

        res.status(200).json({
            message: "Blog fetched successfully",
            blog
        });

    } catch (error) {
        console.error("Get single blog error:", error.message);

        res.status(500).json({
            message: "Server error"
        });
    }
});

module.exports = router;