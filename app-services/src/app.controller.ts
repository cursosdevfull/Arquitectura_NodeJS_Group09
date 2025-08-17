import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { MyLog } from './app.module';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, @Inject("Log") private readonly myLog: MyLog, @Inject("Print") private readonly canIPrint: boolean, @Inject("KindOfPrint") private readonly kind: any, @Inject("CanIPrint") private IPrint: string) { }

  @Get()
  getHello(): string {
    this.myLog.log("Hello from AppController!");
    this.myLog.log(`Can I print? ${this.canIPrint}`);
    this.kind.print("This is a custom print message!");
    console.log(this.IPrint)
    return this.appService.getHello();
  }
}
