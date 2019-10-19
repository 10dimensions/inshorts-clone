import {Platform} from 'react-native';

export const BASE_URL = 'https://newsapi.org/v2/everything';
export const INSHORTS_BASE_URL = 'https://inshorts.com/api/en';
export const PAGE_SIZE = 10;

const OS = Platform.OS;
const fontFamilies =
  OS === 'android'
    ? {
        thin: 'Roboto-Thin',
        light: 'Roboto-Light',
        regular: 'Roboto-Regular',
        medium: 'Roboto-Medium',
        bold: 'Roboto-Bold',
        black: 'Roboto-Black',
      }
    : {
        thin: 'System',
        light: 'System',
        regular: 'System',
        medium: 'System',
        bold: 'System',
        black: 'System',
      };

export const FONT_THIN = fontFamilies.thin;
export const FONT_LIGHT = fontFamilies.light;
export const FONT_REGULAR = fontFamilies.regular;
export const FONT_MEDIUM = fontFamilies.medium;
export const FONT_BOLD = fontFamilies.bold;
export const FONT_BLACK = fontFamilies.black;

export const DEFAULT_HEADERS = {
  headers: {'x-api-key': '1b54bb7b253c46e4ad6d3d85c4bf1576'},
};

export const NEWS_CATEGORIES = [
  {
    id: 'top_stories',
    icon: 'https://inshorts.com/assets/images/cat_top_stories.png',
    label: 'TOP STORIES',
  },
  {
    id: 'all_news',
    icon: 'https://inshorts.com/assets/images/cat_all_news.png',
    label: 'ALL NEWS',
  },
  {
    id: 'trending',
    icon: 'https://inshorts.com/assets/images/cat_trending.png',
    label: 'TRENDING',
  },
  {
    id: 'bookmarks',
    icon: 'https://inshorts.com/assets/images/cat_bookmarks.png',
    label: 'BOOKMARKS',
  },
];

export const momentCalendarConfig = {
  sameDay: '[Today]',
  nextDay: '[Tomorrow]',
  nextWeek: 'dddd',
  lastDay: '[Yesterday]',
  lastWeek: '[Last] dddd',
  sameElse: 'DD/MM/YYYY',
};
