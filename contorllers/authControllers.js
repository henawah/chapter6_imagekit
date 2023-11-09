const { users, data } = require("../models/index");
const { imageKit } = require('../middleware/imageKit');

module.exports = {
    create: async (req, res) => {
        try {
            const createdData = await data.create({
                data: {
                    title: req.body.title,
                    desc: req.body.desc,
                    url: `/images/${req.file.filename}`,
                }
            });

            return res.status(201).json({
                data: createdData
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                error
            });
        }
    },
    upload: async (req, res) => {
        try {
            const fileToString = req.file.buffer.toString('base64');

            const uploadFile = await imageKit.upload({
                fileName: req.file.originalname,
                file: fileToString
            });
            return res.status(200).json({
                data: {
                    title: uploadFile.title,
                    desc: uploadFile.desc,
                    url: uploadFile.url
                }
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                error
            });
        }
    },
    getUsers: async (req, res) => {
        try {
            const allUsers = await users.findMany();
            return res.status(200).json({
                message: 'Get all users success',
                data: allUsers
            });
        } catch (error) {
            console.log(error);
            console.error("Error:", error);
            return res.status(500).json({ error: "Internal server error" });
        }
    },
    getUsersById: async (req, res) => {
        const { id } = req.params
        try {
            const response = await users.findUnique({
                where: {
                    id: parseInt(id)
                },
            });
            return res.status(200).json({
                message: 'Get all users success',
                data: {
                    ...response,
                    balance: parseInt(response.balance)
                },
            });
        } catch (error) {
            console.log(error);
            console.error("Error:", error);
            return res.status(500).json({ error: "Internal server error" });
        }
    },
    deleteUsers: async (req, res) => {
        try {
            const { id } = req.params;

            await data.deleteMany({
                where: {
                    id: parseInt(id)
                }
            });

            return res.status(200).json({
                message: 'Account deletion successful'
            });
        } catch (error) {
            console.log(error);
            console.error("Error:", error);
            return res.status(500).json({ error: "Internal server error" });
        }
    }
};
