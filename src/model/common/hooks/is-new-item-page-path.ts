import { usePathname } from "next/navigation";

import { type ModelName, ModelPathMapping } from "../const";
import { NEW_ITEM_ID } from "../const/key";

export const useIsNewItemPagePath = (modelName: ModelName) => {
  const pathname = usePathname();
  return pathname === ModelPathMapping[modelName].idToPath(NEW_ITEM_ID);
};
