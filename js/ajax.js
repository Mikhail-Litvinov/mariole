$(document).ready (function () {
    showContent('home.html')
})

function showContent(link) {

    var cont = document.getElementById('content');
    // var loading = document.getElementById('loading');

    // cont.innerHTML = loading.innerHTML;

    var http = createRequestObject();					// создаем ajax-объект
    if( http ) {
        http.open('get', link);							// инициируем загрузку страницы
        http.onreadystatechange = function () {			// назначаем асинхронный обработчик события
            if(http.readyState == 4) {
                cont.innerHTML = http.responseText;		// присваиваем содержимое
            }
        }
        http.send(null);    
    } else {
        console.log("fail")	// если ajax-объект не удается создать, просто перенаправляем на адрес
    }
}

// создание ajax объекта
function createRequestObject() {
    try { return new XMLHttpRequest() }
    catch(e) {
        try { return new ActiveXObject('Msxml2.XMLHTTP') }
        catch(e) {
            try { return new ActiveXObject('Microsoft.XMLHTTP') }
            catch(e) { return null; }
        }
    }
}