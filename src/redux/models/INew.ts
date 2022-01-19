interface Sourse{
    id: string;
    name: string;
}

export interface INew{
    source?: Sourse;
    author?: string;
    title?: string;
    description?: string;
    url?: string;
    urlToImage?: string;
    publishedAt?: string;
    content?: string;
}