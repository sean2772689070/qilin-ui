export type CollapseItemName = string | number;

export interface CollapseItemProps {
  name: CollapseItemName;
  title?: string;
  disabled?: boolean;
}

export const collapseItemProps: CollapseItemProps = {
  name: '',
  title: '',
  disabled: false
};
