import { Controller } from '@nestjs/common';

@Controller({
  path: 'user',
  version: '1',
})
export class UserV1Controller {
  constructor() {}
  async get(): Promise<{ message: string }> {
    return {
      message: 'this is user v1 route',
    };
  }

  async signUp(): Promise<any> {}

  async signIn(): Promise<any> {}

  async signOut(): Promise<any> {}
}
