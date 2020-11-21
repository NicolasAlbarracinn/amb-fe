export const parseSubmitForm = form => {
  let parsedForm = {};
  Object.entries(form).forEach(key => {
    //@ts-ignore
    parsedForm[key[0]] = key[1].value;
  });
  console.log(parsedForm);
  return parsedForm;
};
