import express from 'express'
import dotenv from "dotenv"
import { PrismaClient } from '@prisma/client'
dotenv.config();
const server = express();
const prisma = new PrismaClient();

server.use(express.json());

server.get("/", function (req, res) {
    res.json({
        message: "Node js server success running"
    });
});

server.post("/tambah-data", function (req, res) {
    prisma.user.create({
        data: {
            name: req.body.name,
            email: req.body.email
        }
    }).then(
        _ => {

            res.json({
                message: "Data berhasil ditambahkan"
            });
        }
    );
});

server.listen(process.env.PORT, function () {
    console.log(`server running on port ${process.env.PORT} `);
});