const paragraph = document.createElement('div');
paragraph.setAttribute('id', 'guessContent');

const btn = document.createElement('button');
btn.setAttribute('id', 'getGuess');
btn.classList.add('btn', 'btn-warning', 'text-capitalize');
btn.textContent ='get a joke';


document.getElementById('guess').appendChild(paragraph);
document.getElementById('guess').appendChild(btn);

document.getElementById('getGuess').addEventListener('click', () => {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const data = this.response;
            console.log(data)
            document.getElementById('guessContent').innerHTML = `
                <!--  <img src='${data.icon_url}' alt="">  -->
                <img src='https://pngimg.com/uploads/chuck_norris/chuck_norris_PNG27.png' width='100px'>
                <p>${data.value}</p>
            `;
        } else if (this.readyState == 4 && this.status == 404) {
            alert('Erreur 404 :/');
        }
    };
    xhr.open("GET", "https://api.chucknorris.io/jokes/random", true);
    xhr.responseType = "json";
    xhr.send();
});