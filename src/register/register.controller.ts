import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { RegisterService } from './register.service';
import { CreateRegisterDto } from './dto/create-register.dto';
import { UpdateRegisterDto } from './dto/update-register.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Register } from './entities/register.entity';

@ApiTags('Register')
@Controller('register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @ApiResponse({status: 201, description: 'User registration successful', type: Register})
  @ApiResponse({status: 400, description: 'Email exists'})
  @Post()
  create(@Body() createRegisterDto: CreateRegisterDto) {
    return this.registerService.create(createRegisterDto);
  }

  @Get('email-exists')
  existingEmail(@Query('email')email: string) {
    return this.registerService.existingEmail(email);
  }

  @Get()
  findAll() {
    return this.registerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.registerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegisterDto: UpdateRegisterDto) {
    return this.registerService.update(+id, updateRegisterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.registerService.remove(+id);
  }
}
