import { Lessons } from './lessons';

describe('Tests', () => {
  describe('solutionNumberIntegersDivisible', () => {
    const instance: Lessons = new Lessons();
    beforeEach(() => {
      console.info('Initializing');
    });
    it('A: 1 => 1', () => {
      expect(instance).toBeDefined();
      const response = instance.EXAMSolutionTaskTwo(1);
      expect(response).toBe(1);
    });
  });
});
