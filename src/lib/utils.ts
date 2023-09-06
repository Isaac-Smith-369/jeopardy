export const tokenize = (text: string) => {
    // split the text into words
    return text.toLowerCase().match(/\b\w+\b/g);
};

export const jaccardSimilarity = (set1: Set<string>, set2: Set<string>) => {
    const intersection = new Set([...set1].filter((x) => set2.has(x)));
    const union = new Set([...set1, ...set2]);
    return intersection.size / union.size;
};
