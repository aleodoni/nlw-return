import { feedbacksRepository } from '../../repositories';
import { mailService } from '../../services';
import { SubmitFeedbackUseCase } from './submitFeedbackUseCase';

const submitFeedbackUseCase = new SubmitFeedbackUseCase(feedbacksRepository, mailService);

export { submitFeedbackUseCase }
