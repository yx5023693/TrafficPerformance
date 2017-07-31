import Login from './views/Login.vue'
import Register from './views/register3.vue'
import scale from './views/scale.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import barChart from './views/systemSetting/barChart.vue'
import Table from './views/systemSetting/Table.vue'
import Form from './views/systemSetting/Form.vue'
import user from './views/systemSetting/user.vue'
import unitInfo from './views/basicInfo/unitInfo.vue'
import unitScale from './views/basicInfo/unitScale.vue'
import carEquip from './views/basicInfo/carEquip.vue'
import shipEquip from './views/basicInfo/shipEquip.vue'
import harbourEquip from './views/basicInfo/harbourEquip.vue'
import Page6 from './views/statisticalAnalysis/Page6.vue'
import RoadGoods from './views/statisticalAnalysis/RoadGoods.vue'
import Index from './views/index/Index.vue'
import main from './views/Main.vue'
import busChart from './components/busChart.vue'
import taxiChart from './components/taxiChart.vue'
import allTypChart from './components/allTypChart.vue'
import engTypChgChart from './components/engTypChgChart.vue'
import traTypPreChgChart from './components/traTypPreChgChart.vue'
import relTimDatChart from './components/relTimDatChart.vue'
import OceanFreight from './views/statisticalAnalysis/OceanFreight.vue'
import TrafficEnergy from './views/statisticalAnalysis/TrafficEnergy.vue'
import CityEnergy from './views/statisticalAnalysis/CityEnergy.vue'
import TotalEnergy from './views/statisticalAnalysis/TotalEnergy.vue'
import DataInMap from './views/datadetection/DataInMap.vue'
import GuestCar from './views/datadetection/GuestCar.vue'//数据监测，客运车辆
import goodsCar from './views/datadetection/GoodsCar.vue'//数据监测，货运车辆
import taxi from './views/datadetection/Taxi.vue'//数据监测，出租车
import bus from './views/datadetection/Bus.vue'//数据监测，公交车
import riverShip from './views/datadetection/RiverShip.vue'//数据监测，内河船舶
import rivTraChart from './components/rivTraChart.vue'
import OceanPgerTrans from './views/statisticalAnalysis/OceanPgerTrans.vue'
import PortProduction from './views/statisticalAnalysis/PortProduction.vue'
import EnergyStruct from './views/statisticalAnalysis/EnergyStruct.vue'


let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/register',
        component: Register,
        name: '',
        hidden: true
    },{
        path: '/scale',
        component: scale,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    {
        path: '/',
        hidden: true,
        redirect: { path: '/login' }
    },
    {
        path: '/index.html',
        hidden: true,
        redirect: { path: '/login' }
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-home',
        leaf: true,//只有一个节点
        children: [
            { path: '/index', component: Index, name: '首页' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '系统设置',
        
        iconCls: 'fa fa-cogs',
        children: [
            { path: '/table', pri:['admin'],component: Table, name: '用户管理' },
            { path: '/form', pri:['admin'],component: Form, name: '权限管理' },
            { path: '/user', pri:['admin'],component: user, name: '密码修改' },
            { path: '/unitInfo', pri:['admin'],component: unitInfo, name: '技术支持' },
            { path: '/unitScale', pri:['admin'],component: unitScale, name: '帮助文档' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '基础信息',
        iconCls: 'fa fa-file-text',
        children: [
            { path: '/unitInfo', component: unitInfo, name: '单位信息' },
            { path: '/unitScale', component: unitScale, name: '单位规模' },
            { path: '/carEquip', component: carEquip, name: '车辆设备' },
            { path: '/shipEquip', component: shipEquip, name: '船舶设备' },
            { path: '/harbourEquip', component: harbourEquip, name: '港口设备' },
            {
                path:'/',
                component:unitInfo,
                name:'设备管理',
                iconCls:'fa fa-file-text',
                children:[
                   { path: '/carEquip', component: carEquip, name: '车辆设备' },
                   { path: '/shipEquip', component: shipEquip, name: '船舶设备' },
                   { path: '/harbourEquip', component: harbourEquip, name: '港口设备' }
                ]

            },
            { path: '/unitInfo', component: unitInfo, name: '数据字典' }
            // { path: '/unitInfo', component: unitInfo, name: '车辆设备' },
            // { path: '/unitInfo', component: unitInfo, name: '船泊设备' },
            // { path: '/unitInfo', component: unitInfo, name: '港口设备' },
            // { path: '/unitInfo', component: unitInfo, name: '数据字典' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '统计分析',
        iconCls: 'fa fa-bar-chart-o',
        children: [
            { path: '/barChart', pri:['admin'],component: barChart,  name: '道路客运' },
            { path: '/RoadGoods', pri:['admin'],component: RoadGoods,  name: '道路货运' },
            { path: '/busChart', pri:['admin'],component: busChart,  name: '公交客运' },
            { path: '/taxiChart', pri:['admin'],component: taxiChart,  name: '出租车运输' },
            { path: '/rivTraChart', pri:['admin'],component: rivTraChart,  name: '内河运输' },
            { path: '/OceanFreight', pri:['admin'],component: OceanFreight,  name: '海洋货运' },
            { path: '/OceanPgerTrans', pri:['admin'],component: OceanPgerTrans,  name: '海洋客运' },
            { path: '/PortProduction', pri:['admin'],component: PortProduction,  name: '港口生产' },
            { path: '/allTypChart', pri:['admin'],component: allTypChart,  name: '单位运距能耗指标' },
            { path: '/EnergyStruct', pri:['admin'],component: EnergyStruct,  name: '能耗结构' },
            { path: '/engTypChgChart', pri:['admin'],component: engTypChgChart,  name: '能源类型分时趋势' },
            { path: '/traTypPreChgChart', pri:['admin'],component: traTypPreChgChart,  name: '单位能耗变化趋势' },
            { path: '/TotalEnergy', pri:['admin'],component: TotalEnergy,  name: '总能耗变化趋势' },
            { path: '/CityEnergy', pri:['admin'],component: CityEnergy,  name: '地市能耗构成图' },
            { path: '/TrafficEnergy', pri:['admin'],component: TrafficEnergy,  name: '交通方式能耗构成图' },            
            { path: '/unitInfo', pri:['admin'],component: unitInfo,  name: '年度数据对比' },
          /*  { path: '/unitInfo', component: unitInfo,  name: '分析结果发布' }*/
        ]
    },
    /*{
        path: '/',
        component: Home,
        name: '能耗采集',
        iconCls: 'fa fa-th-list',
        children: [
            { path: '/unitInfo', component: unitInfo, name: '实时采集' },
            { path: '/unitInfo', component: unitInfo, name: '数据校验' }
        ]
    },*/
     {
        path: '/',
        component: Home,
        name: '数据监测',
        iconCls: 'fa fa-eye',
        children: [
            { path: '/relTimDatChart', pri:['admin'],component: relTimDatChart, name: '数据展示' },
            { path: '/GuestCar', pri:['admin'],component: GuestCar, name: '客运车辆' },
            { path: '/goodsCar', pri:['admin'],component: goodsCar, name: '货运车辆' },
            { path: '/taxi', pri:['admin'],component: taxi, name: '出租车' },
            { path: '/bus', pri:['admin'],component: bus, name: '公交车' },
            { path: '/riverShip', pri:['admin'],component: riverShip, name: '内河船舶' },
            { path: '/DataInMap', pri:['admin'],component: DataInMap, name: '专题图展示'}
        ]
    },
    // {
    //     path: '/',
    //     component: Home,
    //     name: '基础数据',
    //     iconCls: 'fa fa-eye',
    //     children: [
    //         { path: '/unitInfo', component: unitInfo, name: '单位信息' },
    //         { path: '/unitScale', component: unitScale, name: '单位规模' },
    //         { path: '/unitManage', component: unitManage, name: '设备管理' ,children:[
    //         { path: '/carEquip', component: carEquip, name: '车辆设备' }
    //         ] },
            
    //     ]
    // },
    /* {
        path: '/',
        component: Home,
        name: '导航一',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/main', component: Main, name: '主页', hidden: true },
            { path: '/table', component: Table, name: 'Table' },
            { path: '/form', component: Form, name: 'Form' },
            { path: '/user', component: user, name: '列表' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '导航二',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/unitInfo', component: unitInfo, name: '页面4' },
            { path: '/unitScale', component: unitScale, name: '页面5' }
        ]
    },*/
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;