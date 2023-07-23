// Helper for handling assets for vite: https://vitejs.dev/guide/assets.html#new-url-url-import-meta-url
export function handleAssetsAsUrl(url: string) {
  return new URL(`../${url}`, import.meta.url).href;
}
