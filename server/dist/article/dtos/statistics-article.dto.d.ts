declare class TypeStatisticsArticleDto {
    likes: string[];
    dislikes: string[];
    views: string[];
}
export declare class StatisticsArticleDto extends TypeStatisticsArticleDto {
    constructor({ likes, dislikes, views }: TypeStatisticsArticleDto);
}
export {};
