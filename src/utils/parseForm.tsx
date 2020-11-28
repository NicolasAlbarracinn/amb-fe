export const parseSubmitForm = form => {
  let parsedForm = {};
  Object.entries(form).forEach((key: any) => {
    parsedForm[key[0]] = key[1].value;
  });
  return parsedForm;
};

export const parseReceivedForm = form => {
  let parsedForm = {};
  console.log(form);
  Object.entries(form).forEach((key: any) => {
    const value = key[1];
    parsedForm[key[0]] = {
      value,
      isValid: true,
    };
  });
  return parsedForm;
};
