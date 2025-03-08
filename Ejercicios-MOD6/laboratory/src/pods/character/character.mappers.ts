import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.Character
): viewModel.Character => ({
  ...character,
  id: character.id,
  name: character.name,
  species: character.species,
  status: character.status,
  bestSentence: character.bestSentence,
});

export const mapCharacterFromVmToApi = (character: viewModel.Character): apiModel.Character =>
  (({
    ...character,
    id: character.id,
    name: character.name,
    species: character.species,
    status: character.status,
    bestSentence: character.bestSentence,
  } as unknown) as apiModel.Character);
