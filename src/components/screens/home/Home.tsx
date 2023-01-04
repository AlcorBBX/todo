import { useTypedSelector } from "../../../hooks";
import { ProjectCard } from "../../ui";
import { ProjectCategory } from "./projectCategory/ProjectCategory";
import { Projects } from "./projects/Projects";

import styles from "./home.module.scss";
import { Skeleton } from "../../ui/skeleton/Skeleton";

export const Home = () => {
  const { projects, loading } = useTypedSelector(state => state.projects);
  return (
    <div className={styles.home}>
      <div className={styles.projects}>
        <ProjectCategory
          title='Рабочая площадка'
          tooltipText='Твоя рабочая площадка'
        >
          {/* <ProjectCard projects={projects} />
           */}
          {loading ? <Skeleton /> : <Projects projects={projects} />}
        </ProjectCategory>
      </div>
    </div>
  );
};
