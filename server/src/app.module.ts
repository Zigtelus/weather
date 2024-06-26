// modules 
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

//
import { UserModule } from './user/user.module';
import { ArticleModule } from './article/article.module';
import { CommentsModule } from './comments-article/comments-article.module';

@Module({
  imports: [
    UserModule,
    ArticleModule,
    CommentsModule,
    ConfigModule.forRoot({ 
      envFilePath: [
        '.passwords.env',
        '.env'
      ],
      isGlobal: true
    }),
    MongooseModule.forRoot(`mongodb+srv://${process.env.LOGIN}:${process.env.PASSWORD}@weathercluster.ovjghpi.mongodb.net/`)
    // MongooseModule.forRoot(`mongodb+srv://${process.env.LOGIN}:${process.env.PASSWORD}@cluster0.asqpg.mongodb.net/?retryWrites=true&w=majority`)
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}