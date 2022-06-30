

export const levenshteinDistance = (s: string, t: string) : number => {
    
    if (!t.length || !s.length) throw new Error('Missing or empty strings. Please provide a valid string.');    

    const arr = [];
    for (let i = 0; i <= t.length; i++) {
      arr[i] = [i];
      for (let j = 1; j <= s.length; j++) {
        arr[i][j] =
          i === 0
            ? j
            : Math.min(
                arr[i - 1][j] + 1,
                arr[i][j - 1] + 1,
                arr[i - 1][j - 1] + (s[j - 1] === t[i - 1] ? 0 : 1)
              );
      }
    }
    return arr[t.length][s.length];
};

export const dnaValidation = (dna: any) => {
    //check if dna isn't undefined
    if (!dna)
        throw new Error('Missing dna. Please provide a dna.');
    
    //check if dna is a string
    if (typeof dna !== 'string') 
        throw new Error('Invalid dna. Must be a string.');
        
    //check if the dna contains only characters A, C, G, T
    if (!dna.match(/^[acgtACGT]+$/))
        throw new Error('Invalid dna. Only A, C, G, T are allowed.');
}

export const distanceValidation = (distance: any) => {
    //check if distance isn't undefined
    if (distance == undefined || distance == null)
        throw Error('Missing distance. Please provide a distance.');

    //check if distance is a number
    if (typeof distance !== 'number')
        throw new Error('Invalid distance. Must be a number.');

    //check if distance is an integer >= 0
    if (distance % 1 !== 0 || distance < 0)    
        throw new Error('Invalid distance. Must be a positive integer.');
}
