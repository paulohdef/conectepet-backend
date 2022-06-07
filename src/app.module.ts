import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users.controller';
import { Users } from './users.model';
import { UsersService } from './users.service';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'us-cdbr-east-05.cleardb.net',
      port: 3306,
      username: 'bb79d3af9866fc',
      password: '9ce1de37',
      database: 'heroku_e96ad73dc3fc9ca',
      autoLoadModels: true, //reconhece automaticamente os modelos do projeto (SequelizeModule.forFeature([modelos]))
      synchronize: true,    //quando subir a aplicação, importa automaticamente os modulos(em forFeature) e sincroniza com o banco de dados
    }),
    SequelizeModule.forFeature([Users]),
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
//mysql://bb79d3af9866fc:9ce1de37@us-cdbr-east-05.cleardb.net/heroku_e96ad73dc3fc9ca?reconnect=true
