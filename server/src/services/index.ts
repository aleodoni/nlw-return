import { MailService } from './mail/mailService';
import { NodeMailerService } from './mail/nodemailer/NodeMailerService';

const mailService: MailService = new NodeMailerService();

export { mailService }
