import { TypographyLarge, TypographyMuted } from '@components-ui';

import { PageSearch } from './page-search';

export const NotFoundView = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="grid max-w-md gap-4 text-center">
        <div>
          <TypographyLarge className="animate-bounce text-7xl font-extrabold">
            404
          </TypographyLarge>
          <TypographyMuted className="max-w-sm text-base">
            The page you&apos;re looking for doesn&apos;t exist. Try searching
            for what you need below.
          </TypographyMuted>
        </div>

        <PageSearch />

        <TypographyMuted className="text-sm">
          Need help?{' '}
          <a href="#" className="underline">
            Contact support
          </a>
        </TypographyMuted>
      </div>
    </div>
  );
};
