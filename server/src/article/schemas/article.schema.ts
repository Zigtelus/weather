import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose'
import { StatisticsArticleDto } from '../dtos/statistics-article.dto';
import { DateLastEditArticleDto } from '../dtos/date-last-edit-article.dto';
import { StatisticsArticleSchema } from './statistics-article.schema';


export type ArticleDocument = Article & Document;


@Schema()
export class Article {

  @Prop({required: true})
  readonly articleId: string;

  @Prop({required: true})
  readonly auter: string;

  @Prop({required: true})
  readonly auterId: string;

  @Prop({required: true})
  readonly title: string;
  
  @Prop({required: true})
  readonly article: string;
  
  @Prop({required: true})
  readonly description: string;
  
  @Prop({required: true})
  readonly cover: string;

  @Prop({required: true})
  readonly datePublication: string;

  @Prop({required: true})
  readonly dateLastEdit: DateLastEditArticleDto;
  
  @Prop({required: true, type: StatisticsArticleSchema})
  readonly statistics: StatisticsArticleDto | null;

}




export const ArticleSchema = SchemaFactory.createForClass(Article);