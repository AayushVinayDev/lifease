import { Controller, Post, Body } from '@nestjs/common';
import { ScoresService } from './scores.service';
import { Score } from './entities/score.entity';

@Controller('scores')
export class ScoresController {
  constructor(private readonly scoresService: ScoresService) {}

  @Post()
  recordScore(@Body() scoreData: Partial<Score>) {
    return this.scoresService.recordScore(scoreData);
  }
}