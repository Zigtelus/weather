import { CommentsArticleRepository } from './comments-article.repository';
import { TypeCommentArticleDto } from './dto/comment-article.dto';
import { CreateCommentsArticleDto } from './dto/comments-article.dto';
import { TypeCreateCommentArticleDto } from './dto/comments-create-article.dto';
import { TypeUpdateCommentArticleDto } from './dto/comments-update-article.dto';
import { CommentArticle } from './schema/comment-article.schema';
import { CommentsArticle } from './schema/comments-article.schema';
export declare class CommentsArticleService {
    readonly commentsArticleRepository: CommentsArticleRepository;
    constructor(commentsArticleRepository: CommentsArticleRepository);
    addComments(articleId: string): Promise<CreateCommentsArticleDto | string>;
    addComment(createCommentArticleDto: TypeCreateCommentArticleDto, articleId: string): Promise<CommentArticle | string>;
    getComments(): Promise<CommentsArticle[]>;
    getComment(articleId: string): Promise<TypeCommentArticleDto>;
    changeComment(articleId: string, commentArticleDto: TypeUpdateCommentArticleDto): Promise<TypeCommentArticleDto | string>;
    removeComments(articleId: string): Promise<string>;
    removeComment(articleId: string, commentId: string, userId: string): Promise<string>;
}
