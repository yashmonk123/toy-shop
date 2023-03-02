window.addEventListener('load', () => {
    registerSW();
    });
  
    // Register the Service Worker
    async function registerSW() {
    if ('serviceWorker' in navigator) {
      try {
      await navigator.serviceworker.register('serviceworker.js');
      }
      catch (e) {
      console.log('SW registration failed');
      }
    }
    }
    
    

if ('serviceWorker' in navigator) { navigator.serviceWorker.register('/serviceworker.js').then(function(registration) {
console.log('Registration successful, scope is:', registration.scope);
}).catch(function(error) {
console.log('Service worker registration failed, error:', error);
});
}

navigator.serviceWorker.register('/serviceworker.js', { scope: '/app/'});