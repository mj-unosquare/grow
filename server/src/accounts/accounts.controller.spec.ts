import { Test, TestingModule } from '@nestjs/testing';
import { AccountsModule } from './accounts.module';
import { AccountsController } from './accounts.controller';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Account } from './accounts.entity';
import { Repository } from 'typeorm';

describe('Accounts Controller', () => {
  let controller: AccountsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AccountsModule],
    })
      .overrideProvider(getRepositoryToken(Account))
      .useClass(Repository)
      .compile();

    controller = module.get<AccountsController>(AccountsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
