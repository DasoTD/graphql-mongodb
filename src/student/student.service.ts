import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentInput } from './dto/create-student.input';
import { UpdateStudentInput } from './dto/update-student.input';
import { Student } from './entities/student.entity';
import { v4 as uuid} from 'uuid';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>
  ){}
  async create(createStudentInput: CreateStudentInput): Promise<Student> {
    const { firstName, lastName} = createStudentInput;

    const student =  this.studentRepository.create({
      id: uuid(),
      firstName,
      lastName
    });
    await this.studentRepository.save(student);
    return student; //  'This action adds a new student';
  }

  getStudents() {
    return this.studentRepository.find();// `This action returns all student`;
  }

  async getStudent(id: string): Promise<Student> {
    return await this.studentRepository.findOne({ 
      where: {
        id
      }
    }) ;// `This action returns a #${id} student`;
  }

  update(id: number, updateStudentInput: UpdateStudentInput) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
