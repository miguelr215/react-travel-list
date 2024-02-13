export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        Start adding some items to your packing list 🚀
      </footer>
    );
  }
  const numItems = items.length;
  const numItemsPacked = items.filter((item) => item.packed).length;
  const packedPercent = Math.round((numItemsPacked / numItems) * 100);
  return (
    <footer className="stats">
      {packedPercent === 100
        ? 'You got everything! Ready to go ✈️'
        : `You have ${numItems} item${
            numItems === 1 ? '' : 's'
          } on your list, and you already packed ${numItemsPacked} item${
            numItemsPacked === 1 ? '' : 's'
          } (${packedPercent}%)`}
    </footer>
  );
}
