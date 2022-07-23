import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, Entity, ObjectIdColumn, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType('Lesson')
@Entity()
export class Lesson {
  // @Field(() => Int, { description: 'Example field (placeholder)' })
  // exampleField: number;

  @Field(type => ID)

  @ObjectIdColumn()
  _id: string
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  startDate: string;

  @Field()
  @Column()
  endDate: string;
}
