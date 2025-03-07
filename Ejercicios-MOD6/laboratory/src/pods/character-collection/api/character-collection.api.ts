import axios from 'axios';
import { CharacterEntityApi } from './character-collection.api-model';
// import { mockCharacterCollection } from './character-collection.mock-data';

// const MockCharacterCollectionUrl = 'https://rickandmortyapi.com/api/character';

const MockCharacterCollectionUrl = '/api/character';

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  const { data } = await axios.get<{ results: CharacterEntityApi[] }>(MockCharacterCollectionUrl);
  return data.results;
};

export const deleteCharacter = async (id: number): Promise<boolean> => {
  await axios.delete(`${MockCharacterCollectionUrl}/${id}`);
  return true;
};



// export const getCharacterCollection = async (): Promise<
//   CharacterEntityApi[]
// > => {
//   try {
//     const { data } = await axios.get<{ results: CharacterEntityApi[] }>(MockCharacterCollectionUrl);
//     return data.results;
//   } catch (error) {
//     console.error('Error fetching character collection');
//     throw new Error('Error al obtener la coleccion de personajes');
//   }
// };

// export const deleteCharacter = async (id: number): Promise<boolean> => {
//   try {
//     await axios.delete(`${MockCharacterCollectionUrl}/${id}`);
//     return true;
//   } catch (error) {
//     console.error('Error deleting character');
//     return false;
//   }
// };
