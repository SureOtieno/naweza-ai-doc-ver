// src/app/modules/shared/models/menu.model.ts (MenuItem interface)
// NOTE: This interface must exist in your project for the below class to work.
export interface MenuItem {
  group: string;
  separator: boolean;
  items: {
    icon: string;
    label: string;
    route: string;
    // Optional parameter for active/default flow display
    badge?: string;
  }[];
}

export interface SubMenuItem {
  icon?: string;
  label?: string;
  route?: string | null;
  expanded?: boolean;
  active?: boolean;
  children?: Array<SubMenuItem>;
}

// src/app/modules/shared/models/menu.model.ts (Updated)

export interface MenuGroup { // 🚨 RENAMED INTERFACE
  isCollapsed?: boolean;
  group: string;
  separator: boolean;
  items: {
    icon: string;
    label: string;
    route: string;
    badge?: string;
  }[];
}
