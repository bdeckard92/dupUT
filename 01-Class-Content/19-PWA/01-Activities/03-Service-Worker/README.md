# Service Worker

In this activity, you will be registering a service worker for an 'Image Gallery' app. The code for the app has been provided already. You are only responsible for registering a service worker.

## Instructions

* In [index.html](Unsolved/public/index.html), add the following script:

```html
<script type="text/javascript">
  (function() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('./service-worker.js')
        .then(() => console.log('Service Worker registered successfully.'))
        .catch(error =>
          console.log('Service Worker registration failed:', error)
        );
    }
  })();
</script>
```

* In the [public](Unsolved/public/) folder, create a `service-worker.js` file and have it print out a message in the console, i.e. "Hi from your service-worker.js file!!"

* Run `npm install`, `npm seed`, and `npm start` in your command line.

* Navigate to <http://localhost:3001> in Chrome and open the Dev Tools. In the `Application` tab, click on `Service Workers` on the left menu. Check to see if your service worker file was successfully found.

* If done correctly, you should see two messages logged in the browser console: one from the `service-worker.js` file and one from the script tag that you put in your `index.html` file.