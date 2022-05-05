import { SubmitFeedbackUseCase } from "./submitFeedbackUseCase";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedbackUC = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
)

describe('Submit feedback', () => {
  it('should be able to submit a feedback', async () => {
    await expect(submitFeedbackUC.execute({
      type: 'BUG',
      comment: 'example comment',
      screenshot: 'data:image/png;base64,adas7d67asd67sa6dasd78'
    })).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it('should not be able to submit a feedback without type', async () => {
    await expect(submitFeedbackUC.execute({
      type: '',
      comment: 'example comment',
      screenshot: 'data:image/png;base64,adas7d67asd67sa6dasd78'
    })).rejects.toThrow();
  });

  it('should not be able to submit a feedback without comment', async () => {
    await expect(submitFeedbackUC.execute({
      type: 'BUG',
      comment: '',
      screenshot: 'data:image/png;base64,adas7d67asd67sa6dasd78'
    })).rejects.toThrow();
  });

  it('should not be able to submit a feedback with an invalid screenshot', async () => {
    await expect(submitFeedbackUC.execute({
      type: 'BUG',
      comment: 'example comment',
      screenshot: 'adas7d67asd67sa6dasd78'
    })).rejects.toThrow();
  });
});
