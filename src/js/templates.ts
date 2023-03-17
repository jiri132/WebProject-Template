import { repos } from "./repositories";




export const template = function( repo : repos, img : string, domain : string, path : string) : string { 
    let dominant_language : string = repo.language;
    
    let template : string = `
        <a 
        href="../jiri132/project.html?name=${repo.name}"
        id="${repo.full_name}" 
        class="project-cover hold-space"
        >
            <div class="cover-image-wrap"> 
                <div class="cover-image"> 
                    <div class="cover cover-normal">
                        <img 
                            class="cover__img" 
                            src="${img}" 
                            alt="project image"
                            sizes="(max-width: 540px) 100vw, (max-width: 768px) 50vw, calc(1400px / 3)"
                        >
                    </div>
                </div>
            </div>
            <div class="details-wrap"> 
                <div class="details"> 
                    <div class="details-inner"> 
                        <div class="title preserve-whitespace"> 
                            ${repo.description}
                        </div>
                    </div>
                </div>
            </div>
        </a>
    `

    return template;
} 