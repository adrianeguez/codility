import { Lessons } from '../src/lessons/lessons';

describe('Tests', () => {
  describe('Is working', () => {
    const instance: Lessons = new Lessons();
    beforeEach(() => {
      console.info('Initializing');
    });
    it('Is working', () => {
      expect(Lessons.working()).toBe(true);
    });
  });
});
