'use client';

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  InputGroupAddon,
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
  Kbd,
  TypographyLarge,
  TypographyMuted,
} from '@components-ui';
import { ROUTES } from '@shared-config';
import { SearchIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { SupportLink } from './_components';

type RouteItem = { path: string; label: string };

export default function NotFoundPage() {
  const router = useRouter();
  const routes = Object.values(ROUTES);

  const handleRedirect = (value: RouteItem | null) => {
    if (value) router.push(value.path);
  };

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

        <Combobox autoHighlight items={routes} onValueChange={handleRedirect}>
          <ComboboxInput
            className="h-10 w-full"
            placeholder="Try searching for pages..."
            showTrigger={false}
          >
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">
              <Kbd>/</Kbd>
            </InputGroupAddon>
          </ComboboxInput>
          <ComboboxContent alignOffset={-30} sideOffset={10} className="w-96">
            <ComboboxEmpty>No results found.</ComboboxEmpty>
            <ComboboxList>
              {item => (
                <ComboboxItem key={item.path} value={item}>
                  <Item size="xs" className="p-0">
                    <ItemContent>
                      <ItemTitle className="whitespace-nowrap">
                        {item.label}
                      </ItemTitle>
                      <ItemDescription className="text-xs text-gray-500">
                        {item.path}
                      </ItemDescription>
                    </ItemContent>
                  </Item>
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>

        <SupportLink />
      </div>
    </div>
  );
}
