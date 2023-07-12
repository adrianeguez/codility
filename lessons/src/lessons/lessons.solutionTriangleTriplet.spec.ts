import { Lessons } from './lessons';

describe('Tests', () => {
  describe('solutionNumberIntegersDivisible', () => {
    const instance: Lessons = new Lessons();
    beforeEach(() => {
      console.info('Initializing');
    });
    it('A: [10,2,5,1,8,20] => 1', () => {
      expect(instance).toBeDefined();
      const response = instance.solutionTriangleTriplet([10, 2, 5, 1, 8, 20]);
      expect(response).toBe(1);
    });
    it('A: [10,50,5,1] => 0', () => {
      expect(instance).toBeDefined();
      const response = instance.solutionTriangleTriplet([10, 50, 5, 1]);
      expect(response).toBe(0);
    });
  });
});
