import { INode } from "@/types";
import { v4 as uuid } from "uuid";

export const MOCK_MIND_MAPPING: INode = {
  id: uuid(),
  label: "root",
  children: [
    {
      id: uuid(),
      label: "child1",
      children: [
        {
          id: uuid(),
          label: "child1-1",
          children: [
            {
              id: uuid(),
              label: "child1-1-1",
              children: [],
              parent: null,
            },
          ],
          parent: null,
        },
        {
          id: uuid(),
          label: "child1-2",
          children: [],
          parent: null,
        },
      ],
      parent: null,
    },
    {
      id: uuid(),
      label: "child2",
      children: [],
      parent: null,
    },
  ],
  parent: null,
};
