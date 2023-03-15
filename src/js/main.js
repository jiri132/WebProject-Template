import * as t from "./templates.js";
//TODO: Make main more applicable to have other information ot display to the main screen
var template = `
<div class="project">
    <img src="" alt="project image" id="">
    <p id=""></p>
</div>
`;
//https://opengraph.githubassets.com/1bd2d24c3b7cab52d3f29c60b3cae44796967cdad664698061568bb1d10c7a8f/jiri132/${e.name}
const projectKeeper = document.getElementById("allProjects");
var requestOptions = {
    method: 'GET',
};
let url = fetch("https://api.github.com/users/jiri132/repos ", requestOptions);
const regex = /(?<=<meta property="og:image" content=")(.?)(?=\s">)/g;
function UrlExists(url) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    if (http.status == 404)
        return false;
    else
        return true;
}
let myUrl = window.location.href;
myUrl.replace('/', "");
url.then(response => {
    response.json().then((Repos) => {
        for (let i = 0; i < Repos.length; i++) {
            const e = Repos[i];
            let img = `https://raw.githubusercontent.com/jiri132/${e.name}/master/LOGO.png`;
            if (!UrlExists(img)) {
                img = `https://opengraph.githubassets.com/1bd2d24c3b7cab52d3f29c60b3cae44796967cdad664698061568bb1d10c7a8f/jiri132/${e.name}`;
            }
            projectKeeper.innerHTML += t.testing_template(Repos[i], img);
        }
    });
})
    .catch(error => console.log(`Couldn't Retrieve data from ${url} \nErr: ${error}`));
