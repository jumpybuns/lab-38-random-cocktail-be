const pool = require('../utils/pool');

module.exports = class Cocktail {
  name;
  glass;
  recipe;
  ingredient1;
  ingredient2;
  ingredient3;
  ingredient4;
  measure1;
  measure2;
  measure3;
  measure4;

  constructor(row) {
    this.name = row.name;
    this.glass = row.glass;
    this.recipe = row.recipe;
    this.ingredient1 = row.ingredient1;
    this.ingredient2 = row.ingredient2;
    this.ingredient3 = row.ingredient3;
    this.ingredient4 = row.ingredient4;
    this.measure1 = row.measure1;
    this.measure2 = row.measure2;
    this.measure3 = row.measure3;
    this.measure4 = row.measure4;
  }

  static async insert({
    name,
    glass,
    recipe,
    ingredient1,
    ingredient2,
    ingredient3,
    ingredient4,
    measure1,
    measure2,
    measure3,
    measure4,
  }) {
    const {
      rows,
    } = await pool.query(
      'INSERT INTO cocktails ( name, glass, recipe, ingredient1, ingredient2, ingredient3, ingredient4, measure1, measure2, measure3, measure4) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *',
      [
        name,
        glass,
        recipe,
        ingredient1,
        ingredient2,
        ingredient3,
        ingredient4,
        measure1,
        measure2,
        measure3,
        measure4,
      ]
    );

    if (!rows[0]) throw new Error('Cocktail was not uploaded due to an error');
    else return new Cocktail(rows[0]);
  }

  static async find() {
    const { rows } = await pool.query('SELECT * FROM cocktails');

    if (!rows[0]) throw new Error('Could not find the cocktails');
    else return rows.map((row) => new Cocktail(row));
  }

  static async delete(id) {
    const {
      rows,
    } = await pool.query('DELETE FROM cocktails WHERE id=$1 RETURNING *', [id]);
    if (!rows[0]) throw new Error(`Could not delete cocktail ${id}`);
    return new Cocktail(rows[0]);
  }
};
