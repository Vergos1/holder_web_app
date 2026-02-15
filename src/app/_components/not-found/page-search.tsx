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
} from '@components-ui';
import { ROUTES } from '@shared-config';
import { SearchIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

export const PageSearch = () => {
  const router = useRouter();
  const routes = Object.values(ROUTES);

  const handleRedirect = (value: RouteItem | null) => {
    if (value) router.push(value.path);
  };

  return (
    <Combobox autoHighlight items={routes} onValueChange={handleRedirect}>
      <ComboboxInput
        className="h-12 w-full"
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
      <ComboboxContent alignOffset={-30} sideOffset={15} className="w-96">
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
  );
};
