const cars = [
  {
    vin: "JN1CV6EL1BM261706",
    make: "honda",
    model: "civic",
    mileage: 30000,
    title: "clean",
    transmission: "manual",
  },
  {
    vin: "1FAHP33N48W139067",
    make: "honda",
    model: "prelude",
    mileage: 70000,
    title: "salvage",
    transmission: "manual",
  },
  {
    vin: "1G8AJ52FX4Z101610",
    make: "honda",
    model: "accord",
    mileage: 85000,
    title: "clean",
    transmission: "automatic",
  },
];

exports.seed = async function (knex) {
  await knex("cars").truncate();
  await knex("cars").insert(cars);
};
