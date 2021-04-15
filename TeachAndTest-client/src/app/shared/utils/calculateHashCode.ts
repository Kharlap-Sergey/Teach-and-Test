export function getHashCode(target: any): number {
  if (!(target instanceof Object)) {
    return getHashCodeForPlain(target);
  }

  let hash = 0;

  for (let property in target) {
    hash +=
      getHashCodeForPlain(property) +
      getHashCode(target[property]);
  }
  return hash;
}

function getHashCodeForPlain(target: any): number {
  target = target ?? 0;
  target = target.toString();
  var hash = 0;
  for (var i = 0; i < target.length; i++) {
    var character = target.charCodeAt(i);
    hash = (hash << 5) - hash + character;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
}
