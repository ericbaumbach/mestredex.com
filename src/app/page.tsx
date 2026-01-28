// Exemplo de como os dados de uma carta podem ser
interface Card {
  id: string;
  name: string;
  imageUrl: string | null;
  rarity: string;
  type: string;
}

const CardGrid = ({ cards }: { cards: Card[] }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {cards.map((card) => (
        <div key={card.id} className="border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <img src={card.imageUrl ?? 'https://via.placeholder.com/240x330'} alt={card.name} className="w-full" />
          <div className="p-2">
            <h3 className="font-bold text-sm truncate">{card.name}</h3>
            <p className="text-xs text-gray-600">{card.rarity}</p>
          </div>
        </div>
      ))}
    </div>
  );
};


const CatalogPage = () => {
  // Dados de exemplo. No futuro, isso virá do banco de dados (Prisma)
  // usando um Server Component para buscar os dados.
  const sampleCards: Card[] = [
    { id: '1', name: 'Pikachu', imageUrl: 'https://images.pokemontcg.io/sv1/1.png', rarity: 'Common', type: 'Lightning' },
    { id: '2', name: 'Charizard', imageUrl: 'https://images.pokemontcg.io/sv1/2.png', rarity: 'Rare Holo', type: 'Fire' },
    { id: '3', name: 'Bulbasaur', imageUrl: 'https://images.pokemontcg.io/sv1/3.png', rarity: 'Common', type: 'Grass' },
    { id: '4', name: 'Squirtle', imageUrl: 'https://images.pokemontcg.io/sv1/4.png', rarity: 'Common', type: 'Water' },
    { id: '5', name: 'Mewtwo V', imageUrl: 'https://images.pokemontcg.io/sv1/5.png', rarity: 'Ultra Rare', type: 'Psychic' },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Catálogo Público</h2>
      {/* Aqui virão os controles de filtro que interagem com a busca */}
      <CardGrid cards={sampleCards} />
    </div>
  );
};

export default CatalogPage;
