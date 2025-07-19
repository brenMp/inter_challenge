import { Before } from '@cucumber/cucumber';

// Reserve for API setup (tokens, etc.)
Before({ tags: '@api' }, async function() {
  // no-op for now
});
