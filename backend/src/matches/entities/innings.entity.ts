import { Entity, ObjectIdColumn, ObjectId, Column } from 'typeorm';

@Entity()
export class Innings {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  matchId: ObjectId;

  @Column()
  battingTeam: string;

  @Column()
  bowlingTeam: string;

  @Column()
  totalRuns: number;

  @Column()
  wickets: number;

  @Column()
  overs: number;
}