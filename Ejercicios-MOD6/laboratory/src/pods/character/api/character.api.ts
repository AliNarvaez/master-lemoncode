import axios from 'axios';
import { Character } from './character.api-model';

// const characterUrl = 'https://rickandmortyapi.com/api/character';
const MockCharacterUrl = '/api/character';


export const getCharacter = async (id: number): Promise<Character> => {
  try {
    const { data } = await axios.get<Character>(`${MockCharacterUrl}/${id}`);
    return data;
  } catch (error) {
    console.error('Error fetching character');
    throw error;
  }
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  console.log('Saving character:', character);

  try {
    if (character.id) {
      //update
      await axios.put<Character>(
        `${MockCharacterUrl}/${character.id}`,
        character
      );
    } else {
      //insert
      await axios.post<Character>(MockCharacterUrl, character);
    }
    return true;
  } catch (error) {
    console.error('Error saving character');
    return false;
  }
};

//para enviar un solo campo
//await axios.patch(`${characterUrl}/${character.id}`, {name: character.name});
