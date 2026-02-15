import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  InputGroupAddon,
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
      <ComboboxContent alignOffset={-28} className="w-60">
        <ComboboxEmpty>No results found.</ComboboxEmpty>
        <ComboboxList>
          {item => (
            <ComboboxItem key={item.path} value={item}>
              {item.label}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
};
