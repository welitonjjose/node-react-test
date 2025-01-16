import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database'; // Adjust the path as necessary

class Book extends Model {
  public id!: number;
  public title!: string;
  public author!: string;
  public isbn!: string;
  public ref!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Book.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isbn: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ref: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'books',
  }
);

export default Book;