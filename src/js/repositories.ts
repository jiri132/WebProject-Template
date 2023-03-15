// Interface order is setup from the way  github api gives them
export interface repos {
    // Most important variables
    name                : string;
    full_name           : string;
    description         : string;
    language            : string;

    //URL's
    languages_url       : string;
    html_url            : string;


    //Time & Dates
    created_at          : string;
    updated_at          : string;
    pusehd_at           : string;

    // Issues Forks Watchers
    stargazers_count    : number;
    watchers_count      : number;
    forks_count         : number;
    open_issues_count   : number;
    fork                : boolean

    //Tags
    visibility          : string;
    topics              : string;
}
