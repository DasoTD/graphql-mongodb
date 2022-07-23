import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateLessonInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;

  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  @IsNotEmpty()
  startDate: string

  @IsString()
  @IsNotEmpty()
  endDate: string
}
