window.newsitems = STEAM.appnews.newsitems;

// Include retorna v o f si el texto que está en search está en item 
const filterByFeedlabel = (news, search) => {
  return news.filter(item => item.feedlabel.include(search));
}

window.filterByFeedlabel = filterByFeedlabel;

filterByFeedlabel(newsitems, 'Valve')

// o

const filterByFeedlabelEspanol = (noticias, textoABuscar) => {
	const nuevoArreglo = noticias.filter(function (cadaItemDeLaData) {
		console.log(`gid: "${cadaItemDeLaData.gid}" feedlabel: "${cadaItemDeLaData.feedlabel}"`);
		console.log(`Retornó ${cadaItemDeLaData.feedlabel.includes(textoABuscar)}`);

		return cadaItemDeLaData.feedlabel.includes(textoABuscar);
	});

	return nuevoArreglo;
}
