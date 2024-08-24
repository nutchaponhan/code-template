import { Controller, Get } from '@nestjs/common';

import { AppService } from '@application/module/app/app.service';

@Controller()
export class AppHealthController {
  constructor(private appService: AppService) {}

  @Get()
  health(): string {
    return 'application good health !!!';
  }
}
