import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserReqDto } from './create-user-req.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  createuser(@Body() createUserReqDto: CreateUserReqDto) {
    return this.appService.createUser(createUserReqDto);
  }

  // get all user
  @Get('users')
  getUsers() {
    return this.appService.getUsers();
  }
}
