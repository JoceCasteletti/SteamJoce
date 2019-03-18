/* Manejo del DOM */

const searchText = document.getElementById('searchtext');
const dataSection = document.getElementById('datasection');
const fieldSelect = document.getElementById('fieldselect');
const search = document.getElementById('search');
const sortBy = document.getElementById('sortby');
const statistics = document.getElementById('statistics');

/* Funcion para mostrar la data */
const showData = data => {
  let html = '';

/*Generar html de la tarjeta para cada item*/
  data.forEach(item => {

    html += `<div class="card text-center">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
          <p class="card-text">${item.contents}</p>
          <a href="${item.url}" class="btn btn-primary">Ir a noticia</a>
      </div>
      </div>`;
  });
  dataSection.innerHTML = html;
};

search.addEventListener('click', () => {
 /* Retorna nuevo arreglo con los elementos que cumpla la busqueda*/
  let result = window.filterByField(window.newsitems, fieldSelect.value, searchText.value);

 /* Se ordenan datos de la busqueda*/
  result = window.sortByField(result, fieldSelect.value, sortBy.value)

  showData(result);
});

const showStatistics = () => {
  let html = '';

  const result = window.computeStats(window.newsitems);

  result.forEach((value, key) => {
    html += `<li class="list-group-item d-flex justify-content-between align-items-center">${key}
              <span class="badge badge-primary badge-pill">${value}</span>
            </li>`;
  })

  statistics.innerHTML = html;
};

showStatistics()