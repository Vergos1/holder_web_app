import { cn } from '@shared-lib';

type TypographyListProps = Readonly<{
  list: { id: string | number; text: string }[];
  className?: string;
}>;

type TypographyTextProps = Readonly<{
  children: string;
  className?: string;
}>;

function TypographyH1({ children, className }: TypographyTextProps) {
  return (
    <h1
      className={cn(
        'scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance',
        className,
      )}
    >
      {children}
    </h1>
  );
}

function TypographyH2({ children, className }: TypographyTextProps) {
  return (
    <h2
      className={cn(
        'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
        className,
      )}
    >
      {children}
    </h2>
  );
}

function TypographyH3({ children, className }: TypographyTextProps) {
  return (
    <h3
      className={cn(
        'scroll-m-20 text-2xl font-semibold tracking-tight',
        className,
      )}
    >
      {children}
    </h3>
  );
}

function TypographyH4({ children, className }: TypographyTextProps) {
  return (
    <h4
      className={cn(
        'scroll-m-20 text-xl font-semibold tracking-tight',
        className,
      )}
    >
      {children}
    </h4>
  );
}

function TypographyP({ children, className }: TypographyTextProps) {
  return (
    <p className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}>
      {children}
    </p>
  );
}

function TypographyBlockquote({ children, className }: TypographyTextProps) {
  return (
    <blockquote className={cn('mt-6 border-l-2 pl-6 italic', className)}>
      {children}
    </blockquote>
  );
}

function TypographyList({ list, className }: TypographyListProps) {
  return (
    <ul className={cn('my-6 ml-6 list-disc [&>li]:mt-2', className)}>
      {list.map(({ text, id }) => (
        <li key={id}>{text}</li>
      ))}
    </ul>
  );
}

function TypographyInlineCode({ children, className }: TypographyTextProps) {
  return (
    <code
      className={cn(
        'bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
        className,
      )}
    >
      {children}
    </code>
  );
}

function TypographyLead({ children, className }: TypographyTextProps) {
  return (
    <p className={cn('text-muted-foreground text-xl', className)}>{children}</p>
  );
}

function TypographyLarge({ children, className }: TypographyTextProps) {
  return (
    <div className={cn('text-lg font-semibold', className)}>{children}</div>
  );
}

function TypographySmall({ children, className }: TypographyTextProps) {
  return (
    <small className={cn('text-sm leading-none font-medium', className)}>
      {children}
    </small>
  );
}

function TypographyMuted({ children, className }: TypographyTextProps) {
  return (
    <p className={cn('text-muted-foreground text-sm', className)}>{children}</p>
  );
}

export {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyInlineCode,
  TypographyLarge,
  TypographyLead,
  TypographyList,
  TypographyMuted,
  TypographyP,
  TypographySmall,
};
