import adapter from '@sveltejs/adapter-static';

const [githubOwner, githubRepository] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const base =
  process.env.GITHUB_ACTIONS === 'true' &&
  githubRepository &&
  githubRepository !== `${githubOwner}.github.io`
    ? `/${githubRepository}`
    : '';

const config = {
  kit: {
    adapter: adapter({
      fallback: '404.html'
    }),
    paths: {
      base
    },
    prerender: {
      handleHttpError: 'warn'
    }
  }
};

export default config;
