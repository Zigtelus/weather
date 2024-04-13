declare class TypeCreateArticleDto {
    title: string;
    auter: string;
    auterId: string;
    article: string;
    description: string;
    cover: string;
}
export declare class CreateArticleDto extends TypeCreateArticleDto {
    constructor({ title, auter, auterId, article, description, cover }: TypeCreateArticleDto);
}
export {};
