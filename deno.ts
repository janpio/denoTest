
  import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
  import { PrismaClient } from './generated/client/deno/edge.ts'

  const prisma = new PrismaClient({
      log: ['query', 'info', 'warn', 'error'],
    })

  async function handler(_req: Request) {
    const users = await prisma.user.findMany()
    const body = JSON.stringify(users, null, 2);
    return new Response(body, {
      headers: { "content-type": "application/json; charset=utf-8" },
    });
  }
  
  serve(handler);