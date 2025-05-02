"use server";
import 'dotenv/config';
import { supabase } from '@/db/subabaseClient';
import nodemailer from "nodemailer";
interface FormData{
  name: string;
  email: string;
  message: string;
}
export async function sendData(req: FormData) {
  const { name, email, message } = req;
  
  if (!name || !email || !message) {
    return JSON.stringify({ error: 'Missing fields', status:400 });
  } 
  try{
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: "majedsprofilemailsystem@gmail.com",
      to: 'majedshmaitlu@gmail.com',
      subject: `Message from ${name}`,  
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);
  }catch (error) {
    console.error('Error sending email:', error);
    return JSON.stringify({ error: 'Failed to send email', status: 500 });
  }
    

  const { data, error } = await supabase.from('contacts').insert([{ name, email, message }]);

  if (error) {
    return JSON.stringify({ error: error.message , status: 500 });
  }

  return JSON.stringify({ success: true, data });
}

