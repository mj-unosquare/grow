import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Record } from './records.entity';
@Injectable()
export class RecordsService {
  constructor(
    @InjectRepository(Record) private recordsRepository: Repository<Record>,
  ) {}

  async getRecords(): Promise<Record[]> {
    return await this.recordsRepository.find();
  }

  async getRecord(id: number): Promise<Record[]> {
    return await this.recordsRepository.find({
      where: [{ plant_record_id: id }],
    });
  }

  async getRecordByDate(
    plant_id: number,
    tracker_id: number,
    record_date: Date,
  ) {
    return await this.recordsRepository.find({
      where: [{ plant_id, tracker_id, record_date }],
    });
  }

  async createRecord(record: Record): Promise<Record> {
    return await this.recordsRepository.save(record);
  }

  async updateRecord(record: Record): Promise<UpdateResult> {
    return await this.recordsRepository.update(record.plant_record_id, record);
  }
}
