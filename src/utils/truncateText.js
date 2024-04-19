import React from "react";

const TruncateText = ({ text, maxLength }) => {
  const truncate = (str, maxLength) => {
    if (str.length <= maxLength) {
      return str;
    }
    const start = str.substring(0, maxLength / 2);
    const end = str.substring(str.length - maxLength / 2);
    return `${start}...${end}`;
  };

  const truncatedText = truncate(text, maxLength);

  return (
    <div title={text} className="connect__textp">
      {truncatedText}
    </div>
  );
};

export default TruncateText;
