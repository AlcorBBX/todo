export type SizeType = "small" | "middle" | "large" | undefined;

const ButtonTypes = [
  "default",
  "primary",
  "ghost",
  "dashed",
  "link",
  "text",
] as const;
export type ButtonType = typeof ButtonTypes[number];

const ButtonShapes = ["default", "circle", "round"] as const;
export type ButtonShape = typeof ButtonShapes[number];

const ButtonHTMLTypes = ["submit", "button", "reset"] as const;
export type ButtonHTMLType = typeof ButtonHTMLTypes[number];

// export type LegacyButtonType = ButtonType | "danger";
// export function convertLegacyProps(type?: LegacyButtonType): ButtonProps {
//   if (type === "danger") {
//     return { danger: true };
//   }
//   return { type };
// }

export interface BaseButtonProps {
  type?: ButtonType;
  icon?: React.ReactNode;
  shape?: ButtonShape;
  // size?: SizeType;
  disabled?: boolean;
  loading?: boolean | { delay?: number };
  prefixCls?: string;
  className?: string;
  ghost?: boolean;
  danger?: boolean;
  block?: boolean;
  children?: React.ReactNode;
}

// Typescript will make optional not optional if use Pick with union.
// Should change to `AnchorButtonProps | NativeButtonProps` and `any` to `HTMLAnchorElement | HTMLButtonElement` if it fixed.
// ref: https://github.com/ant-design/ant-design/issues/15930
export type AnchorButtonProps = {
  href: string;
  target?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
} & BaseButtonProps &
  Omit<
    React.AnchorHTMLAttributes<HTMLAnchorElement | HTMLButtonElement>,
    "type" | "onClick"
  >;

export type NativeButtonProps = {
  htmlType?: ButtonHTMLType;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & BaseButtonProps &
  Omit<
    React.ButtonHTMLAttributes<HTMLAnchorElement | HTMLButtonElement>,
    "type" | "onClick"
  >;

export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>;

// type CompoundedComponent = React.ForwardRefExoticComponent<
//   ButtonProps & React.RefAttributes<HTMLElement>
// > & {
//   Group: typeof Group;
//   /** @internal */
//   __ANT_BUTTON: boolean;
// };

type Loading = number | boolean;
