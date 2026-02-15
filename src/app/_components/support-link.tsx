import { TypographyMuted } from '@components-ui';

export const SupportLink = () => {
  return (
    <TypographyMuted className="text-sm">
      Потрібна допомога?{' '}
      <a href="#" className="underline">
        Звернутись до служби підтримки
      </a>
    </TypographyMuted>
  );
};
