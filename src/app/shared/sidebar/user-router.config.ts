import { RouteInfo } from './sidebar.metadata';



export const USERROUTES: RouteInfo[] = [

{
path: '/layout/user/pending-todo', title: 'My TODO', icon: 'ft-align-left', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
submenu: [
    { path: '/layout/user/pending-todo', title: 'Pending', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
    {path: '/layout/user/inprogress-todo', title: 'Inprogress', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
    {path: '/layout/user/completed-todo', title: 'Completed', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
]
},
    {
        path: '', title: 'My Friends', icon: 'ft-align-left', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            // { path: '/layout/user/friends-chating', title: 'My Chat', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            { path: '/layout/user/all-friends', title: 'All Friends', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            {path: '/layout/user/pending-request', title: 'Pending Request', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            // {path: '/layout/user/completed-todo', title: 'Completed', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
        ]
        },

];