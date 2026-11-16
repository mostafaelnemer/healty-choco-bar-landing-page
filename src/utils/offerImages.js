const loaders = {
  'five-bars': () => import('../assets/choclolate2.jpeg'),
};

const cache = new Map();

export function loadOfferImage(offerId) {
  const load = loaders[offerId];
  if (!load) return Promise.resolve(null);
  if (!cache.has(offerId)) {
    cache.set(offerId, load().then((m) => m.default));
  }
  return cache.get(offerId);
}
