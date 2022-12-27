import { FC, PropsWithChildren } from "react";
import { Section } from "../../..";
import { useOutside } from "../../../../hooks";
import { MainModal, NewProjectButton, Tooltip } from "../../../ui";

import styles from "../home.module.scss";
import { ContentModaL } from "./ContentModal";

interface IProjectCategoryProps {
  title: string;
  tooltipText: string;
}

export const ProjectCategory: FC<PropsWithChildren<IProjectCategoryProps>> = ({
  children,
  title,
  tooltipText,
}) => {
  const { ref, anchorEl, setAnchorEl } = useOutside();
  const OpenModal = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };
  return (
    <Section>
      <div>
        <Tooltip text={tooltipText}>
          {props => (
            <h3 className={styles.textHeader} {...props}>
              {title}
            </h3>
          )}
        </Tooltip>
      </div>
      <div className={styles.projectsCards}>
        {children}
        <div>
          <NewProjectButton onClick={e => OpenModal(e)} text='Создать доску' />
          <MainModal
            refEl={ref}
            anchorEl={anchorEl}
            setAnchorEl={setAnchorEl}
            title='Создать доску'
          >
            <ContentModaL />
          </MainModal>
        </div>
      </div>
    </Section>
  );
};
