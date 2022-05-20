(async () => {
    const Planet = require("./models/Planet");

    const deletePlanets = await Planet.findByPk(4);

    console.log(deletePlanets);

    await deletePlanets.destroy();

})();