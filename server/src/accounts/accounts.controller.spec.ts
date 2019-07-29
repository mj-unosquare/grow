import { Test, TestingModule } from '@nestjs/testing';
import { AccountsModule } from './accounts.module';
import { AccountsController } from './accounts.controller';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Account } from './accounts.entity';
import { Repository } from 'typeorm';
import { AccountsService } from './accounts.service';

describe('Accounts Controller', () => {
  let controller: AccountsController;
  let service: AccountsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AccountsModule],
    })
      .overrideProvider(getRepositoryToken(Account))
      .useClass(Repository)
      .compile();

    controller = module.get<AccountsController>(AccountsController);
    service = module.get<AccountsService>(AccountsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it(`get /accounts/:id`, async () => {
    const result: Account = {
      user_id: 1,
      username: 'janed',
      email: 'a@b.com',
      first_name: 'jane',
      surname: 'doe',
      create_on: new Date(),
      last_login: new Date(),
    };
    jest.spyOn(service, 'getAccount').mockResolvedValueOnce([result]);
    expect(await controller.get(1)).toEqual([result]);
  });

  it(`get /accounts/:id - invalid id`, async () => {
    jest.spyOn(service, 'getAccount').mockResolvedValueOnce([]);
    expect(await controller.get(1)).toEqual([]);
  });
});
