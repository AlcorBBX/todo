import { useLayoutEffect, useRef, useState } from "react";

export const useOutside = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setAnchorEl(null);
    }
  };

  useLayoutEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [anchorEl]);

  useLayoutEffect(() => {
    const ModalEl = ref.current;
    if (!anchorEl || !ModalEl) return;
  }, [anchorEl]);

  return { ref, anchorEl, setAnchorEl };
};
