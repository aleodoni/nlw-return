import { FeedbacksRepository } from './feedbacks';
import { PrismaFeedbacksRepository } from './prisma/feedbacks';

const feedbacksRepository: FeedbacksRepository = new PrismaFeedbacksRepository();

export { feedbacksRepository }
