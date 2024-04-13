import { StatisticsArticle } from './schemas/statistics-article.schema';
type StatisticsInArticl = StatisticsArticle;
type StatisticsFromUser = StatisticsArticle;
export declare class UpdateStatisticsArticle {
    statistics: StatisticsArticle | null;
    constructor(statistics?: {
        likes: any;
        dislikes: any;
        views: any;
    });
    addStatistics(statisticsInArticl: StatisticsInArticl, statisticsFromUser?: StatisticsFromUser): StatisticsArticle;
}
export declare class UpdateArticle extends UpdateStatisticsArticle {
    title: string;
    auter: string;
    article: string;
    description: string;
    cover: string;
    dateLastEdit: {
        state: boolean;
        date: string;
    };
    constructor({ title, auter, article, description, cover, statistics }: {
        title: any;
        auter: any;
        article: any;
        description: any;
        cover: any;
        statistics: any;
    });
    addComment(comments: any): any;
}
export declare class NewArticle extends UpdateArticle {
    articleId: string;
    datePublication: string;
    dateLastEdit: {
        state: boolean;
        date: string;
    };
    constructor({ title, auter, article, description, cover, statistics }: {
        title: any;
        auter: any;
        article: any;
        description: any;
        cover: any;
        statistics: any;
    });
}
export {};
