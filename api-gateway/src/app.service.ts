import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserReqDto } from './create-user-req.dto';

@Injectable()
export class AppService {
  // user service a client proxy
  constructor(
    @Inject('SERVICE_A') private serviceA: ClientProxy,
    @Inject('SERVICE_B') private serviceB: ClientProxy,
  ) {}

  private readonly users = [];

  // create user method
  createUser(createUserReqDto: CreateUserReqDto) {
    this.users.push(createUserReqDto);
    // send the request to the user service a
    this.serviceA.emit('create_user', createUserReqDto);
    console.log('User created successfully', this.users);

    // console.log(createUserReqDto);
  }

  // get all user method
  getUsers() {
    const users = [{ name: 'Ashadul' }, { name: 'Jane Doe' }];
    // send the request to the user service b and pass payload
    return this.serviceB.send({ cmd: 'get_users' }, { users });
  }
}
