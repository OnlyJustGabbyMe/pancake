function cargarPagina(pagina) {
    // Simulazione del caricamento di contenuto dinamico
    let contenuto = '';

    if (pagina === 'home') {
        contenuto = '<h2>Benvenuto nella pagina principale</h2><p>Esplora il nostro incredibile contenuto!</p>';
    } else if (pagina === 'chiSiamo') {
        contenuto = '<h2>Chi siamo</h2><p>Siamo un team appassionato...</p>';
    } else if (pagina === 'contatti') {
        contenuto = '<h2>Informazioni di contatto</h2><p>Contattaci all\'indirizzo info@miosito.com!</p>';
    }

    // Aggiungi classe di animazione al contenuto
    document.getElementById('contenuto').innerHTML = contenuto;
    document.getElementById('contenuto').classList.add('fadeIn');
}
