import { FeedbacksCreateDTO } from "../dtos/FeedbacksDTO";

export interface FeedbacksRepository {
  create: (data: FeedbacksCreateDTO) => Promise<void>;
}
