import { createRouter, createWebHistory } from 'vue-router';
// 创建路由对象
const router = new createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
            component:()=>import('@/view/Home/HomePage.vue'),
        },
        {
            path: '/school',
            component:()=>import('@/view/School/SchoolPage.vue'),
            children:[
                {
                    path: 'selected',
                    component:()=>import('@/view/School/ChildPages/SelectedPage.vue'),
                },
                {
                    path: 'examination',
                    component:()=>import('@/view/School/ChildPages/ExaminationPage.vue'),
                },
                {
                    path: 'programming',
                    component:()=>import('@/view/School/ChildPages/ProgrammingPage.vue'),
                },
                {
                   
                    path: '/school/',
                    redirect: '/school/selected'
                
                }
            ]
        },
        {
            path: '/found',
            component:()=>import('@/view/Found/FoundPage.vue'),
        },
        {
            path: '/youranswer',
            component:()=>import('@/view/YourAnswer/YourAnswerPage.vue'),
        },
        {
            path: '/login',
            component:()=>import('@/view/Login/LoginPage.vue'),
        },
        {
            path: '/',
            redirect: '/login'
        },
    ]
})
// 导出路由对象
export default router