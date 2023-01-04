import { ProjectItem } from "./project-item/ProjectItem";
import { IProject } from "../../../../types/project.interface";

import styles from "./projects.module.scss";

export interface ProjectsProps {
  projects: IProject[];
}

export const Projects = ({ projects }: ProjectsProps) => {
  return (
    <div className={styles.container}>
      {projects?.length
        ? projects.map(project => (
            <ProjectItem project={project} key={project.id} />
          ))
        : null}
    </div>
  );
};
