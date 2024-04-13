declare class TypeUpdateArticleDto {
    title: string;
    auter: string;
    article: string;
    description: string;
    cover: string;
}
export declare class UpdateArticleDto extends TypeUpdateArticleDto {
    constructor({ title, auter, article, description, cover }: TypeUpdateArticleDto);
}
export {};
