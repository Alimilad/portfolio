import { useEffect } from "react";
import { useActiveLinkContext } from "@/context/active-link-context";
import { LinksName } from "./types";
import { useInView } from "react-intersection-observer";

export function useActiveLinkInView(
  linkName: LinksName,
  threshold = 0.75
) {
  const { setActiveLink, timeOfLastClick } =
    useActiveLinkContext();
  const { ref, inView } = useInView({
    threshold: threshold,
  });

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveLink(linkName);
    }
  }, [inView, setActiveLink, timeOfLastClick, linkName]);
  return {
    ref,
    inView
  };
}
