import { RouteInfo } from './sidebar.metadata';



export const AGENTROUTES: RouteInfo[] = [

{
path: '', title: 'Change Status', icon: 'ft-align-left', class: 'has-sub', badge: 'O', badgeClass: '', isExternalLink: false,
submenu: [
{ path: null, title: 'Available', icon: '', class: '', badge: 'O', badgeClass: 'badge badge-pill badge-success float-right mr-1 mt-1 ', isExternalLink: true, submenu: [] },
{ path: null, title: 'On Break', icon: '', class: '', badge: 'O', badgeClass: 'badge badge-pill badge-warning float-right mr-1 mt-1 ', isExternalLink: true, submenu: [] },
{ path: null, title: 'Offline', icon: '', class: '', badge: 'O', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1 ', isExternalLink: true, submenu: [] },

]
},

{
path: `/layout/agent/home`, title: 'Home', icon: 'ft-home', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
},
// {
// path: `/layout/agent/app-agent-dashboard`, title: 'agent dashboard', icon: 'fa fa-user', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
// },
// {
// path: `/layout/agent/app-agent-call-dialog`, title: 'agent call dialog', icon: 'fa fa-id-badge', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
// },
// {
// path: `/layout/agent/app-agent-dialer-list`, title: 'agent dialer list', icon: 'fa fa-list-ul', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
// },
// {
// path: `/layout/agent/app-agent-feedback-dialog`, title: 'agent feedback dialog', icon: 'fa fa-globe', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
// },

];