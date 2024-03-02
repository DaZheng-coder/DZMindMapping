import React from "react";
import "./index.less";
import { INode } from "@/types";
import { getNodeId } from "@/utils/common";

interface IMingMapping {
  node: INode;
}

const MindMapping: React.FC<IMingMapping> = ({ node }) => {
  const { id, label, children } = node;
  const containerId = getNodeId(id);

  return (
    <div id={containerId} className="mind-mapping-node">
      <div className="mind-mapping-label">{label}</div>
      <div className="mind-mapping-children">
        {children.map((node) => <MindMapping node={node} key={node.id} />)}
      </div>
    </div>
  );
};

export default MindMapping;
