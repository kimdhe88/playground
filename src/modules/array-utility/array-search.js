async function search(data, searchText, option = { isCaseSensitive: false, property: null }) {
  let searchList = new Array();
  if (option.isCaseSensitive) {
    if (option.property) searchList = data.filter((obj) => (obj[option.property] ? obj[option.property].toString().includes(searchText) : false));
    else searchList = data.filter((obj) => Object.values(obj).some((val) => (val ? val.toString().includes(searchText) : false)));
  } else {
    if (option.property) searchList = data.filter((obj) => (obj[option.property] ? obj[option.property].toString().toLowerCase().includes(searchText.toLowerCase()) : false));
    else searchList = data.filter((obj) => Object.values(obj).some((val) => (val ? val.toString().toLowerCase().includes(searchText.toLowerCase()) : false)));
  }
  return searchList;
}

export default { search };
