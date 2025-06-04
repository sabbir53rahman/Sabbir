# Email Setup Instructions

## Option 1: EmailJS (Free & Easy Setup)

1. **Create EmailJS Account**
   - Go to https://www.emailjs.com/
   - Sign up for a free account

2. **Create Email Service**
   - Go to Email Services
   - Add new service (Gmail, Outlook, etc.)
   - Connect your email account

3. **Create Email Template**
   - Go to Email Templates
   - Create new template with these variables:
     \`\`\`
     From: {{from_name}} <{{from_email}}>
     To: sabbir53rahman@gmail.com
     Subject: Portfolio Contact: {{subject}}
     
     Name: {{from_name}}
     Email: {{from_email}}
     Subject: {{subject}}
     
     Message:
     {{message}}
     
     ---
     This message was sent from your portfolio website.
     Reply to: {{reply_to}}
     \`\`\`

4. **Get Your Keys**
   - Copy Service ID, Template ID, and Public Key
   - Add them to your `.env.local` file

## Option 2: Resend (Recommended for Production)

1. **Create Resend Account**
   - Go to https://resend.com/
   - Sign up for account

2. **Get API Key**
   - Go to API Keys section
   - Create new API key
   - Add to `.env.local`

3. **Update API Route**
   - Replace EmailJS code with Resend implementation

## Option 3: SendGrid

1. **Create SendGrid Account**
   - Go to https://sendgrid.com/
   - Sign up for account

2. **Get API Key**
   - Go to Settings > API Keys
   - Create new API key
   - Add to `.env.local`

## Environment Variables

Add these to your `.env.local` file:

\`\`\`env
# For EmailJS
EMAILJS_SERVICE_ID=service_xxxxxxx
EMAILJS_TEMPLATE_ID=template_xxxxxxx
EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx

# For Resend
RESEND_API_KEY=re_xxxxxxxxxxxxxxx

# For SendGrid
SENDGRID_API_KEY=SG.xxxxxxxxxxxxxxx
\`\`\`

## Testing

1. Fill out the contact form on your website
2. Check your email (sabbir53rahman@gmail.com)
3. Verify the message was received with all details

## Troubleshooting

- Check browser console for errors
- Verify environment variables are set correctly
- Check email service configuration
- Test with different email addresses
