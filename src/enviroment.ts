export const environment = {
  API: {
    HTTP_URL:
      `${process.env.REACT_APP_API_URL}/api` ||
      `${process.env.REACT_APP_API_PROTOCOL || 'https'}://${process.env.REACT_APP_API_HOST || 'localhost'}:${
        process.env.REACT_APP_API_PORT || '4000'
      }/${process.env.REACT_APP_API_PATH || ''}`,
  },
};
