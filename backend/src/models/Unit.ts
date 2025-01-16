import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import Book from './Books';

class Unit extends Model {
  public id!: number;
  public book_id!: number;
  public ref!: string;

  // Timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Unit.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    book_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Books',
        key: 'id',
      },
    },
    ref: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'units',
  }
);

Unit.belongsTo(Book, {
  foreignKey: 'book_id',
  as: 'book',
});

export default Unit;