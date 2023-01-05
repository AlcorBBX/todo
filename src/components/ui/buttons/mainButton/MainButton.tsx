// import { forwardRef } from "react";
// import { ButtonProps, NativeButtonProps } from "./main-button.interface";

// const InternalButton: React.ForwardRefRenderFunction<
//   HTMLButtonElement | HTMLAnchorElement,
//   ButtonProps
// > = (props, ref) => {
//   const {
//     loading = false,
//     prefixCls: customizePrefixCls,
//     type = "default",
//     danger,
//     shape = "default",
//     // size: customizeSize,
//     disabled: customDisabled,
//     className,
//     children,
//     icon,
//     ghost = false,
//     block = false,
//     /** If we extract items here, we don't need use omit.js */
//     // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
//     htmlType = "button" as ButtonProps["htmlType"],
//     ...rest
//   } = props;


//   const iconNode =
//     icon && !innerLoading ? (
//       icon
//     ) : (
//       <LoadingIcon
//         existIcon={!!icon}
//         prefixCls={prefixCls}
//         loading={!!innerLoading}
//       />
//     );

//   const kids =
//     children || children === 0
//       ? spaceChildren(children, isNeedInserted() && autoInsertSpace)
//       : null;

//   let buttonNode = (
//     <button
//       {...(rest as NativeButtonProps)}
//       type={htmlType}
//       // className={classes}
//       // onClick={handleClick}
//       // disabled={mergedDisabled}
//       // ref={buttonRef}
//     >
//       {iconNode}
//       {kids}
//     </button>
//   );

//   if (!isUnBorderedButtonType(type)) {
//     buttonNode = <Wave disabled={!!innerLoading}>{buttonNode}</Wave>;
//   }

//   return wrapSSR(buttonNode);
// };

// type CompoundedComponent = React.ForwardRefExoticComponent<
//   ButtonProps & React.RefAttributes<HTMLElement>
// >;

// const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
//   InternalButton
// ) as CompoundedComponent;

export {};
