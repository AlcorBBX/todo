import { FC } from "react";
import { IProject } from "../../../../types/project.interface";
import { ProjectItem } from "./project-item/ProjectItem";

import styles from "./project-card.module.scss";

export const ProjectCard: FC<{ projects: IProject[] }> = ({ projects }) => {
  return (
    <div className={styles.projectsList}>
      {projects?.length &&
        projects.map(project => (
          <ProjectItem project={project} key={project.id}/>
        ))}
    </div>
  );
};
