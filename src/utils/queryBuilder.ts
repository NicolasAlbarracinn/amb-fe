import { QueryParameters } from 'types/types';

export const queryBuilder = ({ sortBy, limit, offset, filter }: QueryParameters) => {
  let query = '';

  if (sortBy) {
    query = query.concat(`sortFiel=${sortBy.field}&sortCriteria=${sortBy.value}`);
  }

  if (offset) {
    query = query.concat(query.length === 0 ? `offset=${offset}` : `&offset=${offset}`);
  }
  if (limit) {
    query = query.concat(query.length === 0 ? `limit=${limit}` : `&limit=${limit}`);
  }

  if (filter) {
    query = query.concat(query.length === 0 ? `filter=${filter}` : `&filter=${filter}`);
  }

  return query;
};
