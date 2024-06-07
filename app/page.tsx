import { getFamily } from '@/actions/db';

export default async function Home() {
  const family = await getFamily('Randall');

  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-4">Home</h1>
      {family && (
        <>
          <p className="mb-3">
            Welcome, {family.parents[0].firstName}{' '}
            {family.parents[0].familyName}!
          </p>
          <p className="mb-3">
            You are married to {family.parents[1].firstName}{' '}
            {family.parents[1].familyName}.
          </p>
          <p className="mb-3">
            You have {family.children.length} children:{' '}
            {family.children.map((child) => (
              <span key={child.firstName}>
                {child.firstName} {child.familyName},{' '}
              </span>
            ))}
          </p>
        </>
      )}
    </main>
  );
}
