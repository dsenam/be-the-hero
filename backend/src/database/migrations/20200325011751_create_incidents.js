exports.up = function(knex) {
  return knex.schema.createTable("incidents", function(table) {
    //PK
    table.increments();

    //campos da tabela
    table.string("title").notNullable;
    table.string("description").notNullable();
    table.decimal("value").notNullable();

    //relacionamento
    table.string("ong_id").notNullable();
    //chave estrangeira (ong_id vai referenciar ID na tabela ongs)
    table
      .foreign("ong_id")
      .references("id")
      .inTable("ongs");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("incidents");
};
