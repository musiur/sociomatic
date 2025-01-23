import GigList from './_utils/components/gig-list';

export default function GigsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Fiverr Gigs</h1>
      <GigList />
    </div>
  );
}