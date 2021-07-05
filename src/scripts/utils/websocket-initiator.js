import NotificationHelper from './notification-helper';

const WebSocketInitiator = {
  init(url) {
    const webSocket = new WebSocket(url);
    webSocket.onmessage = this._onMessageHandler;
  },

  _onMessageHandler(message) {
    const movie = JSON.parse(message.data);
    NotificationHelper.sendNotification({
      title: `${movie.title} is on cinema!`,
      options: {
        icon: 'icons/icon-192x192.png',
        body: movie.overview,
        vibrate: [200, 100, 200],
      },
    });
  },
};

export default WebSocketInitiator;
