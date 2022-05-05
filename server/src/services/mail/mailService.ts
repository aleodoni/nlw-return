import { SendMailDTO } from "./mailServiceDTO";

export interface MailService {
  sendMail: (data: SendMailDTO) => Promise<void>;
}
