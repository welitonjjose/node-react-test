// models/Loan.ts
import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/database';
import People from './People';
import Book from './Books';

interface LoanAttributes {
  id: number;
  loanDate: Date;
  returnDate: Date;
  peopleId: number;
  bookId: number;
  delayed: Boolean;
}

interface LoanCreationAttributes extends Optional<LoanAttributes, 'id'> { }

class Loan extends Model<LoanAttributes, LoanCreationAttributes> implements LoanAttributes {
  public id!: number;
  public loanDate!: Date;
  public returnDate!: Date;
  public peopleId!: number;
  public bookId!: number;
  public delayed!: boolean;
}

Loan.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  loanDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  returnDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  peopleId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  bookId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  delayed: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
}, {
  sequelize,
  modelName: 'Loan',
});


// Loan.belongsTo(People, {
//   foreignKey: 'peopleId',
//   as: 'person',
// });
// Loan.belongsTo(Book, {
//   foreignKey: 'bookId',
//   as: 'book',
// });

export default Loan;