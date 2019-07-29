import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { Account } from './accounts.entity';
import { FindByIdParams } from 'src/utils/FindByIdParams';

@Controller('accounts')
export class AccountsController {
  constructor(private service: AccountsService) {}

  @Get(':id')
  get(@Param() params: FindByIdParams) {
    return this.service.getAccount(params.id);
  }

  @Put()
  update(@Body() account: Account) {
    return this.service.updateAccount(account);
  }

  @Delete(':id')
  deleteAccount(@Param() params) {
    return this.service.deleteAccount(params.id);
  }
}
