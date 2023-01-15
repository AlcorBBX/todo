import React, { useLayoutEffect, useState } from "react";
import { Portal } from "@helpers/portal/Portal";
import { useOutside } from "@hooks/useOutside";

interface TooltipChildProps {
  onMouseEnter: React.MouseEventHandler<HTMLElement>;
  onMouseLeave: React.MouseEventHandler<HTMLElement>;
}

interface TooltipProps {
  text: string;
  children: (props: TooltipChildProps) => React.ReactElement;
}

export const Tooltip = ({ children, text }: TooltipProps) => {
  const { ref, anchorEl, setAnchorEl } = useOutside();

  const [position, setPosition] = useState({ top: 0, left: 0 });

  useLayoutEffect(() => {
    const tooltipEl = ref.current;

    if (!anchorEl || !tooltipEl) {
      return;
    }

    // Метод Element.getBoundingClientRect() возвращает размер элемента
    // и его позицию относительно viewport
    // (часть страницы, показанная на экране, и которую мы видим).
    const anchorRect = anchorEl.getBoundingClientRect();
    const tooltipRect = tooltipEl.getBoundingClientRect();

    const TOP_SPACE = 5;

    setPosition({
      top: anchorRect.top - tooltipRect.height - TOP_SPACE,
      left: anchorRect.left + anchorRect.width / 2 - tooltipRect.width / 2,
    });
  }, [anchorEl]);

  return (
    <>
      {anchorEl && (
        <Portal>
          <div
            ref={ref}
            className='tooltip'
            style={{
              top: position.top,
              left: position.left,
              backgroundColor: "white",
            }}
          >
            {text}
          </div>
        </Portal>
      )}
      {children({
        onMouseLeave: () => setAnchorEl(null),
        onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
          setAnchorEl(e.currentTarget);
        },
      })}
    </>
  );
};
