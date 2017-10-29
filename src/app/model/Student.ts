import {Address} from './Address';

export class Student {

  constructor(
    public firstName: string,
    public lastName: string,
    public index: number,
    public studyProgram: string,
    public address: Address
  ) {}
}
