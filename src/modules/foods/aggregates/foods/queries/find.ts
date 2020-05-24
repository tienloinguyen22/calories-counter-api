import { Context, QueryResult, PaginationTypes, buildConditions } from '@app/core';
import { Food, FoodsQuery } from '../interfaces';
import { foodsRepository } from '../repository';

export const handler = async (query: FoodsQuery, context: Context): Promise<QueryResult<Food>> => {
  const { pageIndex, itemsPerPage, orderBy, ...conditionFields } = query;

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const result = await foodsRepository.findWithOffsetPagination!(
    {
      type: PaginationTypes.OFFSET,
      pageIndex,
      itemsPerPage,
    },
    buildConditions(conditionFields),
    orderBy,
    context.fields,
  );
  return result;
};
