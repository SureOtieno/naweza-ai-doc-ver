import {MenuGroup} from '../models/menu.model';


export class Menu {
  public static pages: MenuGroup[] = [
    // --- MAIN PRODUCTS/DASHBOARDS ---
    {
      group: 'Application Core',
      separator: true,
      items: [
        {
          icon: '🏠',
          label: 'Client Dashboard',
          route: '/dashboard/client',
        },
        {
          icon: '📈',
          label: 'Analytics Dashboard',
          route: '/dashboard/analytics',
        },
      ],
    },

    // --- AI VERIFICATION TOOLS ---
    {
      group: 'AI Verification',
      separator: true,
      items: [
        {
          icon: '📂',
          label: 'Document Upload',
          route: '/document-upload',
        },
        {
          icon: '📜',
          label: 'Verification History',
          route: '/verification-history',
        },
        {
          icon: '⚙️',
          label: 'Flow Management',
          route: '/workflow-management', // Base path for the dashboard
        },
      ],
    },

    // --- AUDIT & CONFIGURATION ---
    {
      group: 'System',
      separator: false,
      items: [
        {
          icon: '📋',
          label: 'Audit Trail',
          route: '/audit-trail',
        },
        {
          icon: '👤',
          label: 'User Settings',
          route: '/settings/profile',
        },
      ],
    },
  ];
}
