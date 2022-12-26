import { FC, PropsWithChildren, useState } from "react";
import { useOutside } from "../../../../hooks";
import {
  MainModal,
  NewProjectButton,
  ProjectModal,
  Tooltip,
} from "../../../ui";
import { ColorsProject } from "../../../ui/modals/project/ColorsProject";

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
    <>
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
          {/* <ProjectModal>
            {props => <NewProjectButton {...props} text='Создать доску' />}
          </ProjectModal> */}

          <NewProjectButton onClick={(e) => OpenModal(e)} text='Создать доску' />
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
    </>
  );
};