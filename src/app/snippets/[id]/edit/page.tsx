import { notFound } from 'next/navigation';
import  { db } from '@/db';

interface SnippetEditPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function SnippetEditPage(props: SnippetEditPageProps) {
  const { id } = await props.params;
 
  const snippetId = parseInt(id);
  const snippet = await db.snippet.findFirst({
    where: { id: snippetId },
  });

  if(!snippet) {
    return notFound();
  }

  return (
    <div>Editing snippet with title {snippet.title}</div>
  )
}