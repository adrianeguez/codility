import { Lessons } from './lessons';

describe('Tests', () => {
  describe('solutionNumberIntegersDivisible', () => {
    const instance: Lessons = new Lessons();
    beforeEach(() => {
      console.info('Initializing');
    });
    it('[-3,1,2,-2,5,6] => 60', () => {
      expect(instance).toBeDefined();
      const response = instance.solutionMaximumTriplet([-3, 1, 2, -2, 5, 6]);
      expect(response).toBe(60);
    });
    it('[5,2,1,-2, -1]', () => {
      expect(instance).toBeDefined();
      const response = instance.solutionMaximumTriplet([5, 2, 1, -2, -1]);
      expect(response).toBe(10);
    });
    it('[-4,-5,-6,-2, -1]', () => {
      expect(instance).toBeDefined();
      const response = instance.solutionMaximumTriplet([-4, -5, -6, -2, -1]);
      expect(response).toBe(-8);
    });
  });
});
