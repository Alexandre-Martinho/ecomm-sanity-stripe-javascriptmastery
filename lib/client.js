import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'ptljyovv',
  dataset: 'production',
  apiVersion: '2022-03-10',
  useCdn: true,
  // token: process.env.NEXT_PUBLIC_SANITY_TOKEN
  token: 'skJ4YzsdxJFf3uwzZD0ZIuFyEQ5H5H6Q2zgQmvUskqRf82vpLCFS39Sll481g6UPToAFihIn8AKtCsgr5UKtuyUQqdwzk8rjQtUwSvjwD3JEGEfnERGDAj25e9lpm9jCPmxqnNebGfbuyJ40qYelzQpmJhLUHLC7ym65luFSrbvGroxYMzyk '
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);