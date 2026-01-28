import React from "react";

const AdPlaceholder = ({ className }: { className?: string }) => {
  return (
    <div
      className={`bg-gray-200 border border-dashed border-gray-400 text-gray-500 text-center flex items-center justify-center ${className}`}
    >
      Anúncio
    </div>
  );
};

export default AdPlaceholder;
