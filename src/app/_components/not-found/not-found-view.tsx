import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  Kbd,
} from '@components-ui';
import { SearchIcon } from 'lucide-react';

import { PageSearch } from './page-search';

export const NotFoundView = () => {
  return (
    <Empty className="h-full">
      <EmptyHeader className="max-w-2xl">
        <EmptyTitle className="text-7xl font-extrabold">
          404 - Not Found
        </EmptyTitle>
        <EmptyDescription className="max-w-md text-base">
          The page you&apos;re looking for doesn&apos;t exist. Try searching for
          what you need below.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <PageSearch />
        <EmptyDescription className="text-base">
          Need help? <a href="#">Contact support</a>
        </EmptyDescription>
      </EmptyContent>
    </Empty>
  );
};
