import * as reposManager from "./project-displayer.js";
import { repos } from "./repositories.js";

const projectContainer : HTMLElement | null = document.getElementById("projects");
const Repos : Promise<repos[]> = reposManager.GetRepos();


Repos.then(data => {
    data = data.filter(d => d.language == projectContainer!.dataset.language);
    reposManager.DisplayProjects(projectContainer!,data);
})
