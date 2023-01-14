import { useState } from "react";
import { ContentItemCard } from "./ContentItemCard";

import styles from "./modal-content.module.scss";

export const TaskDescription = () => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [description, setDescription] = useState<string>(
    "Attach designs conveniently using Power-ups"
  );

  return (
    <ContentItemCard title='Описание'>
      {!isEdit ? (
        <div>
          <p onClick={() => setIsEdit(true)}>{description}</p>
        </div>
      ) : (
        <div>
          <input
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <div className={styles.actions}>
            <button>Save</button>
            <button onClick={() => setIsEdit(false)}>Cancel</button>
          </div>
        </div>
      )}
    </ContentItemCard>
  );
};
