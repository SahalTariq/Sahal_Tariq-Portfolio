const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const { validateContact } = require('../middleware/validation');

// POST /api/contact - Submit contact form
router.post('/contact', validateContact, async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Save to MongoDB
    const newContact = new Contact({
      name,
      email,
      message
    });

    await newContact.save();

    // ============================================
    // 📧 EMAIL NOTIFICATION (NODEMAILER) - ADD LATER
    // ============================================
    // When you're ready to add email notifications:
    // 1. Uncomment the code below
    // 2. Install nodemailer: npm install nodemailer
    // 3. Add your email credentials to .env file
    // 4. Uncomment the email configuration in this file
    // ============================================

    /*
    // Nodemailer setup (uncomment when ready)
    const nodemailer = require('nodemailer');
    
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: `New Portfolio Message from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log('📧 Email notification sent');
    */

    // Success response
    res.status(201).json({
      success: true,
      message: 'Your message has been sent successfully!',
      data: {
        id: newContact._id,
        name: newContact.name,
        email: newContact.email,
        submittedAt: newContact.submittedAt
      }
    });

  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.'
    });
  }
});

// GET /api/contact - Get all messages (protected - add auth later)
router.get('/contact', async (req, res) => {
  try {
    // This is a simple implementation - add authentication in production
    const messages = await Contact.find().sort({ submittedAt: -1 });
    res.status(200).json({
      success: true,
      count: messages.length,
      data: messages
    });
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch messages'
    });
  }
});

module.exports = router;