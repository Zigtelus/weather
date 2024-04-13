"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatisticsArticleSchema = exports.StatisticsArticle = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let StatisticsArticle = class StatisticsArticle {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Array)
], StatisticsArticle.prototype, "likes", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Array)
], StatisticsArticle.prototype, "dislikes", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Array)
], StatisticsArticle.prototype, "views", void 0);
StatisticsArticle = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], StatisticsArticle);
exports.StatisticsArticle = StatisticsArticle;
exports.StatisticsArticleSchema = mongoose_1.SchemaFactory.createForClass(StatisticsArticle);
//# sourceMappingURL=statistics-article.schema.js.map