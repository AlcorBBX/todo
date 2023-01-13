import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { IProject } from "../../../../../types/project.interface";
import { ProjectCard } from "../../../../ui";

import styles from "./project-item.module.scss";

interface ProjectItemProps {
  project: IProject;
}

//TODO add project in favorite list

const ProjectCardMemo = memo(ProjectCard);

export const ProjectItem = ({ project }: ProjectItemProps) => {
  const history = useNavigate();

  // const openProject = () => {
  //   history(`/task/${project.id}`);
  // };

  const openProject = useCallback(() => {
    history(`/task/${project.id}`);
  }, []);

  return (
    <ProjectCardMemo
      title={project.name}
      extra={<DeleteProject/>}
      className={styles.card}
      handleClick={openProject}
      backgroundColor={project.backgroundColor}
    />
  );
};

export const DeleteProject = () => {
  return <p style={{zIndex: '99'}} onClick={() => console.log('1')}>X</p>
}
