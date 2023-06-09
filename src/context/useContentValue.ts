import { useContext } from "react";
import { ContentValueContext } from "context/ContentListProvider";

function useContentValue() {
  const value = useContext(ContentValueContext);

  if (value === undefined) {
    throw new Error(
      "useContentValue should be used within ContentValueContext"
    );
  }
  return value;
}

export default useContentValue;
