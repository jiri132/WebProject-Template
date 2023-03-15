import { repos } from "./repositories";

export const testing_template = function (repo : repos, img : string) : string {
    let dominant_language : string = repo.language;
    
    if (dominant_language == null) {
        return `
    <div class="project card">
    <a href="http://127.0.0.1:5502/jiri132/project.html?name=${repo.name}">
        <img src="${img}" alt="project image" id="${repo.full_name}">
        <p id="${repo.full_name}">
        ${repo.name},<br>
        ${repo.description}
        </p>
    </a>
    </div>
    `;
    }
    return `
    <div class="project card">
    <a href="http://127.0.0.1:5502/jiri132/project.html?name=${repo.name}">
        <img src="${img}" alt="project image" id="${repo.full_name}">
        <p id="${repo.full_name}">
        ${repo.name},<br>
        ${repo.description}
        </p>
        Dominant Language: ${dominant_language}
    </a>
    </div>
    `;
}

export const template = function( repo : repos, img : string) : string { 
    let dominant_language : string = repo.language;
    
    if (dominant_language == null) {
        return `
    <div class="project card">
    <a href="http://jiri.dscloud.me/GIT_Portfolio/jiri132/project.html?name=${repo.name}">
        <img src="${img}" alt="project image" id="${repo.full_name}">
        <p id="${repo.full_name}">
        ${repo.name},<br>
        ${repo.description}
        </p>
    </a>
    </div>
    `;
    }
    return `
    <div class="project card">
    <a href="http://jiri.dscloud.me/GIT_Portfolio/jiri132/project.html?name=${repo.name}">
        <img src="${img}" alt="project image" id="${repo.full_name}">
        <p id="${repo.full_name}">
        ${repo.name},<br>
        ${repo.description}
        </p>
        Dominant Language: ${dominant_language}
    </a>
    </div>
    `;
    
} 