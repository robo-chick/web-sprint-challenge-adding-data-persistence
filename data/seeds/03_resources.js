exports.seed = async function (knex) {
	await knex("resources").then(function () {
		return knex("resources").insert([
			{ name: "laptop", description: "the thing with keys for hacking" },
			{ name: "land", description: "large space, usually with grass and trees" },
			{ name: "money", description: "it's green and you can't get stuff without it"},
			{ name: "tigers", description: "really big cats with stripes" },
		]);
	});
};