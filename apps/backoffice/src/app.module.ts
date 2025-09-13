import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './courses/course.module';
import { TeacherModule } from './teachers/teacher.module';
import { ScheduleModule } from './schedules/schedule.module';
import { SessionsModule } from './sessions/sessions.module';

@Module({
  imports: [CourseModule, TeacherModule, ScheduleModule, SessionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
