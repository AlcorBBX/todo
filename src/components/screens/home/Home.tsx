import { useState } from "react";
import { useTypedSelector } from "../../../hooks";
import { ProjectCard } from "../../ui";

import styles from "./home.module.scss";
import { ProjectCategory } from "./projectCategory/ProjectCategory";

const MIN_DATE = new Date(2022, 6, 1);
const MAX_DATE = new Date(2022, 8, 0);

export const Home = () => {
  const { projects } = useTypedSelector(state => state.projects);

  const [date, setDate] = useState(() => new Date());

  return (
    <div className={styles.home}>
      <div className={styles.projects}>
        <ProjectCategory title='Избранное' tooltipText='Избранное'>
          <ProjectCard projects={projects} />
        </ProjectCategory>

        {/* <DatePicker
            value={date}
            onChange={setDate}
            // min={MIN_DATE}
            // max={MAX_DATE}
          /> */}
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
