export interface ILink {
    url: string;
}

export interface APIResponse {
    results: APIResult[]
}

export interface APIResult {
    date: string | Date;
    links_found: number;
    found_links: ILink[]
}

