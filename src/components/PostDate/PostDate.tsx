import { parseISO, format } from 'date-fns';

export const PostDate: React.FC<{ dateString: string }> = ({ dateString }) => (
  <time dateTime={dateString}>
    {format(parseISO(dateString), 'LLLL d, yyyy')}
  </time>
);
