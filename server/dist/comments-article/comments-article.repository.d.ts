import { Model } from "mongoose";
import { TypeCommentArticleDto } from "./dto/comment-article.dto";
import { CreateCommentsArticleDto } from "./dto/comments-article.dto";
import { TypeCreateCommentArticleDto } from "./dto/comments-create-article.dto";
import { CommentsArticle, CommentsArticleDocument } from "./schema/comments-article.schema";
import { TypeUpdateCommentArticleDto } from './dto/comments-update-article.dto';
import { CommentArticle } from "./schema/comment-article.schema";
export declare class CommentsArticleRepository {
    private commentsArticlModel;
    constructor(commentsArticlModel: Model<CommentsArticleDocument>);
    addComments(articleId: string): Promise<CreateCommentsArticleDto | string>;
    addComment(createCommentArticleDto: TypeCreateCommentArticleDto, articleId: string): Promise<CommentArticle | string>;
    getComments(): Promise<CommentsArticle[]>;
    getComment(articleId: string): Promise<TypeCommentArticleDto>;
    changeComment(articleId: string, commentArticleDto: TypeUpdateCommentArticleDto): Promise<TypeCommentArticleDto | string>;
    removeComments(articleId: string): Promise<string>;
    removeComment(articleId: string, commentId: string, userId: string): Promise<any>;
}
