// Helpers for handling assets for vite: https://vitejs.dev/guide/assets.html#new-url-url-import-meta-url
export function getAssetUrl(relativePath: string) {
  return new URL(`../assets/${relativePath}`, import.meta.url).href;
}

export function getIconUrl(name: string) {
  return getAssetUrl(`icons/${name}.svg`);
}
