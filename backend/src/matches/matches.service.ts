import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Match } from './entities/match.entity';

@Injectable()
export class MatchesService {
  constructor(
    @InjectRepository(Match)
    private matchRepository: Repository<Match>,
  ) {}

  async create(matchData: Partial<Match>): Promise<Match> {
    const match = this.matchRepository.create(matchData);
    return await this.matchRepository.save(match);
  }

  async findAll(): Promise<Match[]> {
    return await this.matchRepository.find();
  }

  async findOne(id: string): Promise<Match> {
    return await this.matchRepository.findOne(id);
  }

  async update(id: string, matchData: Partial<Match>): Promise<Match> {
    await this.matchRepository.update(id, matchData);
    return await this.matchRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.matchRepository.delete(id);
  }
}
