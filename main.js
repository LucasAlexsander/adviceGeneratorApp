function api(url) {

    let api = new XMLHttpRequest();

    api.open('GET', url);

    api.onreadystatechange = () => {
        if(api.readyState == 4 && api.status == 200) {
            let text = JSON.parse(api.responseText);

            document.getElementById('apiId').innerHTML = 'ADVICE # ' + text.slip.id;

            document.getElementById('text').innerHTML = text.slip.advice;


        } else if(api.readyState == 4 && api.status ==404) {
            console.log('Page not found');
        }
    }
    api.send();
}