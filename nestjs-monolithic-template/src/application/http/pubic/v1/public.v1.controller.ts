import { match } from 'oxide.ts';

import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { UserSingUpUseCase } from '@usecase/user/user-signup.usecase';

import { UserSignUpDto } from '@core/domain/user/dto/signup/signup.dto';

@Controller({
  path: 'public',
  version: '1',
})
export class PublicV1Controller {
  constructor(private userSingUpUseCase: UserSingUpUseCase) {}

  @Post('signup')
  async signup(@Body() userSignUpDto: UserSignUpDto) {
    const result = await this.userSingUpUseCase.exec(userSignUpDto);
    return match(result, {
      Ok(newUser) {
        return {
          success: true,
          message: 'create new user',
          data: newUser,
        };
      },
      Err(msg) {
        throw new BadRequestException(msg);
      },
    });
  }
}
