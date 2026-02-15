'use client';

import '@styles/globals.css';

import { ErrorView } from './_components';

export default function GlobalError({
  error,
  reset,
}: {
  readonly error: Error & { digest?: string };
  readonly reset: () => void;
}) {
  return (
    <html>
      <body>
        <ErrorView />
      </body>
    </html>
  );
}
