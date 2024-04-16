import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestModule } from './test/test.module';
import { Test } from './test/entities/test.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'dpg-cofehguv3ddc739hfe6g-a.frankfurt-postgres.render.com',
      port: 5432,
      username: 'database_1_oud4_user',
      password: 'Bo8IlQY4dfmedszd0NbYGtBIvVY3jtz0',
      database: 'database_1_oud4',
        ssl: true,
      entities: [Test],
      synchronize: true,
    }),
    TestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
