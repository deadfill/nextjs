// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../libs/prisma';
import type { Product } from '@prisma/client';

export default async function handle(req: NextApiRequest, res: NextApiResponse<Product[]>) {
  const { query } = req;
  const queryParams = query.q;
  const data = await prisma.product.findMany({
    where: {
      name: {
        contains: queryParams?.toString(),
        mode: 'insensitive',
      }
    }
  })
  res.status(200).json(data)
}