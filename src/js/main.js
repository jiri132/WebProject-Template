import * as reposManager from "./project-displayer.js";
const projectContainer = document.getElementById("projects");
const Repos = reposManager.GetRepos();
Repos.then(data => {
    data = data.filter(d => d.language == projectContainer.dataset.language);
    reposManager.DisplayProjects(projectContainer, data);
});
