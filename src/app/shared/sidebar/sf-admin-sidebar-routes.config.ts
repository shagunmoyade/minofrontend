import { RouteInfo } from './sidebar.metadata';



export const SFAdminRoutes: RouteInfo[] = [


    {
        path: `/layout/salesforce/home`, title: 'Home', icon: 'ft-home', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: `/layout/salesforce/onCalls`, title: 'Ongoing calls', icon: 'ft-phone', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },    
    {
        path: `/layout/salesforce/mylist`, title: 'Calling list', icon: 'fa fa-id-badge', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: `/layout/salesforce/scheduler`, title: 'Scheduler', icon: 'fa fa-list-ul', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: `/layout/salesforce/report`, title: 'Reports', icon: 'fa fa-list-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: `/layout/salesforce/setting`, title: 'Settings', icon: 'fa fa-gear', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
];
