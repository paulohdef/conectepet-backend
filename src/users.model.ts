import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript';
import { Pets } from './pets.model';
import { PetsUsers } from './petsUsers.model';

//extender da classe model faz ganhar automaticamente a coluna id

@Table
export class Users extends Model<Users> {

  @Column({
    type: DataType.STRING(60),
    allowNull: false,
  })
  nome: string;

  @Column({
    type: DataType.STRING(60),
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING(60),
    allowNull: false,
  })
  celular: string;

  @Column({
    type: DataType.STRING(60),
    allowNull: false,
  })
  dataNascimento: string;

  @Column({
    type: DataType.STRING(60),
    allowNull: false,
  })
  cep: string;

  @Column({
    type: DataType.STRING(60),
    allowNull: false,
  })
  password: string;

  @BelongsToMany(() => Pets, () => PetsUsers )
  pets: Pets[];
}
