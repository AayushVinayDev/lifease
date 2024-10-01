import { Module } from '@nestjs/common';
import { ScoresController } from './scores.controller';
import { ScoresService } from './scores.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Score } from './entities/score.entity';
import { Innings } from '../matches/entities/innings.entity';
import { Player } from '../players/entities/player.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Score, Innings, Player])],
  controllers: [ScoresController],
  providers: [ScoresService]
})

export class ScoresModule {}