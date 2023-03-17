var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as t from "./templates.js";
var requestOptions = {
    method: 'GET',
};
//let url  = fetch("https://api.github.com/users/jiri132/repos ",requestOptions);
let url = "https://api.github.com/users/jiri132/repos ";
//const regex = /(?<=<meta property="og:image" content=")(.?)(?=\s">)/g;
// Check if the URL entered is valid for response
function UrlExists(url) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    if (http.status == 404)
        return false;
    else
        return true;
}
// Get all the repos and give them back to you in a array of repos
export function GetRepos() {
    return __awaiter(this, void 0, void 0, function* () {
        let repos = [];
        try {
            const response = yield fetch(url, requestOptions);
            const data = yield response.json();
            repos = data;
        }
        catch (error) {
            console.log(`Couldn't Retrieve data from ${url} \nErr: ${error}`);
        }
        return repos;
    });
}
// Display all projects gathered by Repos attribute
export function DisplayProjects(projectDisplayElement, Repos) {
    for (let i = 0; i < Repos.length; i++) {
        const obj = Repos[i];
        //Image of the project
        let img = `https://raw.githubusercontent.com/jiri132/${obj.name}/master/LOGO.png`;
        //Cehck if exist or take the basic github image
        if (!UrlExists(img)) {
            img = `https://opengraph.githubassets.com/1bd2d24c3b7cab52d3f29c60b3cae44796967cdad664698061568bb1d10c7a8f/jiri132/${obj.name}`;
        }
        // apply it to the view
        projectDisplayElement.innerHTML += t.template(obj, img, "127.0.0.1:5502", "");
    }
}
