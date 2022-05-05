import nodemailer from 'nodemailer';

import { MailService } from "../mailService";
import { SendMailDTO } from "../mailServiceDTO";

export class NodeMailerService implements MailService {
  async sendMail(data: SendMailDTO) {
    const { body, subject } = data;

    const transport = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "f6ee13ca17058a",
        pass: "2b624d4a77e95f"
      }
    });

    await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Alexandre Odoni <aleodoni@gmail.com>',
    subject,
    html: body
  });
  }

}
