import { Entity, ObjectIdColumn, ObjectId, Column } from 'typeorm';

@Entity()
export class Match {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  teamA: string;

  @Column()
  teamB: string;

  @Column()
  date: Date;

  @Column()
  venue: string;

  @Column()
  status: 'upcoming' | 'ongoing' | 'completed';
}