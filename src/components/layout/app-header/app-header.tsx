import {
  AppLogo,
  Button,
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@components-ui';
import { ROUTES } from '@shared-config';
import { getPath } from '@shared-utils';
import { Menu } from 'lucide-react';
import Link from 'next/link';

const navItems = [
  {
    title: 'About',
    href: '#',
  },
  {
    title: 'Services',
    href: '#',
  },
  {
    title: 'Pricing',
    href: '#',
  },
  {
    title: 'Contact',
    href: '#',
  },
];

export const AppHeader = () => {
  return (
    <header className="mx-auto flex h-18 w-full max-w-7xl items-center justify-between gap-12 px-6 sm:px-4">
      <Link href={getPath(ROUTES.home)}>
        <AppLogo size={36} />
      </Link>
      <div className="hidden justify-end gap-3 lg:inline-flex">
        <nav className="flex gap-1">
          {navItems.map(item => (
            <Button key={item.title} asChild variant={'ghost'}>
              <a href={item.href}>{item.title}</a>
            </Button>
          ))}
        </nav>
        <Button asChild variant={'ghost'}>
          <Link href={getPath(ROUTES.login)}>Log in</Link>
        </Button>
        <Button asChild>
          <Link href={getPath(ROUTES.signup)}>Sign up</Link>
        </Button>
      </div>
      <Sheet>
        <SheetTrigger asChild className="ml-auto lg:hidden">
          <Button variant="outline" size="icon" aria-label="Open Menu">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="flex w-[90%] max-w-sm flex-col px-6 py-6"
        >
          <SheetTitle>
            <Link href={getPath(ROUTES.home)}>
              <AppLogo size={36} withLabel />
            </Link>
          </SheetTitle>
          <nav className="-mx-4 my-6 flex flex-1 flex-col gap-2">
            {navItems.map(item => (
              <Button
                key={item.title}
                asChild
                className="justify-start text-base"
                variant={'ghost'}
              >
                <a href={item.href}>{item.title}</a>
              </Button>
            ))}
          </nav>
          <div className="mt-auto grid gap-3">
            <Button variant={'outline'} asChild>
              <Link href={getPath(ROUTES.login)}>Log in</Link>
            </Button>
            <Button asChild>
              <Link href={getPath(ROUTES.signup)}>Get Started</Link>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};
