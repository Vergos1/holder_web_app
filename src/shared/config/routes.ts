type RouteConfig = {
  path: string | ((...args: any[]) => string);
  label?: string;
};

export const ROUTES = {
  home: {
    path: '/',
    label: 'Home',
  },

  login: {
    path: '/login',
    label: 'Login',
  },
  signup: {
    path: '/signup',
    label: 'Sign up',
  },
} satisfies Record<string, RouteConfig>;
