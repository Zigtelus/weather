"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewArticle = exports.UpdateArticle = exports.UpdateStatisticsArticle = void 0;
const uuid_1 = require("uuid");
class UpdateStatisticsArticle {
    constructor(statistics) {
        this.statistics = this.addStatistics(statistics);
    }
    addStatistics(statisticsInArticl, statisticsFromUser) {
        if (statisticsInArticl === undefined) {
            return null;
        }
        if (statisticsFromUser || !!statisticsFromUser.views[0]) {
            const newLike = statisticsFromUser.likes[0];
            const newDislikes = statisticsFromUser.dislikes[0];
            const newViews = statisticsFromUser.views[0];
            if (statisticsInArticl === null) {
                statisticsInArticl = {
                    likes: [],
                    dislikes: [],
                    views: []
                };
            }
            const findLike = statisticsInArticl.likes.find(item => item === newLike);
            const findDislike = statisticsInArticl.dislikes.find(item => item === newDislikes);
            const findViews = statisticsInArticl.views.find(item => item === newViews);
            if (!!newLike && !!newDislikes) {
                (!findLike && statisticsInArticl.likes.push(newLike));
                statisticsInArticl.dislikes = statisticsInArticl.dislikes.filter(item => item !== newViews);
                return statisticsInArticl;
            }
            !!newLike ?
                (!findLike && statisticsInArticl.likes.push(newLike)) :
                statisticsInArticl.likes = statisticsInArticl.likes.filter(item => item !== newViews);
            !!newDislikes ?
                (!findDislike && statisticsInArticl.dislikes.push(newDislikes)) :
                statisticsInArticl.dislikes = statisticsInArticl.dislikes.filter(item => item !== newViews);
            !!newViews && !findViews && statisticsInArticl.views.push(newViews);
        }
        return statisticsInArticl;
    }
}
exports.UpdateStatisticsArticle = UpdateStatisticsArticle;
class UpdateArticle extends UpdateStatisticsArticle {
    constructor({ title, auter, article, description, cover, statistics }) {
        super(statistics);
        this.dateLastEdit = {
            state: true,
            date: Date()
        };
        this.title = title;
        this.auter = auter;
        this.article = article;
        this.description = description;
        this.cover = cover;
    }
    addComment(comments) {
        if (comments) {
        }
        else {
            return null;
        }
    }
}
exports.UpdateArticle = UpdateArticle;
class NewArticle extends UpdateArticle {
    constructor({ title, auter, article, description, cover, statistics }) {
        super({ title, auter, article, description, cover, statistics });
        this.articleId = (0, uuid_1.v4)();
        this.datePublication = Date();
        this.dateLastEdit = {
            state: false,
            date: Date(),
        };
    }
}
exports.NewArticle = NewArticle;
//# sourceMappingURL=article-objects.js.map