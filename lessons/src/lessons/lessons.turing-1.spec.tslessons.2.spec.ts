import { Lessons } from './lessons';

describe('Tests', () => {
  describe('solutionNumberIntegersDivisible', () => {
    const instance: Lessons = new Lessons();
    beforeEach(() => {
      console.info('Initializing');
    });
    it('min y max 0 => A:0 B:0 K:1', () => {
      expect(instance).toBeDefined();
      const response = instance.turingAssesment('ab-cd');
      expect(response).toBe('dc-ba');
    });
    it('min y max 0 => A:0 B:0 K:1', () => {
      expect(instance).toBeDefined();
      const response = instance.turingAssesment('a-bC-dEf=ghlj!!');
      expect(response).toBe('j-lh-gfE=dCba!!');
    });
    it('min y max 0 => A:0 B:0 K:1', () => {
      expect(instance).toBeDefined();
      const response = instance.turingAssesment('z<*zj');
      expect(response).toBe('j<*zz');
    });
  });
});
