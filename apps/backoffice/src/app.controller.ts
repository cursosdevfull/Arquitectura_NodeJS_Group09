import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Tokens } from '@cursosdev/utils';


@Controller("api")
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get("generate-access-token")
  getHello(): object {
    return { accessToken: Tokens.generateAccessToken({ name: "Sergio" }, "12345", "10m") }
  }
}
