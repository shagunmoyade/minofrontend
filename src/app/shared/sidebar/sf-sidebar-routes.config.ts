import { RouteInfo } from './sidebar.metadata';



export const SFROUTES: RouteInfo[] = [

    {
        path: '', title: 'Change Status', icon: 'ft-align-left', class: 'has-sub', badge: 'O', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: null, title: 'Available', icon: '', class: '', badge: 'O', badgeClass: 'badge badge-pill badge-success  float-right mr-1 mt-1', isExternalLink: true, submenu: [] },
            { path: null, title: 'On Break', icon: '', class: '', badge: 'O', badgeClass: 'badge badge-pill badge-warning  float-right mr-1 mt-1', isExternalLink: true, submenu: [] },
            { path: null, title: 'Offline', icon: '', class: '', badge: 'O', badgeClass: 'badge badge-pill badge-danger  float-right mr-1 mt-1', isExternalLink: true, submenu: [] },

        ]
    },

    {
        path: `/layout/salesforce/home`, title: 'Home', icon: 'ft-home', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: `/layout/salesforce/dialerSession`, title: 'Dialer Session', icon: 'fa fa-user', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
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
