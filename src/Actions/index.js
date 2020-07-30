export const selectedlibrary = (libraryId) => {
  return {
    type: 'select_library',
    payload: libraryId,
  };
};
