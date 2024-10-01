import { Entity, ObjectIdColumn, ObjectId, Column } from 'typeorm';

@Entity()
export class Player {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;

  @Column()
  team: string;

  @Column({ default: 0 })
  runsScored: number;

  @Column({ default: 0 })
  ballsFaced: number;

  @Column({ default: 0 })
  runsConceded: number;

  @Column({ default: 0 })
  wicketsTaken: number;

  @Column({ default: 0 })
  ballsBowled: number;

  @Column()
  role: 'batsman' | 'bowler' | 'all-rounder';
}
