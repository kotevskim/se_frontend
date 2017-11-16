import {Address} from './Address';

export class Student {

  constructor(
    public firstName: string,
    public lastName: string,
    public index: string,
    public studyProgram: string,
    public address: Address
  ) {}
}
