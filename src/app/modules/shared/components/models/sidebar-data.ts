// sidebar-data.ts (a separate file or defined inside the component)

export interface NavItem {
  icon: string; // Placeholder for an icon (e.g., from an icon library like Heroicons)
  label: string;
  route: string;
}

export const NAV_ITEMS: NavItem[] = [
  {
    icon: 'wrench',
    label: 'Find a Pro',
    route: '/products', // Takes user to the main Pro-Hailing interface
  },
  {
    icon: 'chart-bar',
    label: 'Workflow Management',
    route: '/flow-management', // Your existing module's entry point
  },
  {
    icon: 'user',
    label: 'Profile & Settings',
    route: '/settings/profile', // A future route for user configuration
  },
];
