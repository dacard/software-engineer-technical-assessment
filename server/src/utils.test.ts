import { distanceValidation, dnaValidation, levenshteinDistance } from './utils';

describe("Utils", () => {
  
  describe("Distance Validators", () =>{

    test('Undefined distance', () => {  
      const t = () => {
        distanceValidation(undefined);
      };
      expect(t).toThrow(Error);
      expect(t).toThrow("Missing distance. Please provide a distance.");  
    });
    
    test('Non number distance', () => {  
      const t = () => {
        distanceValidation("Teste");
      };
      expect(t).toThrow(Error);
      expect(t).toThrow("Invalid distance. Must be a number.");  
    });

    test('Positive distance', () => {  
      const t = () => {
        distanceValidation(4.3);
      };
      expect(t).toThrow(Error);
      expect(t).toThrow("Invalid distance. Must be a positive integer.");  
    });

    test('Negative distance', () => {  
      const t = () => {
        distanceValidation(-5);
      };
      expect(t).toThrow(Error);
      expect(t).toThrow("Invalid distance. Must be a positive integer.");  
    });
  })

  describe("DNA Validators", () =>{

    test('Undefined DNA', () => {  
      const t = () => {
        dnaValidation(undefined);
      };
      expect(t).toThrow(Error);
      expect(t).toThrow("Missing dna. Please provide a dna.");  
    });

    test('Non string DNA', () => {  
      const t = () => {
        dnaValidation(123);
      };
      expect(t).toThrow(Error);
      expect(t).toThrow('Invalid dna. Must be a string.');  
    });

    test('Invalid letters', () => {  
      const t = () => {
        dnaValidation("ABCD");
      };
      expect(t).toThrow(Error);
      expect(t).toThrow("Invalid dna. Only A, C, G, T are allowed.");  
    });
  })

  describe("Levenshtein distance", () =>{

    test('Empty strings first string', () => {  
      const t = () => {
        levenshteinDistance("ABC", "");        
      };
      expect(t).toThrow(Error);
      expect(t).toThrow('Missing or empty strings. Please provide a valid string.');      
    });
    
    test('Empty strings second string', () => {  
      const t = () => {
        levenshteinDistance("", "ABC");        
      };
      expect(t).toThrow(Error);
      expect(t).toThrow('Missing or empty strings. Please provide a valid string.');      
    });

    test('Compute de Levenshtein distance', () => {  
      expect(levenshteinDistance("ACTG", "ACTG")).toBe(0);
      expect(levenshteinDistance("ACTG", "ACTA")).toBe(1);
      expect(levenshteinDistance("ACTG", "AC")).toBe(2);
      expect(levenshteinDistance("ACTG", "GTCA")).toBe(4);
    });
    
  })
})