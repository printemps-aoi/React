function BookCard({ title, author, rating }) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-gray-500 text-sm">著者: {author}</p>
      <p className="text-yellow-500">{rating}</p>
    </div>
  );
}

function App() {
  return (
    <main>
      <h1 className="text-2xl font-bold mb-4">
        本紹介
      </h1>

      <BookCard
        title="殺し屋の営業術"
        author="野宮有"
        rating="★★★★☆"
      />

      <BookCard
        title="ハイキュー"
        author="???"
        rating="★★★★★"
      />

      <BookCard
        title="ディズニー攻略本"
        author="ミッキーマウス"
        rating="★★★☆☆"
      />
    </main>
  );
}

export default App;