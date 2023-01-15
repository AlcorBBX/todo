import { useTypedSelector } from "@hooks/index";
import { ProjectCategory } from "./projectCategory/ProjectCategory";
import { Projects } from "./projects/Projects";
import { Skeleton } from "@components/ui/skeleton/Skeleton";

import styles from "./home.module.scss";

export const Home = () => {
  const { projects, loading } = useTypedSelector(state => state.projects);
  return (
    <main className={styles.home}>
      <div className={styles.projects}>
        <ProjectCategory
          title='Рабочая площадка'
          tooltipText='Твоя рабочая площадка'
        >
          {loading ? <Skeleton /> : <Projects projects={projects} />}
        </ProjectCategory>
      </div>
    </main>
  );
};
