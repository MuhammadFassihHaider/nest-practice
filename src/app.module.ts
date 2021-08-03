import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CowsController } from './cows/cows.controller';
import { CowsModule } from './cows/cows.module';
import { CowsService } from './cows/cows.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsModule } from './cats/cats.module';
const uri =
  'mongodb+srv://fassih123:fassih123@devconnector.bcnhw.mongodb.net/devConnector';

const connect = async () => {
  try {
    return MongooseModule.forRoot(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    });
  } catch (error) {
    console.log(error);
  }
};

@Module({
  imports: [
    //   TypeOrmModule.forRoot({
    //   type: "mongodb",
    //   database: "devConnector",
    //   username: "fassih123",
    //   password: "fassih123"
    // }),
    connect(),
    CowsModule,
    CatsModule,
  ],
  controllers: [AppController, CowsController],
  providers: [AppService, CowsService],
})
export class AppModule {}
