import { Injectable } from '@nestjs/common';
import { CreateUserReqDto } from './create-user-req.dto';

@Injectable()
export class AppService {
  // create user data
  create(data: CreateUserReqDto) {
    console.log('serive a - create user', data);
    // return data;
  }
}
