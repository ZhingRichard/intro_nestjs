import { Injectable } from '@nestjs/common';
// import { UserEntity } from './entity/user.entity';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  calMe(){
    return 'Hello Zhing'
  }

  student(){
    const myStudents={
      software:{
        name: 'Zhing',
        job: 'Software Engineer'
      },

      backend:{
        name: 'Airnoh',
        job: 'Backend engineer'
      },

      frontend:{
        name: 'Mark',
        job: 'Frontend Dev'
      },
    }

    return myStudents;
  }
}
