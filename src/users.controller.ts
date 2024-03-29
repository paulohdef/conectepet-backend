import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { Users } from './users.model';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async obterTodos(): Promise<Users[]> {
    return this.usersService.obterTodos();
  }

  @Get(':id')
  async obterUm(@Param() params): Promise<Users> {
    return this.usersService.obterUm(params.id);
  }

  @Get('tutores/:id')
  async obterUmPet(@Param('id') params): Promise<Users> {
    return this.usersService.obterPets(params);
  }

  @Post()
  async criar(@Body() user: Users) {
    this.usersService.criar(user);
  }

  @Post(':pets')
  async atribuirPetToUser(@Body() ids: any) {
    this.usersService.atribuiPetToUser(ids);
  }

  @Put()
  async alterar(@Body() user: Users): Promise<[number, Users[]]> {
    return this.usersService.alterar(user);
  }

  @Delete(':id')
  async apagar(@Param() params) {
    this.usersService.apagar(params.id);
  }
}
