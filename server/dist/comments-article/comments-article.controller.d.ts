import { CommentsArticleService } from './comments-article.service';
import { TypeCommentArticleDto } from './dto/comment-article.dto';
import { CreateCommentsArticleDto } from './dto/comments-article.dto';
import { TypeCreateCommentArticleDto } from './dto/comments-create-article.dto';
import { TypeUpdateCommentArticleDto } from './dto/comments-update-article.dto';
import { CommentArticle } from './schema/comment-article.schema';
import { CommentsArticle } from './schema/comments-article.schema';
export declare class CommentsArticleController {
    private readonly commentsArticleService;
    constructor(commentsArticleService: CommentsArticleService);
    addComments(articleId: string): Promise<CreateCommentsArticleDto | string>;
    addComment(createCommentArticle: TypeCreateCommentArticleDto, articleId: string): Promise<CommentArticle | string>;
    getComments(): Promise<CommentsArticle[]>;
    getComment(articleId: string): Promise<TypeCommentArticleDto>;
    changeComment(articleId: string, commentArticleDto: TypeUpdateCommentArticleDto): Promise<TypeCommentArticleDto | string>;
    removeComments(articleId: string): Promise<string>;
    removeComment(articleId: string, commentId: string, userId: string): Promise<string>;
}
