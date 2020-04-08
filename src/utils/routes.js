const mapUriToComponent = require("../data/mapUriToComponent");

const getComponentFromUri = (uri = "front-page") => {
  try {
    const uriParts = uri.split("/");

    if (!uriParts) {
      console.warn("could not create route from uri", uri);
      return;
    }

    // are the routes private products?
    if (uriParts[0] === "private" && uriParts.length > 1) {
      return mapUriToComponent.privateProduct;
    }

    // are the routes corporate products?
    if (uriParts[0] === "corporate" && uriParts.length > 1) {
      return mapUriToComponent.corporateProduct;
    }

    // are the routes private produkter?
    if (uriParts[0] === "privat" && uriParts.length > 1) {
      return mapUriToComponent.privatProdukt;
    }

    // are the routes bedrift produkter?
    if (uriParts[0] === "bedrift" && uriParts.length > 1) {
      return mapUriToComponent.bedriftProdukt;
    }

    return mapUriToComponent[uriParts[0]];
  } catch (error) {
    console.error("could not map uri to route", error);
  }
};

const createPageData = node => {
  // this page should not be visible
  if (!node.enabled || node.status !== "live") return;

  const createEntryMeta = node => {
    if (!node) return;

    return {
      ...(node.id && { id: node.id }),
      ...(node.uid && { uid: node.uid }),
      ...(node.title && { title: node.title }),
      ...(node.slug && { slug: node.slug }),
      ...(node.dateUpdated && { dateUpdated: node.dateUpdated }),
      ...(node.url && { url: node.url })
    };
  };
  const component = getComponentFromUri(node.uri);

  return {
    path: `/${node.uri}`, // "product/a-corporate-product"
    context: createEntryMeta(node),
    component
  };
};

module.exports = {
  getComponentFromUri,
  createPageData
};
