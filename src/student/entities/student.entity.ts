import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Student {
  // @Field(() => Int, { description: 'Example field (placeholder)' })
  // exampleField: number;
  @Field(type => ID)
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  @Column()
  @Field()
  id: string

  @Column()
  @Field()
  firstName: string;

  @Column()
  @Field()
  lastName: string;
}
