import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { RegisterModule } from './register/register.module';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule, RegisterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
