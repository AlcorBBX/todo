import { Section } from "@components/section";
import { MainModal, NewProjectButton, Tooltip } from "@components/ui";
import { useOutside } from "@hooks/useOutside";
import { ContentModaL } from "./ContentModal";

import styles from "../home.module.scss";

interface ProjectCategoryProps {
  children: React.ReactNode;
  title: string;
  tooltipText: string;
}

export const ProjectCategory = ({
  children,
  title,
  tooltipText,
}: ProjectCategoryProps) => {
  const { ref, anchorEl, setAnchorEl } = useOutside();
  const OpenModal = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };
  return (
    <Section delay={0.1}>
      <div>
        <Tooltip text={tooltipText}>
          {props => (
            <h3 className={styles.textHeader} {...props}>
              {title}
            </h3>
          )}
        </Tooltip>
      </div>
      <div className={styles.projectsCards}>
        {children}
        <div>
          <NewProjectButton onClick={e => OpenModal(e)} text='Создать доску' />
          <MainModal
            refEl={ref}
            anchorEl={anchorEl}
            setAnchorEl={setAnchorEl}
            title='Создать доску'
          >
            <ContentModaL />
          </MainModal>
        </div>
      </div>
    </Section>
  );
};
