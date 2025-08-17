import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

export class MyLog {
  log(message: string) {
    console.log(`%c${message}`, 'color:blue;');
  }
}

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    /*{
      provide: AppService,
      useClass: AppService, 
    },*/
    {
      provide: 'Log',
      useClass: MyLog,
    },
    {
      provide: 'Print',
      useValue: true,
    },
    {
      provide: 'KindOfPrint',
      useFactory: () => {
        return {
          print: (message: string) => {
            console.log(`%c${message}`, 'color:green; font-weight:bold;');
          },
        };
      },
    },
    {
      provide: 'CanIPrint',
      useFactory: (canIPrint: boolean) => {
        return `Can I Print? ${canIPrint}`;
      },
      inject: ['Print'],
    },
  ],
})
export class AppModule { }
