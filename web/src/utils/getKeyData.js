export const getKeyData = (data, page = 1, limit = 10) => {
  return data.map((result, index) => {
    result.key = index + ((page - 1) * limit + 1);
    return result;
  });
};
