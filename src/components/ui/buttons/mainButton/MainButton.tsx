import { ButtonProps, NativeButtonProps } from "./main-button.interface";
import styles from "./main-button.module.scss";

export const MainButton: React.ForwardRefRenderFunction<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
> = (props, ref) => {
  const {
    loading = false,
    prefixCls: customizePrefixCls,
    type = "default",
    danger,
    shape = "default",
    // size: customizeSize,
    disabled: customDisabled,
    className,
    children,
    icon,
    ghost = false,
    block = false,
    htmlType = "button" as ButtonProps["htmlType"],
    ...rest
  } = props;

  // let buttonNode = (
  //   <button
  //     {...(rest as NativeButtonProps)}
  //     type={htmlType}
  //     className={classes}
  //     onClick={handleClick}
  //     disabled={mergedDisabled}
  //     ref={buttonRef}
  //   >
  //     {iconNode}
  //     {kids}
  //   </button>
  // );

  return <></>;
};
