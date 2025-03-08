import axios from 'axios';
import { CharacterEntityApi, CharacterListResponse } from './character-collection.api-model';

const characterCollectionUrl = 'https://rickandmortyapi.com/api/character';
// const characterCollectionUrl = '/api/character';


export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  try {
    const {data} = await axios.get<CharacterListResponse>(characterCollectionUrl);
    const {results} = data;
    return results;
  } catch (error) {
    console.error('Error fetching character collection');
  }
};


// no funciona por que hay que incluir el metodo DELETE en /server/src/index.ts
export const deleteCharacter = async (id: number): Promise<boolean> => {
  try {
    await axios.delete(`${characterCollectionUrl}/${id}`);
    return true;
  } catch (error) {
    console.error('Error deleting character');
    return false;
};
} 
