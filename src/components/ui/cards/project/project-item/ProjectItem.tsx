import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CancelButton } from "../../..";
import { localStorageWrapper } from "../../../../../helpers/storage";
import { deleteProject } from "../../../../../store/todoProject/project-actions";
import { IProject } from "../../../../../types/project.interface";
import styles from "../project-card.module.scss";

// interface ProjectItemChildProps {
//   onMouseEnter?: React.MouseEventHandler<HTMLElement>;
// }

interface ProjectItemProps {
  project: IProject;
  // children: (props: ProjectItemChildProps) => React.ReactElement;
}

export const ProjectItem = ({ project }: ProjectItemProps) => {
  const history = useNavigate();

  const dispatch = useDispatch();

  const deleteProjectId = () => {
    const projectsFromLocalStorage =
      localStorageWrapper.get<IProject[]>("projects");

    if (projectsFromLocalStorage !== undefined) {
      const result = projectsFromLocalStorage.filter(
        item => item.id !== project.id
      );
      localStorageWrapper.set("projects", result);
    }

    dispatch(deleteProject(project.id));
  };
  return (
    <div
      onClick={() => history(`/task/${project.id}`)}
      className={styles.card}
      style={{ background: project.backgroundColor }}
    >
      <div className={styles.cardHeader}>
        <p>{project.name}</p>
        <div>
          <CancelButton
            onClick={() => {
              deleteProjectId();
            }}
            style={{ color: "orange" }}
          />
        </div>
      </div>

      {/* To do: add board in favorite list */}
      {/* <div
        style={{
          height: "60%",
          display: "flex",
          flexDirection: "column-reverse",
          justifyContent: "space-between",
        }}
      >
        <button style={{ width: "max-content" }}>Избр</button>
      </div> */}
    </div>
  );
};
