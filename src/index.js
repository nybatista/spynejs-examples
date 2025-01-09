//main SCSS file for styling
import './scss/main.scss';

// SpyneJS core imports
import { SpyneApp, ChannelFetch } from 'spyne';

// Your main AppView
import { AppView } from './app/app-view.js';

// A custom channel that combines data from other channels
import { ChannelMemeGenerator } from 'channels/channel-meme-generator.js';

// Basic SpyneApp config object
const config = {
  debug: true,
};

// Initialize the Spyne application
SpyneApp.init(config);

// Register the ChannelMemeGenerator channel
SpyneApp.registerChannel(new ChannelMemeGenerator());

/**
 * TO Use NASA APOD (picture of the day) API requires a private key
 * https://api.nasa.gov
 *
 * **/
//const nasaPrivateKey = 'myprivatekey';
//const nasaUrl = `https://api.nasa.gov/planetary/apod?api_key=${nasaPrivateKey}&count=1`;

// Define API endpoints
const imgUrl = 'https://dog.ceo/api/breeds/image/random';
const txtUrl = '//api.quotable.io/random';

// Register a ChannelFetch for "CHANNEL_MEME_IMG"
SpyneApp.registerChannel(
  new ChannelFetch('CHANNEL_MEME_IMG', {
    url: imgUrl,
    map: (d) => {
      if (Array.isArray(d)) {
        d = d[0];
        d.message = d.message ?? d.url;
      }
      return d;
    },
  }),
);

// Register a ChannelFetch for "CHANNEL_MEME_TXT"
SpyneApp.registerChannel(
  new ChannelFetch('CHANNEL_MEME_TXT', {
    url: txtUrl,
  }),
);

// Conditionally load additional dev tools
if (process.env.NODE_ENV === 'development') {
  import('./dev-tools.js');
}

// Create an instance of the main AppView and attach it to the body tag
new AppView().appendToDom(document.body);
