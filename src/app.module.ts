import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [TasksModule,
    MongooseModule.forRoot(process.env.URI)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
