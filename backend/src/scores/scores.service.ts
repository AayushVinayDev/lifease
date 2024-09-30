import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Score } from './entities/score.entity';
import { Innings } from '../matches/entities/innings.entity';
import { Player } from '../players/entities/player.entity';

@Injectable()
export class ScoresService {
  constructor(
    @InjectRepository(Score)
    private scoreRepository: Repository<Score>,
    @InjectRepository(Innings)
    private inningsRepository: Repository<Innings>,
    @InjectRepository(Player)
    private playerRepository: Repository<Player>,
  ) {}

  async recordScore(scoreData: Partial<Score>): Promise<Score> {
    const score = this.scoreRepository.create(scoreData);
    await this.scoreRepository.save(score);

    // Update innings
    await this.updateInnings(score);

    // Update player stats
    await this.updatePlayerStats(score);

    return score;
  }

  private async updateInnings(score: Score): Promise<void> {
    const innings = await this.inningsRepository.findOne(score.inningsId);
    innings.totalRuns += score.runsScored + this.calculateExtras(score.extras);
    innings.wickets += score.isWicket ? 1 : 0;
    innings.overs = this.calculateOvers(innings.overs, score);
    await this.inningsRepository.save(innings);
  }

  private async updatePlayerStats(score: Score): Promise<void> {
    // Update batsman stats
    const batsman = await this.playerRepository.findOne(score.batsmanId);
    batsman.runsScored += score.runsScored;
    batsman.ballsFaced += 1;
    await this.playerRepository.save(batsman);

    // Update bowler stats
    const bowler = await this.playerRepository.findOne(score.bowlerId);
    bowler.runsConceded += score.runsScored + this.calculateExtras(score.extras);
    bowler.wicketsTaken += score.isWicket ? 1 : 0;
    bowler.ballsBowled += 1;
    await this.playerRepository.save(bowler);
  }

  private calculateExtras(extras: Score['extras']): number {
    return extras.wides + extras.noBalls + extras.byes + extras.legByes;
  }

  private calculateOvers(currentOvers: number, score: Score): number {
    const isLegalDelivery = !score.extras.wides && !score.extras.noBalls;
    if (isLegalDelivery) {
      const fullOvers = Math.floor(currentOvers);
      const balls = (currentOvers - fullOvers) * 10 + 1;
      if (balls === 6) {
        return fullOvers + 1;
      } else {
        return fullOvers + balls / 10;
      }
    }
    return currentOvers;
  }
}