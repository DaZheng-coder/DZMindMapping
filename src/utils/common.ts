import { NODE_ID_PREFIX } from "@/constants";

export const getNodeId = (id: string) => {
  return NODE_ID_PREFIX + id;
};
