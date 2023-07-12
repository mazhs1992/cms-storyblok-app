import StoryblokClient from 'storyblok-js-client';

const storyblok = new StoryblokClient({
    accessToken: process.env.STORYBLOK_API_PUBLIC_KEY,
    cache: {
        clear: 'auto',
        type: 'memory',
    },
});

export default storyblok;
