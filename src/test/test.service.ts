import { Injectable } from '@nestjs/common';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Test } from './entities/test.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TestService {

  constructor(
    @InjectRepository(Test)
    private testRepository: Repository<Test>
  ) {}

  create(createTestDto: CreateTestDto) {
    const newPost = new Test();
    newPost.title = createTestDto.title;
    newPost.text = createTestDto.text;
    return this.testRepository.save(newPost);
  }

  findAll() {
    return this.testRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} test`;
  }

  update(id: number, updateTestDto: UpdateTestDto) {
    return `This action updates a #${id} test`;
  }

  remove(id: number) {
    return `This action removes a #${id} test`;
  }
}
