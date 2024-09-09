import {AnalysisView, AssetsView, DetailView, UserView} from '../views';

type TBottomTabsMenu = {
  label: string;
  screen: () => React.JSX.Element;
};

export const bottomTabsMenu: TBottomTabsMenu[] = [
  {
    label: '明细',
    screen: DetailView,
  },
  {
    label: '分析',
    screen: AnalysisView,
  },
  {
    label: '钱包',
    screen: AssetsView,
  },
  {
    label: '我',
    screen: UserView,
  },
];
