import { FC, PropsWithChildren } from "react";
import { NewProjectButton, ProjectModal, Tooltip } from "../../../ui";

import styles from "../home.module.scss";

interface IProjectCategoryProps {
  title: string;
  tooltipText: string;
}

export const ProjectCategory: FC<PropsWithChildren<IProjectCategoryProps>> = ({
  children,
  title,
  tooltipText,
}) => {
  return (
    <>
      <div>
        <Tooltip text={tooltipText}>
          {props => <h3 className={styles.textHeader} {...props}>{title}</h3>}
        </Tooltip>
      </div>
      <div className={styles.projectsCards}>
        {children}
        <div>
          <ProjectModal>
            {props => <NewProjectButton {...props} text='Создать доску' />}
          </ProjectModal>
        </div>
      </div>
    </>
  );
};
