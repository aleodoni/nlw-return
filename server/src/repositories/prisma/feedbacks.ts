import { FeedbacksCreateDTO } from "../../dtos/FeedbacksDTO";
import { prisma } from "../../prisma";
import { FeedbacksRepository } from "../feedbacks";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  async create(data: FeedbacksCreateDTO)  {
    const { comment, type, screenshot } = data;

    const feedback = await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot
      }
    });
  }

}
