import Prismic from 'prismic-javascript';
import { DefaultClient } from 'prismic-javascript/types/client';

const apiEndpoint = process.env.PRISMIC_API_ENDPOINT!;
const accessToken = process.env.PRISMIC_ACCESS_TOKEN;

export function getPrismicClient(req?: unknown): DefaultClient {
  const prismic = Prismic.client(apiEndpoint, {
    req,
    accessToken
  });
  
  return prismic;


}
