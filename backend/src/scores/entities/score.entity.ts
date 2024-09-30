import { Entity, ObjectIdColumn, ObjectId, Column } from 'typeorm';

@Entity()
export class Score {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  inningsId: ObjectId;

  @Column()
  ballNumber: number;

  @Column()
  batsmanId: ObjectId;

  @Column()
  bowlerId: ObjectId;

  @Column()
  runsScored: number;

  @Column()
  extras: {
    wides: number;
    noBalls: number;
    byes: number;
    legByes: number;
  };

  @Column()
  isWicket: boolean;

  @Column({ nullable: true })
  wicketType?: string;

  @Column()
  timestamp: Date;
}