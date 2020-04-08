const routes = require("../utils/routes");
const mapUriToComponent = require("../data/mapUriToComponent");

test("front-page uri show Index route", () => {
  const uri = "front-page";
  expect(routes.getComponentFromUri(uri)).toBe(mapUriToComponent[uri]);
});

test("private uri shows Private route", () => {
  const uri = "private";
  expect(routes.getComponentFromUri(uri)).toBe(mapUriToComponent[uri]);
});

test("private product uri shows PrivateProduct route", () => {
  const uri = "private/the-alps";
  expect(routes.getComponentFromUri(uri)).toBe(
    mapUriToComponent["privateProduct"]
  );
});

test("stories uri shows a Stories route", () => {
  expect(routes.getComponentFromUri("stories")).toBe(mapUriToComponent.stories);
});

test("story uri shows a StoriesStory route", () => {
  expect(
    routes.getComponentFromUri("story/celina-midelfart-is-having-a-party")
  ).toBe(mapUriToComponent.story);
});

test("corporate product uri shows Corporate route", () => {
  expect(routes.getComponentFromUri("corporate/balbalbal")).toBe(
    mapUriToComponent["corporateProduct"]
  );
});
