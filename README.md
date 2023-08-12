# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Create and .env file with the following variables

```bash
DATABASE_URL='mysql://86bh6kqdbfmqndt0bimw:********************@aws.connect.psdb.cloud/test?ssl={"rejectUnauthorized":true}'
```

## Install dependencies

```bash
pnpm install
```

## Run Drizzle Kit to sincronize the schema with the planetScale database

```bash
pnpm db:push
```

## Developing

Start a development server:

```bash
pnpm run dev

# or start the server and open the app in a new browser tab
pnpm run dev -- --open
```

## Building

To create a production version of your app:

```bash
pnpm run build
```

You can preview the production build with `pnpm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
