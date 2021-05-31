const timeStamp = '1565045589';
const chaveAPI = '74a69b58467782083d8e4236e3a22a88';
const md5 = '6933033dfa8729564bde3ef362996bfb';
const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timeStamp}&apikey=${chaveAPI}&hash=${md5}&limit=4`;
const options = {
    method: 'GET',
    mode: 'cors',
    redirect: 'follow',
    cache: 'default'
};

fetch(url, options)
    .then((response) => {
        return response.json();
    }).then((jsonParsed) => {        

        jsonParsed.data.results.forEach(element => {
            const srcImage = element.thumbnail.path + '.' + element.thumbnail.extension;

            const nameHero = element.name
                ? `<h5 class=""card-title px-2 pt-2 pb-0 text-center>${element.name}</h5>` : "";

            const description = element.description
                ? `<div>${element.description.substring(0, 130)}</div>` : "";

            
            let card =
                `<div class="col-12 d-flex flex-wrap">
                    <div class="row row-cols-1 no-gutters mt-2">
                        <div id="cards" class="col-12 mr-2">
                            <div class="card">
                                <div class="">
                                    <img src="${srcImage}" class="card-img img-fluid" style="width: 100%; height: auto;" />
                                </div>
                                <div class="card-body">
                                    <div class="card-title text-danger font-weight-bold">
                                        ${nameHero}
                                    </div>
                                    <div class="card-subtitle text-center text-muted pb-3">
                                        ${description}
                                    </div>
                                </div>
                                
                            </div>   
                        </div>
                    </div>
                </div>`;

            document.getElementById("card-item").innerHTML += card;

        });

    })
