import React, { useState } from "react";
import explorer from "./floderData";
import Folder from "./floder";
export default function App() {
  const [explorerData, setExplorerData] = useState(explorer);

  return (
    <div>
      <Folder explor={explorerData} />
    </div>
  );
}
