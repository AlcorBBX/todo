import { forwardRef } from "react";
import styles from "./main-card.module.scss";

interface IMainCard {
  children: React.ReactNode;
  innerStyle?: React.CSSProperties;
}

export const MainCard = ({ children, innerStyle }: IMainCard) => {
  return (
    <div className={styles.card} style={innerStyle}>
      {children}
    </div>
  );
};

export const MainSecondaryCard = ({ children, innerStyle }: IMainCard) => {
  return (
    <div className={styles.cardSecondary} style={innerStyle}>
      {children}
    </div>
  );
};

//=============================================================

export type CardType = "inner";
export type CardSize = "default" | "small";

export interface CardTabListType {
  key: string;
  tab: React.ReactNode;
  disabled?: boolean;
}

export interface CardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  prefixCls?: string;
  title?: React.ReactNode;
  extra?: React.ReactNode;
  bordered?: boolean;
  headStyle?: React.CSSProperties;
  bodyStyle?: React.CSSProperties;
  style?: React.CSSProperties;
  loading?: boolean;
  hoverable?: boolean;
  children?: React.ReactNode;
  id?: string;
  className?: string;
  size?: CardSize;
  type?: CardType;
  cover?: React.ReactNode;
  actions?: React.ReactNode[];
  tabList?: CardTabListType[];
  tabBarExtraContent?: React.ReactNode;
  onTabChange?: (key: string) => void;
  activeTabKey?: string;
  defaultActiveTabKey?: string;
  // tabProps?: TabsProps;
}

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
      className,
      extra,
      headStyle = {},
      bodyStyle = {},
      title,
      loading,
      bordered = true,
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

    const loadingBlock = <div>{children}</div>;

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

    return (
      <div ref={ref} className={styles.cardR}>
        {head}
        {coverDom} {/* Обложка вверху каточки */}
        {body}
        {actionDom}
      </div>
    );
  }
);
