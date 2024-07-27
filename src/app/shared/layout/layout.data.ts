import { ASSETS_ICONS } from '../constants/global.constants';

interface SidebarItems {
  title: string;
  icon: string;
  route: string;
}
export const sidebarTools: SidebarItems[] = [
  {
    title: 'Home',
    icon: `${ASSETS_ICONS}home-light.svg`,
    route: '/home',
  },
  {
    title: 'Offers',
    icon: `${ASSETS_ICONS}diamond-light.svg`,
    route: '/offers',
  },

  {
    title: 'Users',
    icon: `${ASSETS_ICONS}customers-light.svg`,
    route: '/users',
  },
  {
    title: 'Stores',
    icon: `${ASSETS_ICONS}shop-light.svg`,
    route: '/stores',
  },
  {
    title: 'Categories',
    icon: `${ASSETS_ICONS}categories-light.svg`,
    route: '/categories',
  },
  {
    title: 'Orders',
    icon: `${ASSETS_ICONS}orders-light.svg`,
    route: 'orders/list',
  },
  {
    title: 'Income',
    icon: `${ASSETS_ICONS}income-light.svg`,
    route: 'income/dashboard',
  },
  {
    title: 'Promote',
    icon: `${ASSETS_ICONS}promote-light.svg`,
    route: '/promte',
  },
];
export const sidebarInsights: SidebarItems[] = [
  {
    title: 'Inbox',
    icon: `${ASSETS_ICONS}inbox.svg`,
    route: '/inbox',
  },
  {
    title: 'Notifications',
    icon: `${ASSETS_ICONS}notification-light.svg`,
    route: '/notifications',
  },

  {
    title: 'Reviews',
    icon: `${ASSETS_ICONS}reviews.svg`,
    route: '/reviews',
  },
];
