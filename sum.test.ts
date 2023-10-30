import sum from './src/sum';

test('Hasil 1 + 2 = 3', () => {

    let nSatu:number = 1;
    let nDua:number = 2;

    expect(sum(nSatu, nDua)).toBe(3);
});
