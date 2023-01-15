import { useEffect, useState } from "react";
import { ANIMATION_TIME } from "@utils/consts";

export interface UseMountProps {
  anchorEl: HTMLElement | null;
}

export const useMount = ({ anchorEl }: UseMountProps) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    if (anchorEl && !mounted) {
      setMounted(true);
    } else if (!anchorEl && mounted) {
      setTimeout(() => {
        setMounted(false);
      }, ANIMATION_TIME);
    }
  }, [anchorEl]);
  return { mounted };
};
