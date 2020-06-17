# Service Worker

In this activity, you will be registering a service worker for an 'Image Gallery' app.

## Instructions

* In [index.html](Unsolved/public/index.html), add the following script in the correct position:

```html
<script>
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('service-worker.js').then(
        reg => {
          console.log('We found your service worker file!', reg);
        },
        err => {
          console.log('Service worker registration failed', err);
        }
      );
    });
  }
</script>
```

* In the [public](Unsolved/public/) folder, create a `service-worker.js` file add the following line of code:

```js
console.log("Hi from your service-worker.js file!");
```

* Run `npm install`, `npm seed`, and `npm start` in your command line.

* Navigate to <http://localhost:3001> in Chrome and open the Dev Tools. In the `Application` tab, click on `Service Workers` on the left menu. Check to see if your service worker file was successfully found.

* If done correctly, you should see two messages logged in the console: one from the `service-worker.js` file and one from the script tag that you put in your `index.html` file.