async function sort(data = Array, propertyName = String, isAscending = true) {
  let sortList;
  if (isAscending) sortList = data.sort((a, b) => (a[propertyName] < b[propertyName] ? -1 : a[propertyName] > b[propertyName] ? 1 : 0));
  else sortList = data.sort((a, b) => (a[propertyName] < b[propertyName] ? 1 : a[propertyName] > b[propertyName] ? -1 : 0));
  return sortList;
}

export default { sort };
