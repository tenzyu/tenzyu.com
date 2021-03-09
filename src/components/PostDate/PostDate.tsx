import { parseISO, format } from 'date-fns';

function PostDate({ dateString }: { dateString: string }): JSX.Element {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}

export { PostDate };
