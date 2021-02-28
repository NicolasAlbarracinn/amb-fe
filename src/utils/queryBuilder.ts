import { QueryParameters } from 'types/types';

enum QueriesKey {
  SORT_BY = 'sortBy',
  LIMIT = 'limit',
  OFFSET = 'offset',
  FILTER = 'filter',
}

export const queryBuilder = ({ sortBy, limit, offset, filter }: QueryParameters) => {
  const queriesList: { [key: string]: string } = {
    [QueriesKey.SORT_BY]: `sortField=${sortBy?.field}&sortCriteria=${sortBy?.value}`,
    [QueriesKey.OFFSET]: `offset=${offset}`,
    [QueriesKey.LIMIT]: `limit=${limit}`,
    [QueriesKey.FILTER]: `filter=${filter}`,
  };

  return Object.keys({ sortBy, limit, offset, filter })
    .map(key => queriesList[key])
    .join('&');
};
