import { useTypedSelector } from "../../../hooks";
import { ProjectCard } from "../../ui";
import { ProjectCategory } from "./projectCategory/ProjectCategory";

import styles from "./home.module.scss";

export const Home = () => {
  const { projects } = useTypedSelector(state => state.projects);

  return (
    <div className={styles.home}>
      <div className={styles.projects}>
        <ProjectCategory
          title='Рабочая площадка'
          tooltipText='Твоя рабочая площадка'
        >
          <ProjectCard projects={projects} />
        </ProjectCategory>
      </div>
    </div>
  );
};
