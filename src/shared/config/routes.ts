type RouteConfig = {
  path: string | ((...args: any[]) => string);
  label?: string;
};

export const ROUTES = {
  home: {
    path: '/',
    label: 'Головна',
  },

  login: {
    path: '/login',
    label: 'Вхід',
  },
  signup: {
    path: '/signup',
    label: 'Реєстрація',
  },
} satisfies Record<string, RouteConfig>;
