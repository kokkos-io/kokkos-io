const routes = require("../utils/routes");
const mapUriToComponent = require("../data/mapUriToComponent");

test("front-page uri show Index route", () => {
  const uri = "front-page";
  expect(routes.getComponentFromUri(uri)).toBe(mapUriToComponent[uri]);
});

test("privat uri shows Private route", () => {
  const uri = "privat";
  expect(routes.getComponentFromUri(uri)).toBe(mapUriToComponent[uri]);
});

test("privat produkt uri shows PrivateProduct route", () => {
  const uri = "privat/tur-til-alpene";
  expect(routes.getComponentFromUri(uri)).toBe(
    mapUriToComponent["privatProdukt"]
  );
});

test("historier uri shows a Stories route", () => {
  expect(routes.getComponentFromUri("historier")).toBe(
    mapUriToComponent.historier
  );
});

test("historie uri shows a StoriesStory route", () => {
  expect(
    routes.getComponentFromUri("historie/celina-midelfart-har-en-fest")
  ).toBe(mapUriToComponent.historie);
});

test("bedrift uri shows Corporate route", () => {
  expect(routes.getComponentFromUri("bedrift")).toBe(
    mapUriToComponent["bedrift"]
  );
});

test("bedrift product uri shows Corporate route", () => {
  expect(routes.getComponentFromUri("bedriftProdukt")).toBe(
    mapUriToComponent["bedriftProdukt"]
  );
});
