export const template = function (repo, img, domain, path) {
    let dominant_language = repo.language;
    let temp = `
    <div class="project card">
    <a href="http://${domain}}/${path}jiri132/project.html?name=${repo.name}">
        <img src="${img}" alt="project image" id="${repo.full_name}">
        <p id="${repo.full_name}">
        ${repo.name},<br>
    `;
    if (dominant_language != null) {
        temp += `Dominant Language: ${dominant_language}`;
    }
    temp += `
                ${repo.description}
                </p>
                </a>
                </div>
            `;
    return temp;
};
