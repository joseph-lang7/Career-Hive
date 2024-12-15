import { mailtrapClient, sender } from "../lib/mailtrap.js";

export const sendWelcomeEmail = async (email, name, profileUrl) => {
  const recipient = [{ email }];

  try {
    const res = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Welcome to Career Hive!",
      html: createWelcomeEmailTemplate(name, profileUrl),
      category: "welcome",
    });
    console.log("Welcome email sent successfully");
  } catch (error) {
    throw error;
  }
};
