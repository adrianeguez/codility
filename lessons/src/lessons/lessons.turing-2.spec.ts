import { Lessons } from './lessons';

describe('Tests', () => {
  describe('solutionNumberIntegersDivisible', () => {
    const instance: Lessons = new Lessons();
    beforeEach(() => {
      console.info('Initializing');
    });
    it('min y max 0 => A:0 B:0 K:1', () => {
      expect(instance).toBeDefined();
      const response = instance.solutionTuring2([5,4,3,2,1]);
      expect(response).toStrictEqual(["Golden trophy","Silver Platter","Bronze medal","4","5"]);
    });
  });
});
