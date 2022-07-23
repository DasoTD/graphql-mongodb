import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLessonInput } from './dto/create-lesson.input';
import { UpdateLessonInput } from './dto/update-lesson.input';
import { Lesson } from './entities/lesson.entity';
import {v4 as uuid} from 'uuid'

@Injectable()
export class LessonService {
  constructor( 
    @InjectRepository(Lesson)
    private lessonRepository: Repository<Lesson>
  ){

  }
  async create(name, startDate, endDate): Promise<Lesson> {
    //const { name, startDate, endDate} = createLessonInput;
    const lesson =  this.lessonRepository.create({
      id: uuid(),
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

  async findOne(id: string) {
    const lesson = await this.lessonRepository.findOne({
      where: {
        id
      }
    })
    if(lesson){
      return lesson
    } else {
    return `This action returns a #${id} lesson`;
    }
  }

  update(id: number, updateLessonInput: UpdateLessonInput) {
    return `This action updates a #${id} lesson`;
  }

  remove(id: number) {
    return `This action removes a #${id} lesson`;
  }
}
