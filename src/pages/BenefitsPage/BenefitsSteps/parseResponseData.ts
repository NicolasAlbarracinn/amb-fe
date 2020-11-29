export const parseResponseData = (data: object) => {
  return Object.keys(data)
    .map(key => ({
      key,
      value: data[key],
      isValid: true,
    }))
    .reduce((obj, item, i) => ({ ...obj, [item.key]: item }), {});
};
