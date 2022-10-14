import { Component, h, State, Listen } from '@stencil/core';
import { loadingController } from '@ionic/core';

@Component({
  tag: 'app-stores',
})
export class AppStores {
  @State() stores: any;

  @Listen('ionViewWillEnter')
  async view_will_enter() {
    this.stores = await this.get_stores();
  }

  async get_stores() {
    const loading = await loadingController.create({
      message: `Loading stores...`,
      spinner: 'bubbles',
      duration: 0,
      backdropDismiss: false,
    });
    await loading.present();

    const response = await fetch(`/api/stores`, {
      method: 'GET',
    });
    const json = await response.json();

    loading.dismiss();

    return json;
  }

  render_store(store) {
    return (
      <ion-card>
        <ion-card-header>
          <ion-card-title>{store.data.name}</ion-card-title>
          <ion-card-subtitle>
            {store.data.address.street} {store.data.address.city}, {store.data.address.state} {store.data.address.zipCode}
          </ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          <ion-text></ion-text>
        </ion-card-content>
      </ion-card>
    );
  }

  render_stores() {
    if (this.stores) {
      return this.stores?.data?.map(this.render_store);
    } else {
      return <ion-skeleton-text animated style={{ height: '2em', width: '2em' }}></ion-skeleton-text>;
    }
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-back-button default-href="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Stores</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <p>This demo makes an fetch request to /api/stores which queries Fauna for a list of stores which are rendered below.</p>

        {this.render_stores()}
      </ion-content>,
    ];
  }
}
