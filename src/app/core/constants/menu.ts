import {MenuGroup} from '../models/menu.model';


export class Menu {
  public static pages: MenuGroup[] = [
    // --- MAIN PRODUCTS/DASHBOARDS ---
    {
      group: 'Dashboard',
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
      group: 'Verification',
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
      ],
    },
    {
      group: 'Flow Management',
      separator: true,
      items: [
        {
          icon: '⚙️',
          label: 'Flow Management',
          route: '/workflow-management', // Base path for the dashboard
        },
      ]
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
        // {
        //   icon: '👤',
        //   label: 'User Settings',
        //   route: '/settings/profile',
        // },
      ],
    },
  ];
}
