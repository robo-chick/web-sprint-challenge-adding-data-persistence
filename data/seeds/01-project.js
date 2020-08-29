exports.seed = function(knex) {
  return knex("project").insert([
    {name: "Project 1", description: "Run for President"}
  ])
}
