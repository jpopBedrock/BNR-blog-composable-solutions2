import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
})
export class AppRoot {
  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/" component="app-home" />
          <ion-route url="/random/:type" component="app-random" />
          <ion-route url="/stores" component="app-stores" />
        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }
}
