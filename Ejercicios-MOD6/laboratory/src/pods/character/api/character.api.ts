import axios from 'axios';
import { Character } from './character.api-model';

const characterUrl = 'https://rickandmortyapi.com/api/character';
// const characterUrl = '/api/character';


export const getCharacter = async (id: number): Promise<Character> => {
  try {
    const { data } = await axios.get<Character>(`${characterUrl}/${id}`);
    return data;
  } catch (error) {
    console.error('Error fetching character');
  }
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  try {
    if (character.id) {
      //update
      await axios.put<Character>(
        `${characterUrl}/${character.id}`,
        character
      );
    } else {
      //insert - no funciona por que hay que incluir el metodo POST en /server/src/index.ts
      await axios.post<Character>(characterUrl, character);
    }
    return true;
  } catch (error) {
    console.error('Error saving character');
    return false;
  }
};
