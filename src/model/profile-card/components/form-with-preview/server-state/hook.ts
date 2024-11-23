import { getProfileCard } from "../query";

export const useProfileCardServerState = (id: string) => {
  // TanstackやURQLなど、キャッシュの更新機能があるライブラリを使うと良い
  return getProfileCard(id);
};
