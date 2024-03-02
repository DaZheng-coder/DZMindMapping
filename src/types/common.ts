export interface INode {
  id: string;
  label: string;
  children: INode[];
  parent: INode | null;
}