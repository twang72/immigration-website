# Backend Setup Guide for CanaQuest Consulting

## Email Configuration

### Using Gmail

1. **Enable 2-Factor Authentication**
   - Go to your Google Account settings
   - Navigate to Security
   - Enable 2-Step Verification

2. **Generate App Password**
   - Visit: https://myaccount.google.com/apppasswords
   - Select "Mail" and your device
   - Copy the 16-character password
   - Use this password in your `.env` file

3. **Configure .env file**
```
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-16-char-app-password
ADMIN_EMAIL=where-to-receive-contact-forms@email.com
```

### Using Other Email Services

#### Outlook/Hotmail
```
EMAIL_SERVICE=outlook
EMAIL_USER=your-email@outlook.com
EMAIL_PASSWORD=your-password
```

#### Custom SMTP (for professional email)
Modify `server.js` transporter configuration:
```javascript
const transporter = nodemailer.createTransport({
    host: 'smtp.yourdomain.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});
```

## API Endpoints

### Health Check
- **URL**: `/api/health`
- **Method**: GET
- **Description**: Check if server is running
- **Response**: `{ status: 'ok', message: 'Server is running' }`

### Contact Form
- **URL**: `/api/contact`
- **Method**: POST
- **Body**:
```json
{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "subject": "Immigration Inquiry",
    "message": "I'm interested in Express Entry..."
}
```
- **Response**: `{ success: true, message: '...' }`

### Save CRS Results (Future)
- **URL**: `/api/save-crs`
- **Method**: POST
- **Body**:
```json
{
    "email": "user@example.com",
    "score": 450,
    "details": { ... }
}
```

## Deployment Options

### Deploy Backend to Heroku
1. Create Heroku account
2. Install Heroku CLI
3. Deploy:
```bash
cd backend
heroku create canaquest-backend
heroku config:set EMAIL_USER=your-email@gmail.com
heroku config:set EMAIL_PASSWORD=your-app-password
heroku config:set ADMIN_EMAIL=admin@email.com
git push heroku main
```

### Deploy to Vercel/Netlify (Serverless)
Convert Express routes to serverless functions.

### Deploy to AWS/DigitalOcean
Use PM2 for process management:
```bash
npm install -g pm2
pm2 start server.js --name canaquest-backend
pm2 startup
pm2 save
```

## Security Best Practices

1. **Never commit `.env` file** (it's in .gitignore)
2. **Use environment variables** for all sensitive data
3. **Enable HTTPS** in production
4. **Add rate limiting** to prevent spam
5. **Validate all inputs** on server side
6. **Keep dependencies updated**: `npm audit fix`

## Troubleshooting

### Email Not Sending
- Check your email credentials in `.env`
- Verify App Password is correct (for Gmail)
- Check console for error messages
- Test with: `node -e "console.log(require('./server.js'))"`

### CORS Errors
- Make sure backend is running on port 3000
- Check frontend is using correct backend URL
- Verify CORS is enabled in server.js

### Port Already in Use
- Change PORT in `.env` file
- Or kill the process: `npx kill-port 3000`

## Future Enhancements

- [ ] Add database (MongoDB/PostgreSQL)
- [ ] Implement user authentication
- [ ] Add rate limiting
- [ ] Store contact submissions in database
- [ ] Add file upload for documents
- [ ] Implement appointment scheduling
- [ ] Add admin dashboard
