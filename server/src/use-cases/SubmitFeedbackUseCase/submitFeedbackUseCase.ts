import { FeedbacksRepository } from "../../repositories/feedbacks";
import { MailService } from "../../services/mail/mailService";
import { SubmitFeedbackRequestDTO } from "./submitFeedbackDTO";

export class SubmitFeedbackUseCase {
  constructor(
    private feedbacksRepository: FeedbacksRepository,
    private mailService: MailService
  ) {}

  async execute(request: SubmitFeedbackRequestDTO) {
    const { comment, type, screenshot } = request;

    if (!type) {
      throw new Error('Type is required.');
    }

    if (!comment) {
      throw new Error('Comment is required.');
    }

    if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
      throw new Error('Invalid screenshot format.');
    }

    await this.feedbacksRepository.create({
      comment,
      type,
      screenshot
    });

    await this.mailService.sendMail({
      subject: 'Novo feedback',
      body: [
        `<div style="font-family> sans-serif; font-size: 16px; color: #111">`,
        `<p>Tipo do feedback ${type}</p>`,
        `<p>Comentário ${comment}</p>`,
        screenshot ? `<img src="${screenshot}" />` : ``,
        `</div>`
      ].join('\n')
    })
  }
}
