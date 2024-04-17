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
    return this.testRepository.findOneBy({id});
  }

  async update(id: number, updateTestDto: UpdateTestDto) {
    const post: Test = await this.testRepository.findOneBy({id});
    post.title = updateTestDto.title;
    post.text = updateTestDto.text;
    return this.testRepository.save(post);
  }

  async remove(id: number) {
    const post: Test = await this.testRepository.findOneBy({id})
    return await this.testRepository.remove(post);
  }
}
