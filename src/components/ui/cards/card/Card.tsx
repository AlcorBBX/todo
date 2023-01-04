import clsx from "clsx";
import { forwardRef } from "react";
import { SkeletonText } from "../../skeleton/Skeleton";

import { CardProps } from "./card.type";

import styles from "./card.module.scss";

const getAction = (actions: React.ReactNode[]) => {
  const actionList = actions.map((action, index) => (
    <li style={{ width: `${100 / actions.length}%` }} key={`action-${index}`}>
      <span>{action}</span>
    </li>
  ));
  return actionList;
};

export const Card = forwardRef(
  (props: CardProps, ref: React.Ref<HTMLDivElement>) => {
    const {
      prefixCls: customizePrefixCls,
      // className,
      extra,
      headStyle = {},
      bodyStyle = {},
      title,
      loading,
      bordered = false,
      size: customizeSize,
      type,
      cover,
      actions,
      tabList,
      children,
      activeTabKey,
      defaultActiveTabKey,
      tabBarExtraContent,
      hoverable,
      ...others
    } = props;

    const loadingBlock = <SkeletonText />;

    let head: React.ReactNode;
    if (title || extra) {
      head = (
        <div className={styles.head} style={headStyle}>
          <div className={styles.headWrapper}>
            {title && <div className={styles.headTitle}>{title}</div>}
            {extra && <div className={styles.extra}>{extra}</div>}
          </div>
          {/* {tabs} */}
        </div>
      );
    }

    const coverDom = cover ? <div className={styles.cover}>{cover}</div> : null;

    const body = (
      <div className={styles.body} style={bodyStyle}>
        {loading ? loadingBlock : children}
      </div>
    );

    const actionDom =
      actions && actions.length ? (
        <ul className={styles.actions}>{getAction(actions)}</ul>
      ) : null;

    const classString = clsx({
      cardBordered: bordered,
      card: !bordered,
    });

    return (
      <div ref={ref} {...others}>
        {head}
        {coverDom} {/* Обложка вверху каточки */}
        {body}
        {actionDom}
      </div>
    );
  }
);
