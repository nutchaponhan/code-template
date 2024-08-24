import { Controller } from '@nestjs/common';

@Controller({
  path: 'admin',
  version: '1',
})
export class AdminV1Controller {
  constructor() {}
  async get(): Promise<{ message: string }> {
    return {
      message: 'this is admin v1 route',
    };
  }
}
