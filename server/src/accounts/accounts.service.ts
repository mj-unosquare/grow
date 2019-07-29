import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Account } from './accounts.entity';

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(Account) private accountsRepository: Repository<Account>,
  ) {}

  async getAccounts(): Promise<Account[]> {
    return await this.accountsRepository.find();
  }

  async getAccount(id: number): Promise<Account[]> {
    return await this.accountsRepository.find({
      where: [{ user_id: id }],
    });
  }

  async updateAccount(account: Account) {
    this.accountsRepository.save(account);
  }

  async deleteAccount(account: Account) {
    this.accountsRepository.delete(account);
  }
}
