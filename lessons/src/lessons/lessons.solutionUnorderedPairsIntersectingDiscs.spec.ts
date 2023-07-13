import { Lessons } from './lessons';

describe('Tests', () => {
  describe('solutionUnorderedPairsIntersectingDiscs', () => {
    const instance: Lessons = new Lessons();
    beforeEach(() => {
      console.info('Initializing');
    });
    it('A: [1, 5, 2, 1, 4, 0] => 0', () => {
      expect(instance).toBeDefined();
      const response = instance.solutionUnorderedPairsIntersectingDiscs([
        1, 5, 2, 1, 4, 0,
      ]);
      expect(response).toBe(11);
    });
  });
});
