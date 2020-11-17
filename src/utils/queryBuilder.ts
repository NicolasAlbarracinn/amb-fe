import { QueryParameters } from 'types/types';

export const queryBuilder = ({ sortBy, limit, offset, filter }: QueryParameters) => {
  let query = '';

  if (sortBy) {
    query = query.concat(`sortFiel=${sortBy.field}&sortCriteria=${sortBy.value}`);
  }

  if (offset) {
    query = query.concat(`&offset=${offset}`);
  }
  if (limit) {
    query = query.concat(`&limit=${limit}`);
  }

  if (filter) {
    query = query.concat(`&filter=${filter}`);
  }

  return query;
};
