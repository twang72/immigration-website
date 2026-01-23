const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create email transporter
const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

// Verify transporter configuration
transporter.verify((error, success) => {
    if (error) {
        console.error('Email transporter error:', error);
    } else {
        console.log('Email server is ready to send messages');
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Server is running' });
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
    const { name, email, phone, subject, message } = req.body;

    // Validation
    if (!name || !email || !message) {
        return res.status(400).json({ 
            success: false, 
            message: 'Name, email, and message are required' 
        });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ 
            success: false, 
            message: 'Invalid email address' 
        });
    }

    try {
        // Email to admin
        const adminMailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
            subject: `New Contact Form Submission: ${subject || 'No Subject'}`,
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
                    <h2 style="color: #c41e3a;">New Contact Form Submission</h2>
                    <div style="background: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
                        <p><strong>Subject:</strong> ${subject || 'No subject provided'}</p>
                        <hr style="border: 1px solid #ddd; margin: 15px 0;">
                        <p><strong>Message:</strong></p>
                        <p style="white-space: pre-wrap;">${message}</p>
                    </div>
                    <p style="color: #666; font-size: 12px;">
                        This email was sent from the CanaQuest Consulting contact form.
                    </p>
                </div>
            `
        };

        // Confirmation email to user
        const userMailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Thank you for contacting CanaQuest Consulting',
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
                    <h2 style="color: #c41e3a;">Thank You for Contacting Us!</h2>
                    <p>Dear ${name},</p>
                    <p>
                        We have received your message and appreciate you reaching out to 
                        CanaQuest Consulting. Our team will review your inquiry and get back 
                        to you as soon as possible, typically within 24-48 hours.
                    </p>
                    <div style="background: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
                        <h3 style="margin-top: 0;">Your Message:</h3>
                        <p style="white-space: pre-wrap;">${message}</p>
                    </div>
                    <p>
                        If you have any urgent questions, please don't hesitate to call us directly.
                    </p>
                    <p>Best regards,<br><strong>CanaQuest Consulting Team</strong></p>
                    <hr style="border: 1px solid #ddd; margin: 20px 0;">
                    <p style="color: #666; font-size: 12px;">
                        CanaQuest Consulting - Your Trusted Partner in Canadian Immigration<br>
                        Email: info@canaquestconsulting.com
                    </p>
                </div>
            `
        };

        // Send both emails
        await transporter.sendMail(adminMailOptions);
        await transporter.sendMail(userMailOptions);

        console.log(`Contact form submission from: ${name} (${email})`);

        res.json({ 
            success: true, 
            message: 'Your message has been sent successfully! We will get back to you soon.' 
        });

    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Failed to send message. Please try again later or contact us directly.' 
        });
    }
});

// Save CRS calculation endpoint (for future use)
app.post('/api/save-crs', async (req, res) => {
    const { email, score, details } = req.body;
    
    // TODO: Save to database
    // For now, just send email with results
    
    try {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Your CRS Score Calculation - CanaQuest Consulting',
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
                    <h2 style="color: #c41e3a;">Your CRS Score Results</h2>
                    <div style="background: #f8f9fa; padding: 20px; border-radius: 5px; text-align: center; margin: 20px 0;">
                        <h1 style="color: #c41e3a; font-size: 48px; margin: 10px 0;">${score}</h1>
                        <p style="font-size: 18px; color: #666;">Your Estimated CRS Score</p>
                    </div>
                    <p>
                        Thank you for using our CRS Calculator. This score is an estimate based 
                        on the information you provided.
                    </p>
                    <p>
                        For a detailed assessment and personalized immigration guidance, 
                        please contact our expert consultants.
                    </p>
                    <p>Best regards,<br><strong>CanaQuest Consulting Team</strong></p>
                </div>
            `
        };

        await transporter.sendMail(mailOptions);
        
        res.json({ 
            success: true, 
            message: 'Results sent to your email!' 
        });
    } catch (error) {
        console.error('Error sending CRS results:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Failed to send results' 
        });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Health check: http://localhost:${PORT}/api/health`);
});
