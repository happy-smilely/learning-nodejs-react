export const sendEmailText = (email: string, subject: string, message: string) => {
  return `Message from ${email} with subject: ${subject}: ${message}`;
};

export const sendEmailHTML = (email: string, subject: string, message: string) => {
  return `
    <br>
    <p>Message from ${email} with the sibject ${subject}</p>
    <br>
    <p>${message}</p>`;
};
