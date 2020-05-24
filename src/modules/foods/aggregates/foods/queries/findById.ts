import { QueryById, AppError } from '@app/core';
import { Food } from '../interfaces';
import { foodsRepository } from '../repository';

export const handler = async (query: QueryById): Promise<Food | undefined> => {
  if (!query.id) {
    throw new AppError('Food ID is required', 'foods/missing-food-id');
  }

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return foodsRepository.findById!(query.id);
};
