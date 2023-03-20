// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../libs/prisma';
import type { Post } from '@prisma/client';

export default async function handle(req: NextApiRequest, res: NextApiResponse<Post[]>) {
  const data = await prisma.post.findMany()
  res.status(200).json(data)
}
