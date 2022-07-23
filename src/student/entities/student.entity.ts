import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Student {
  // @Field(() => Int, { description: 'Example field (placeholder)' })
  // exampleField: number;
  
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
