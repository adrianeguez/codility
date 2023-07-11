import { Lessons } from './lessons';

describe('Tests', () => {
  xdescribe('Is working', () => {
    const instance: Lessons = new Lessons();
    beforeEach(() => {
      console.info('Initializing');
    });
    it('Is working', () => {
      expect(Lessons.working()).toBe(true);
      expect(instance).toBeDefined();
    });
  });
  describe('solutionNumberIntegersDivisible', () => {
    const instance: Lessons = new Lessons();
    beforeEach(() => {
      console.info('Initializing');
    });
    it('min y max 0 => A:0 B:0 K:1', () => {
      expect(instance).toBeDefined();
      const response = instance.solutionNumberIntegersDivisible(0, 0, 1);
      expect(response).toBe(1);
    });
  });
});
