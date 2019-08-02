import { Test, TestingModule } from '@nestjs/testing';
import { AccountsService } from './accounts.service';
import { Account } from './accounts.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { AccountsModule } from './accounts.module';
import { Repository } from 'typeorm';

describe('AccountsService', () => {
  let service: AccountsService;
  let repo: Repository<Account>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AccountsModule],
    })
      .overrideProvider(getRepositoryToken(Account))
      .useClass(Repository)
      .compile();

    service = module.get<AccountsService>(AccountsService);
    repo = module.get<Repository<Account>>(getRepositoryToken(Account));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it(`getAccounts`, async () => {
    const result: Account = {
      user_id: 1,
      username: 'janed',
      email: 'a@b.com',
      first_name: 'jane',
      surname: 'doe',
      create_on: new Date(),
      last_login: new Date(),
    };
    jest.spyOn(repo, 'find').mockResolvedValueOnce([result]);
    expect(await service.getAccounts()).toEqual([result]);
  });

  it(`getAccount`, async () => {
    const result: Account = {
      user_id: 1,
      username: 'janed',
      email: 'a@b.com',
      first_name: 'jane',
      surname: 'doe',
      create_on: new Date(),
      last_login: new Date(),
    };
    jest.spyOn(repo, 'find').mockResolvedValueOnce([result]);
    expect(await service.getAccount(1)).toEqual([result]);
  });

  it(`getAccount`, async () => {
    jest.spyOn(repo, 'find').mockResolvedValueOnce([]);
    expect(await service.getAccount(1)).toEqual([]);
  });
});
