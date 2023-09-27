const isEmpty = (value) => {
  if (
    value === null ||
    value === undefined ||
    value === "" ||
    value.length === 0
  ) {
    return true;
  }
  return false;
};

export {
    isEmpty
}