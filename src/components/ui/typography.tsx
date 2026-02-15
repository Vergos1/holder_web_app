type List = {
  id: string | number;
  text: string;
};

function TypographyH1({ children }: Readonly<{ children: string }>) {
  return (
    <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
      {children}
    </h1>
  );
}

function TypographyH2({ children }: Readonly<{ children: string }>) {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {children}
    </h2>
  );
}

function TypographyH3({ children }: Readonly<{ children: string }>) {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {children}
    </h3>
  );
}

function TypographyH4({ children }: Readonly<{ children: string }>) {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {children}
    </h4>
  );
}

function TypographyP({ children }: Readonly<{ children: string }>) {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>;
}

function TypographyBlockquote({ children }: Readonly<{ children: string }>) {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>
  );
}

function TypographyList({ list }: Readonly<{ list: List[] }>) {
  return (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
      {list.map(({ text, id }) => (
        <li key={id}>{text}</li>
      ))}
    </ul>
  );
}

function TypographyInlineCode({ children }: Readonly<{ children: string }>) {
  return (
    <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
      {children}
    </code>
  );
}

function TypographyLead({ children }: Readonly<{ children: string }>) {
  return <p className="text-muted-foreground text-xl">{children}</p>;
}

function TypographyLarge({ children }: Readonly<{ children: string }>) {
  return <div className="text-lg font-semibold">{children}</div>;
}

function TypographySmall({ children }: Readonly<{ children: string }>) {
  return <small className="text-sm leading-none font-medium">{children}</small>;
}

function TypographyMuted({ children }: Readonly<{ children: string }>) {
  return <p className="text-muted-foreground text-sm">{children}</p>;
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
