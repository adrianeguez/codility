import { Lessons } from './lessons';

describe('Tests', () => {
  describe('solutionDNA', () => {
    const instance: Lessons = new Lessons();
    beforeEach(() => {
      console.info('Initializing');
    });
    it('S: CAGCCTA , P: [2, 5, 0], Q: number[4, 5, 6] => ', () => {
      //   * A = 1
      //   * C = 2
      //   * G = 3
      //   * T = 4
      expect(instance).toBeDefined();
      const response = instance.solutionDNA('CAGCCTA', [2, 5, 0], [4, 5, 6]);
      expect(response).toStrictEqual([2, 4, 1]);
    });
    it('S: A , P: [0], Q: number[0] => ', () => {
      //   * A = 1
      //   * C = 2
      //   * G = 3
      //   * T = 4
      expect(instance).toBeDefined();
      const response = instance.solutionDNA('A', [0], [0]);
      expect(response).toStrictEqual([1]);
    });
    it('S: C , P: [0], Q: number[0] => ', () => {
      //   * A = 1
      //   * C = 2
      //   * G = 3
      //   * T = 4
      expect(instance).toBeDefined();
      const response = instance.solutionDNA('C', [0], [0]);
      expect(response).toStrictEqual([2]);
    });
    it('S: G , P: [0], Q: number[0] => ', () => {
      //   * A = 1
      //   * C = 2
      //   * G = 3
      //   * T = 4
      expect(instance).toBeDefined();
      const response = instance.solutionDNA('G', [0], [0]);
      expect(response).toStrictEqual([3]);
    });
    it('S: T , P: [0], Q: number[0] => ', () => {
      //   * A = 1
      //   * C = 2
      //   * G = 3
      //   * T = 4
      expect(instance).toBeDefined();
      const response = instance.solutionDNA('T', [0], [0]);
      expect(response).toStrictEqual([4]);
    });
    it('S: AAA , P: [0,0,0], Q: number[0,1,2] => ', () => {
      //   * A = 1
      //   * C = 2
      //   * G = 3
      //   * T = 4
      expect(instance).toBeDefined();
      const response = instance.solutionDNA('AAA', [0, 0, 0], [0, 1, 2]);
      expect(response).toStrictEqual([1, 1, 1]);
    });
    it('S: AAC , P: [0,0,0], Q: number[0,1,2] => ', () => {
      //   * A = 1
      //   * C = 2
      //   * G = 3
      //   * T = 4
      expect(instance).toBeDefined();
      const response = instance.solutionDNA('AAC', [0, 0, 0], [0, 1, 2]);
      expect(response).toStrictEqual([1, 1, 1]);
    });
    it('S: AAG , P: [0,0,0], Q: number[0,1,2] => ', () => {
      //   * A = 1
      //   * C = 2
      //   * G = 3
      //   * T = 4
      expect(instance).toBeDefined();
      const response = instance.solutionDNA('AAG', [0, 0, 0], [0, 1, 2]);
      expect(response).toStrictEqual([1, 1, 1]);
    });
    it('S: AAT , P: [0,0,0], Q: number[0,1,2] => ', () => {
      //   * A = 1
      //   * C = 2
      //   * G = 3
      //   * T = 4
      expect(instance).toBeDefined();
      const response = instance.solutionDNA('AAT', [0, 0, 0], [0, 1, 2]);
      expect(response).toStrictEqual([1, 1, 1]);
    });
    it('S: AAT , P: [0,0,2], Q: number[0,1,2] => ', () => {
      //   * A = 1
      //   * C = 2
      //   * G = 3
      //   * T = 4
      expect(instance).toBeDefined();
      const response = instance.solutionDNA('AAT', [0, 0, 2], [0, 1, 2]);
      expect(response).toStrictEqual([1, 1, 4]);
    });
    it('S: ACGT , P: [0,1,2,3], Q: number[0,1,2,3] => ', () => {
      //   * A = 1
      //   * C = 2
      //   * G = 3
      //   * T = 4
      expect(instance).toBeDefined();
      const response = instance.solutionDNA('ACGT', [0, 1, 2, 3], [0, 1, 2, 3]);
      expect(response).toStrictEqual([1, 2, 3, 4]);
    });
    it('S: TGCA , P: [0,1,2,0], Q: number[2,1,2,3] => ', () => {
      //   * A = 1
      //   * C = 2
      //   * G = 3
      //   * T = 4
      expect(instance).toBeDefined();
      const response = instance.solutionDNA('TGCA', [0, 1, 2, 3], [2, 1, 2, 3]);
      expect(response).toStrictEqual([2, 3, 2, 1]);
    });
  });
});
