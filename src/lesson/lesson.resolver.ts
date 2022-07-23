import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LessonService } from './lesson.service';
import { Lesson } from './entities/lesson.entity';
import { CreateLessonInput } from './dto/create-lesson.input';
import { UpdateLessonInput } from './dto/update-lesson.input';

@Resolver(() => Lesson)
export class LessonResolver {
  constructor(private readonly lessonService: LessonService) {}

  @Mutation(() => Lesson)
  createLesson(
    //@Args('createLessonInput') createLessonInput: CreateLessonInput,
    @Args('name') name: string,
    @Args('startDate') startDate: string,
    @Args('endDate') endDate: string
  ): Promise<Lesson> {
    return this.lessonService.create(name, startDate, endDate);
  }

  @Query(() => Lesson, { name: 'lesson' })
  lesson() {
    return {
      id: 'd3ddddd',
      name: 'david',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    };
  }

  // @Query(() => [Lesson], { name: 'lesson' })
  // findAll() {
  //   return this.lessonService.findAll();
  // }

  @Query(() => Lesson, { name: 'lesson' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.lessonService.findOne(id);
  }

  @Mutation(() => Lesson)
  updateLesson(
    @Args('updateLessonInput') updateLessonInput: UpdateLessonInput,
  ) {
    return this.lessonService.update(updateLessonInput.id, updateLessonInput);
  }

  @Mutation(() => Lesson)
  removeLesson(@Args('id', { type: () => Int }) id: number) {
    return this.lessonService.remove(id);
  }
}
