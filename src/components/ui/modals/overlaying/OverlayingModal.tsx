import { Portal } from "../../../../helpers/portal/Portal";
import { useMount } from "../../../../hooks";
import { ModalLayout } from "./LayoutModalAnimated";

interface IOverlayingModalProps {
  children: React.ReactNode;
  refEl: React.RefObject<HTMLDivElement>;
  anchorEl: HTMLElement | null;
}

export const OverlayingModal = ({
  children,
  refEl,
  anchorEl,
}: IOverlayingModalProps) => {
  const { mounted } = useMount({ anchorEl });

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Portal>
        <ModalLayout anchorEl={anchorEl} refEl={refEl}>
          {children}
        </ModalLayout>
      </Portal>
    </>
  );
};
