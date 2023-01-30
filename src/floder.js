import React, { useState } from "react";
const Folder = (props) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visual: false,
    isFolder: false
  });

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visual: true,
      isFolder
    });
  };

  const { explor } = props;
  if (explor.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div style={{ cursor: "pointer" }} onClick={() => setExpand(!expand)}>
          <span style={{ marginLeft: 5 }}> 📂 {explor.name}</span>
          <div>
            <button onClick={(e) => handleNewFolder(e, true)}>Folder+</button>
            <button onClick={(e) => handleNewFolder(e, false)}>File+</button>
          </div>
        </div>

        <div style={{ display: expand ? "block" : "none" }}>
          {showInput.visual && (
            <div>
              <span>{showInput.isFolder ? "📂" : "📄"} </span>
              <input
                type="text"
                onBlur={() => {
                  setShowInput({ ...showInput, visual: false });
                }}
                autoFocus
              />
            </div>
          )}

          {explor.items.length &&
            explor.items.map((exp) => {
              return <Folder explor={exp} />;
            })}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <span className="file" style={{ margin: 19 }}>
          "📄" {explor.name}
        </span>
      </div>
    );
  }
};

export default Folder;
