import { Controller } from '@nestjs/common';

@Controller({
  path: 'public',
  version: '1',
})
export class PublicV1Controller {
  constructor() {}

  async get(): Promise<string> {
    return 'this is public v1 route';
  }
}
