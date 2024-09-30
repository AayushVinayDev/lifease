import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { MatchesService } from './matches.service';
import { Match } from './entities/match.entity';

@Controller('matches')
export class MatchesController {
  constructor(private readonly matchesService: MatchesService) {}

  @Post()
  create(@Body() matchData: Partial<Match>) {
    return this.matchesService.create(matchData);
  }

  @Get()
  findAll() {
    return this.matchesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.matchesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() matchData: Partial<Match>) {
    return this.matchesService.update(id, matchData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.matchesService.remove(id);
  }
}