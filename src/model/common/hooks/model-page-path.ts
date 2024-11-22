import { usePathname } from "next/navigation";
import { type ModelName, ModelPathMapping } from "../const";

/**
 * `/${modelName}/xxx/` → xxx
 */
export const useContentIdFromPagePath = (modelName: ModelName): string => {
  const pathname = usePathname();
  const modelPath = ModelPathMapping[modelName].indexPath;
  const isModelPage = pathname.startsWith(modelPath);
  if (!isModelPage)
    throw new Error("useContentIdFromPagePath should be used in a model page");
  return pathname.replace(`${modelPath}/`, "");
};
