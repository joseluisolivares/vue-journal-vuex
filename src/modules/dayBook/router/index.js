export default {
    
    name:'daybook',
    path: '/dayBook',
    component: () => import(/* webpackChunkName: "daybook" */ '../layouts/DayBookLayout.vue'),
    children:[
        {
            path:'',
            name:'no-entry',
            component: () => import(/* webpackChunkName: "no-entry" */ '../views/NoEntrySelected.vue'),
        },
        {
            path:':id',
            name:'entry',
            component: () => import(/* webpackChunkName: "entry" */ '../views/EntryView.vue'),
        }
    ]
    
}