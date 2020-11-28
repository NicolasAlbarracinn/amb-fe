export const parseSubmitForm = form => {
  let parsedForm = {};
  Object.entries(form).forEach((key: any) => {
    parsedForm[key[0]] = key[1].value;
  });
  return parsedForm;
};
