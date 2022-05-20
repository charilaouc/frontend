export function getAssetURL(id){
  if (!id) return null;
  return `${process.env.REST_GRAPHQL_API_URL}/assets/${id}`;
}