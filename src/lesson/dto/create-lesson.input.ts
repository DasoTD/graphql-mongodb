import { InputType, Int, Field } from '@nestjs/graphql';
import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateLessonInput {
  // @Field(() => Int, { description: 'Example field (placeholder)' })
  // exampleField: number;

  @IsString()
  @IsNotEmpty()
  @Field()
  name: string;

  @IsDateString()
  @Field()
  startDate: string;

  @IsDateString()
  @IsNotEmpty()
  @Field()
  endDate: string;
}
