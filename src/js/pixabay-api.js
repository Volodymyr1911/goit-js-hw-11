export function searchImg(query) {
  const mainUrl = 'https://pixabay.com/api/';
  const params = new URLSearchParams({
    key: '44000662-4324e542e50ef447eeba96a2f',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  const url = `${mainUrl}?${params}`;
  return fetch(url).then(res => {
    if (!res) {
      throw new Error(res.statusText);
    }
    return res.json();
  });
}
