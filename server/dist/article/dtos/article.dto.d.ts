import { DateLastEditArticleDto } from "./date-last-edit-article.dto";
import { StatisticsArticleDto } from "./statistics-article.dto";
declare class TypeArticleDto {
    title: string;
    auter: string;
    auterId: string;
    article: string;
    description: string;
    cover: string;
    dateLastEdit: DateLastEditArticleDto;
    statistics: StatisticsArticleDto | null;
}
export declare class ArticleDto extends TypeArticleDto {
    constructor({ title, auter, auterId, article, description, cover, dateLastEdit, statistics }: TypeArticleDto);
}
export {};
