import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.Character
): viewModel.Character => ({
  ...character,
  id: character.id,
  name: character.name,
  bestSentence: character.bestSentence,
});

export const mapCharacterFromVmToApi = (character: viewModel.Character): apiModel.Character =>
  (({
    ...character,
    id: character.id,
    name: character.name,
    // shortDescription: character.description,
    // hotelRating: hotel.rating,
    // address1: hotel.address,
    // city: hotel.city,
  } as unknown) as apiModel.Character);
