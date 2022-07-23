import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLessonInput } from './dto/create-lesson.input';
import { UpdateLessonInput } from './dto/update-lesson.input';
import { Lesson } from './entities/lesson.entity';

@Injectable()
export class LessonService {
  constructor( 
    @InjectRepository(Lesson)
    private lessonRepository: Repository<Lesson>
  ){

  }
  async create(createLessonInput: CreateLessonInput): Promise<Lesson> {
    const { name, startDate, endDate} = createLessonInput;
    const lesson = await this.lessonRepository.create({
      name,
      startDate,
      endDate
    });

    await this.lessonRepository.save(lesson);

    return lesson;
  }

  findAll() {
    return `This action returns all lesson`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lesson`;
  }

  update(id: number, updateLessonInput: UpdateLessonInput) {
    return `This action updates a #${id} lesson`;
  }

  remove(id: number) {
    return `This action removes a #${id} lesson`;
  }
}
