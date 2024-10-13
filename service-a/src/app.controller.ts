import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { CreateUserReqDto } from './create-user-req.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // receive user create data from client
  @EventPattern('create_user')
  async create(data: CreateUserReqDto) {
    return this.appService.create(data);
  }
}
