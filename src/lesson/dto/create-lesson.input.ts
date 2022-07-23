import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateLessonInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;

  @IsString()
  @IsNotEmpty()
  @Field()
  name: string

  @IsString()
  @IsNotEmpty()
  @Field()
  startDate: string

  @IsString()
  @IsNotEmpty()
  @Field()
  endDate: string
}
