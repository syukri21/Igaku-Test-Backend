import { Injectable } from '@nestjs/common';

@Injectable()
export class TodosService {
  getTodos() {
    return [
      {
        tasks: 'nama',
        active: false,
      },
      {
        tasks: 'saya',
        active: false,
      },
    ];
  }
}
