import express from 'express';
import { submitFeedbackUseCase } from './use-cases/SubmitFeedbackUseCase';

export const routes = express.Router();

routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;

  await submitFeedbackUseCase.execute({
    comment,
    type,
    screenshot
  });

  return res.status(201).send();
});
