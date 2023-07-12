import { Lessons } from './lessons';

describe('Tests', () => {
  describe('solutionNumberIntegersDivisible', () => {
    const instance: Lessons = new Lessons();
    beforeEach(() => {
      console.info('Initializing');
    });
    it('A: [4,2,2,5,1,5,8] => 1', () => {
      expect(instance).toBeDefined();
      const response = instance.solutionMinimumSliceInArray([
        4, 2, 2, 5, 1, 5, 8,
      ]);
      expect(response).toBe(1);
    });
    it('A: [0,0] => 1', () => {
      expect(instance).toBeDefined();
      const response = instance.solutionMinimumSliceInArray([0, 0]);
      expect(response).toBe(0);
    });
    it('A: [0,1] => 1', () => {
      expect(instance).toBeDefined();
      const response = instance.solutionMinimumSliceInArray([0, 1]);
      expect(response).toBe(0);
    });
    it('A: [1,1] => 1', () => {
      expect(instance).toBeDefined();
      const response = instance.solutionMinimumSliceInArray([1, 1]);
      expect(response).toBe(0);
    });
    it('A: [-1,0] => 1', () => {
      expect(instance).toBeDefined();
      const response = instance.solutionMinimumSliceInArray([-1, 0]);
      expect(response).toBe(0);
    });
    it('A: [-1,-1] => 1', () => {
      expect(instance).toBeDefined();
      const response = instance.solutionMinimumSliceInArray([-1, -1]);
      expect(response).toBe(0);
    });
    it('A: [0,9,8,7,6,5,4,3,2,1] => 1', () => {
      expect(instance).toBeDefined();
      const response = instance.solutionMinimumSliceInArray([
        0, 9, 8, 7, 6, 5, 4, 3, 2, 1,
      ]);
      expect(response).toBe(8);
    });
    it('A: [0,1,1,2,2,1,2,1,2,1] => 1', () => {
      expect(instance).toBeDefined();
      const response = instance.solutionMinimumSliceInArray([
        0, 1, 1, 2, 2, 1, 2, 1, 2, 1,
      ]);
      expect(response).toBe(0);
    });
    it('A: [2,2,1,1,1,2,1,2,1] => 1', () => {
      expect(instance).toBeDefined();
      const response = instance.solutionMinimumSliceInArray([
        2, 2, 1, 1, 1, 2, 1, 2, 1,
      ]);
      expect(response).toBe(2);
    });
    it('A: [-1,-1,0,1,1] => 1', () => {
      expect(instance).toBeDefined();
      const response = instance.solutionMinimumSliceInArray([-1, -1, 0, 1, 1]);
      expect(response).toBe(0);
    });
    it('A: [-1,-1,0,1,1] => 1', () => {
      expect(instance).toBeDefined();
      const response = instance.solutionMinimumSliceInArray([-1, -1, 0, 1, 1]);
      expect(response).toBe(0);
    });
    it('A: [-1,-2,-3,-4,-5] => 1', () => {
      expect(instance).toBeDefined();
      const response = instance.solutionMinimumSliceInArray([
        -1, -2, -3, -4, -5,
      ]);
      expect(response).toBe(3);
    });
    it('A: [-5,-4,-3,-2,-1] => 1', () => {
      expect(instance).toBeDefined();
      const response = instance.solutionMinimumSliceInArray([
        -5, -4, -3, -2, -1,
      ]);
      expect(response).toBe(0);
    });
    it('A: [0,0,0,0,0,-10000,10000] => 1', () => {
      expect(instance).toBeDefined();
      const response = instance.solutionMinimumSliceInArray([
        0, 0, 0, 0, 0, -10000, 10000,
      ]);
      expect(response).toBe(4);
    });
    it('A: [-10000,10000,0,0,0,0,0] => 1', () => {
      expect(instance).toBeDefined();
      const response = instance.solutionMinimumSliceInArray([
        -10000, 10000, 0, 0, 0, 0, 0,
      ]);
      expect(response).toBe(0);
    });
    it('A: [1,1,1,1,1,1] => 1', () => {
      expect(instance).toBeDefined();
      const response = instance.solutionMinimumSliceInArray([1, 1, 1, 1, 1, 1]);
      expect(response).toBe(0);
    });
    it('A: [-3, 3,2,2,1,1,1,1,0,0,1,1,-3, 3] => 1', () => {
      expect(instance).toBeDefined();
      const response = instance.solutionMinimumSliceInArray([
        -3, 3, 2, 2, 1, 1, 1, 1, 0, 0, 1, 1, -3, 3,
      ]);
      expect(response).toBe(11);
    });
    it('A: [2,2,1,1,-1,-1,0,1,1] => 1', () => {
      expect(instance).toBeDefined();
      const response = instance.solutionMinimumSliceInArray([
        2, 2, 1, 1, -1, -1, 0, 1, 1,
      ]);
      expect(response).toBe(4);
    });
    it('A: [10, 10, -1, 2, 4, -1,  2, -1] => 1', () => {
      expect(instance).toBeDefined();
      const response = instance.solutionMinimumSliceInArray([
        10, 10, -1, 2, 4, -1, 2, -1,
      ]);
      expect(response).toBe(2);
    });
  });
});
