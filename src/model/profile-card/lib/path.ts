export const profileCardPathMapping = {
  pathToId: (path: string) => path.match(/\/profile-cards\/(.+)/)?.[1],
  idToPath: (id: string) => `/profile-cards/${id}`,
  indexPath: "/profile-cards",
};
