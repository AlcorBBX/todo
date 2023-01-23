import { ProjectCard, Tooltip } from "@components/ui";
//@ts-ignore
import { IProject } from "@types/project.interface";
import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./project-item.module.scss";

interface ProjectItemProps {
  project: IProject;
}

//TODO add project in favorite list

const ProjectCardMemo = memo(ProjectCard);

export const ProjectItem = ({ project }: ProjectItemProps) => {
  const history = useNavigate();

  const openProject = useCallback(() => {
    history(`/task/${project.id}`, { state: project.name });
  }, []);

  return (
    <>
      <ProjectCardMemo
        title={project.name}
        // extra={<DeleteProject />}
        className={styles.card}
        handleClick={openProject}
        backgroundColor={project.backgroundColor}
      />
    </>
  );
};

export const DeleteProject = () => {
  return (
    <>
      <Tooltip text='Удалить проект?'>
        {props => (
          <p
            {...props}
            style={{ cursor: "pointer" }}
            onClick={() => console.log("1")}
          >
            X
          </p>
        )}
      </Tooltip>
    </>
  );
};
