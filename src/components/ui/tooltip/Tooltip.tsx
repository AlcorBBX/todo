import React, { useLayoutEffect, useRef, useState } from "react";
import { Portal } from "..";

// eslint-disable-next-line no-lone-blocks
{
  /* <Tooltip text='qw'>{props => <p {...props}>Del</p>}</Tooltip> */
}

interface TooltipChildProps {
  onMouseEnter: React.MouseEventHandler<HTMLElement>;
  onMouseLeave: React.MouseEventHandler<HTMLElement>;
}

interface TooltipProps {
  text: string;
  children: (props: TooltipChildProps) => React.ReactElement;
}

export const Tooltip = ({ children, text }: TooltipProps) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const tooltipEl = tooltipRef.current;

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
            ref={tooltipRef}
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
