import { CancelButton, OverlayingModal } from "@components/ui";

import styles from "./main-modal.module.scss";

export interface IMainModalProps {
  children: React.ReactNode;
  refEl: React.RefObject<HTMLDivElement>;
  anchorEl: HTMLElement | null;

  title: string;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
}

export const MainModal = ({
  children,
  refEl,
  anchorEl,
  title,
  setAnchorEl,
}: IMainModalProps) => {
  const CloseModal = () => {
    setAnchorEl(null);
  };

  return (
    <OverlayingModal refEl={refEl} anchorEl={anchorEl}>
      <div className={styles.container}>
        <Header title={title} onClose={CloseModal} />
        {children}
      </div>
    </OverlayingModal>
  );
};

interface IHeaderProps {
  title: string;
  onClose(): any;
}

export const Header = ({ title, onClose }: IHeaderProps) => {
  return (
    <div className={styles.header}>
      <p></p>
      <p>{title}</p>
      <CancelButton onClick={() => onClose()} />
    </div>
  );
};
