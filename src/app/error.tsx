'use client';

import { Button, TypographyLarge, TypographyMuted } from '@components-ui';
import { ROUTES } from '@shared-config';
import { getPath } from '@shared-utils';
import Link from 'next/link';
import { useEffect } from 'react';

import { SupportLink } from './_components';

type ErrorPageProps = Readonly<{
  error: Error & { digest?: string };
  reset: () => void;
}>;

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error('Error:', error);
  }, [error]);

  return (
    <div className="flex h-full items-center justify-center">
      <div className="grid max-w-md gap-4 text-center">
        <div className="flex flex-col items-center gap-2">
          <TypographyLarge className="text-4xl font-extrabold">
            Упс! <br /> Не хвилюйтесь — ми вже працюємо над виправленням.
          </TypographyLarge>

          <TypographyMuted className="max-w-sm text-base">
            Спробуйте перезавантажити сторінку або повернутися на головну.
          </TypographyMuted>
        </div>
        <div className="flex justify-center gap-4">
          <Button asChild>
            <Link href={getPath(ROUTES.home)}>На головну</Link>
          </Button>
          <Button variant="outline" onClick={reset}>
            Перезавантажити
          </Button>
        </div>

        <SupportLink />
      </div>
    </div>
  );
}
