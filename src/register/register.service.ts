import { BadRequestException, HttpCode, HttpStatus, Injectable } from '@nestjs/common';
import { CreateRegisterDto } from './dto/create-register.dto';
import { UpdateRegisterDto } from './dto/update-register.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Register } from './entities/register.entity';
import { DataSource, Repository } from 'typeorm';
import { handleError } from 'src/common/exceptions/exception-handler';

@Injectable()
export class RegisterService {

  constructor(
    @InjectRepository(Register)
    private readonly registerRepository: Repository<Register>,
    //private readonly datasource: DataSource
  ) { }

  @HttpCode(HttpStatus.CREATED)
  async create(createRegisterDto: CreateRegisterDto) {

    const { email } = createRegisterDto;
    await this.existingEmail(email);

    try {
      const register = this.registerRepository.create(createRegisterDto);
      await this.registerRepository.save(register);
      return {};

    } catch (error) {
      handleError(error);
    }
  }

  async existingEmail(email: string) {
    try {
      const existingEmail = await this.registerRepository.findOne({ where: { email } });
      if (existingEmail) throw new BadRequestException('Email ya registrado');
    } catch (error) {
      handleError(error);
    }
  }

  findAll() {
    return `This action returns all register`;
  }

  findOne(id: number) {
    return `This action returns a #${id} register`;
  }

  update(id: number, updateRegisterDto: UpdateRegisterDto) {
    return `This action updates a #${id} register`;
  }

  remove(id: number) {
    return `This action removes a #${id} register`;
  }
}
