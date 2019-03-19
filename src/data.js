// Función para filtrar, se específica la data un campo y porque filtrar 
const filterByField = (news, field, search) => {
  // Pasamos la búsqueda a minúscula toLowerCase
  search = search.toLowerCase();
  return news.filter(item => item[field].toLowerCase().includes(search));
}

window.filterByField = filterByField;

// Función para ordenar la data
const sortByField = (data, sortBy, sortOrder) => {
  if (sortOrder === 'az') {
    return data.sort((item1, item2) => item1[sortBy].localeCompare(item2[sortBy]));
  } else if (sortOrder === 'za') {
    return data.sort((item1, item2) => item1[sortBy].localeCompare(item2[sortBy])).reverse();
  } else {
    return data;
  }
}

window.sortByField = sortByField;


const computeStats = data => {

  const statistics = new Map();

  data.forEach((item) => {
    if (!statistics.has(item.feedlabel)) {
      statistics.set(item.feedlabel, 0);
    }

    let sum = statistics.get(item.feedlabel) + 1;

    statistics.set(item.feedlabel, sum);
  })

  return statistics
}

window.computeStats = computeStats