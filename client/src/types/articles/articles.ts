




export interface Article {
  articleId: string;
  auter: string;
  title: string;
  article: string;
  description: string;
  cover: string;
  statistics: StatisticsArticle;
  dateLastEdit: DateLastEditArticle;
  datePublication: string;
};

export interface StatisticsArticle {
  readonly likes: string[];
  readonly dislikes: string[];
  readonly views: string[];
}

export interface DateLastEditArticle {
  readonly state: boolean;
  readonly date: string;
}

export interface CommentArticle {
  readonly commentId: string;
  readonly articleId: string;
  readonly auterId: string;
  readonly text: string;
  readonly likes: string[];
  readonly dislikes: string[];
  readonly dateCreation: string;
  readonly dateLastEdit: DateLastEditComment;
}

export interface DateLastEditComment {
  readonly state: boolean;
  readonly date: string;
}