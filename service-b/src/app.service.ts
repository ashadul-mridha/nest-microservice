import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // send hello message
  getHello(): string {
    return 'Hello World! from service b';
  }
  // return all users
  getUsers() {
    return [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
      { id: 3, name: 'Smith' },
    ];
  }
}
