
import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import cors from 'cors';


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    res.json({
        message: 'server is up and running'
    });
});

const transporter = nodemailer.createTransport({
    service: process.env.SERVICE,
    host: process.env.HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    },
});

// Endpoint to send an email
app.post('/send-email', (req, res) => {
    const { to, subject, text } = req.body;

    if (!to || !subject || !text) {
        res.status(400).send('Missing required fields');
        return;
    }

    const mailOptions = {
        from: process.env.USER,
        to: `${to}`,
        subject,
        html: `<p>${text}</h1>`
    }
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Failed to send email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

const PORT = process.env.PORT || 7000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
