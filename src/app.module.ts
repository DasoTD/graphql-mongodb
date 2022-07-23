import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { LessonModule } from './lesson/lesson.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './lesson/entities/lesson.entity';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: true,
      driver: ApolloDriver,
    }),
    LessonModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://david:david@cluster0.ibktv.mongodb.net/?retryWrites=true&w=majority',
      synchronize: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      entities: [ Lesson]
    })
  ],
  controllers: [], //codeFirst
  providers: [],
})
export class AppModule {}
