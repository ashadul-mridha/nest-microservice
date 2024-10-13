import { Controller, Get } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // get hello message
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  // return all users
  @MessagePattern({ cmd: 'get_users' }, { context: 'user' })
  getUsers(@Payload() data: any) {
    // print the passing payload
    console.log('data b', data);

    return this.appService.getUsers();
  }
}
