import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import Loan from './Loan';
import Book from './Books';

class People extends Model {
  public id!: number;
  public name!: string;
  public cpf!: string;
  public birthDate!: Date;
  public street!: string;
  public district!: string;
  public city!: string;
  public state!: string;
  public number!: string;
  public cep!: string;
}

People.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  birthDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  street: {
    type: DataTypes.STRING,
    allowNull: false
  },
  number: {
    type: DataTypes.STRING,
    allowNull: false
  },
  district: {
    type: DataTypes.STRING,
    allowNull: false
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cep: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'people'
});

People.hasMany(Loan, {
  foreignKey: 'peopleId',
  as: 'loans',
});


export default People;