const Sequelize = require("sequelize");

/**
 * weather 필드는 추후에 weather API 개발 시 변경될 가능성이 크다.
 */
module.exports = class Board extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        board_id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
          allowNull: false,
        },
        nickname: {
          type: Sequelize.STRING(20),
          allowNull: true,
          unique: false,
        },
        title: {
          type: Sequelize.STRING(20),
          allowNull: false,
          unique: false,
        },
        content: {
          type: Sequelize.STRING(200),
          allowNull: false,
          unique: false,
        },
        password: {
          type: Sequelize.STRING(200),
          allowNull: false,
          unique: false,
        },
        weather: {
          type: Sequelize.STRING(70),
          allowNull: true,
          unique: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "Board",
        tableName: "board",
        paranoid: true,
        charset: "utf8mb4",
        collate: "utf8mb4_unicode_ci",
      }
    );
  }

  static associate(db) {
    db.NoticeBoard.belongsTo(db.User);
  }
};
