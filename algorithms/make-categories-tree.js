/**
 * Make Tree of given categories recusively
 * @param categories Array of categories {id: '', parent: ''}
 *
 */
function makeTree(categories, parent = null) {
  let node = {};
  let filtered = categories.filter((c) => c.parent === parent);

  if (filtered.length === 0) return null;
  else filtered.forEach((c) => (node[c.id] = makeTree(categories, c.id)));

  return node;
}

module.exports.makeTree = makeTree;
