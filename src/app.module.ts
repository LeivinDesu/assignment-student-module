import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateModule } from './create/create.module';
import { ReadModule } from './read/read.module';
import { UpdateModule } from './update/update.module';
import { DeleteModule } from './delete/delete.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "",
      database: "itec116",
      entities: [__dirname + '/**/*.entity{.ts, .ts}'],
      autoLoadEntities: true,
      synchronize: false

    }),
    CreateModule,
    ReadModule,
    UpdateModule,
    DeleteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
