export interface Character {
  id: number;
  name: string;
  species: string;
  status: string;
  bestSentence: string;
}

export const createEmptyCharacter = (): Character => ({
  id: 0,
  name: '',
  species: '',
  status: '',
  bestSentence: '',
});
