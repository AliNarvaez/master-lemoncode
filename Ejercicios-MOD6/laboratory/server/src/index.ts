import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { cors } from 'hono/cors';
import { serve } from '@hono/node-server';
import { character } from './mock-data.js';
import { CharacterListResponse } from './model.js';

let db = {
  character,
};

const app = new Hono();
app.use(logger());

app.use('/api/*', cors());

app.get('/api/character', async (context) => {
  const response: CharacterListResponse = {
    info: {
      count: db.character.length,
    },
    results: db.character,
  };
  return context.json(response);
});

app.get('/api/character/:id', (context) => {
  return context.json(
    db.character.find((c) => c.id === Number(context.req.param('id')))
  );
});

app.put('/api/character/:id', async (context) => {
  const id = Number(context.req.param('id'));
  const character = await context.req.json();
  db.character = db.character.map((c) =>
    c.id === id ? { ...c, ...character } : c
  );
  return context.body(null, 204);
});

serve({ fetch: app.fetch, port: 3000 }, (info) => {
  console.log(`API running on ${info.port}`);
});
