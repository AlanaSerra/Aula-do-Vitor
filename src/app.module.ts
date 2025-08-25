import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScenarioService } from './modules/scenario/scenario.service';
import { ScenarioModule } from './modules/scenario/scenario.module';

@Module({
  imports: [ScenarioModule],
  controllers: [AppController],
  providers: [AppService, ScenarioService],
})
export class AppModule {}
