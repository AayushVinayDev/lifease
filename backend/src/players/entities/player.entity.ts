import { Entity, ObjectIdColumn, ObjectId, Column } from 'typeorm';

@Entity()
export class Player {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;

  @Column()
  team: string;

  @Column()
  role: 'batsman' | 'bowler' | 'all-rounder';
}