import { Component, Prop, h, State, Listen } from '@stencil/core';
import { loadingController } from '@ionic/core';
import core from 'core/index.js';

@Component({
  tag: 'app-random',
})
export class AppRandom {
  @Prop() type: string;

  @State() local_value: any;
  @State() api_value: any;

  @Listen('ionViewWillEnter')
  async view_will_enter() {
    this.local_value = core.random[this.type]();
    this.api_value = await this.get_random();
  }

  async get_random() {
    const loading = await loadingController.create({
      message: `Loading random ${this.type}...`,
      spinner: 'bubbles',
      duration: 0,
      backdropDismiss: false,
    });
    await loading.present();

    const response = await fetch(`/api/random?type=${this.type}`, {
      method: 'GET',
    });
    const json = await response.json();

    loading.dismiss();

    return json;
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-back-button default-href="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Random {this.type}</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <ion-grid>
          <ion-row>
            <ion-col size="4">
              <ion-card>
                <ion-card-header>
                  <ion-card-title>Shared Module</ion-card-title>
                  <ion-card-subtitle>Demo</ion-card-subtitle>
                </ion-card-header>

                <ion-card-content>
                  <p>This demo uses the shared core module locally and through the api.</p>
                </ion-card-content>
              </ion-card>
            </ion-col>

            <ion-col size="4">
              <ion-card>
                <ion-card-header>
                  <ion-card-title>Local Call</ion-card-title>
                  <ion-card-subtitle>Demo</ion-card-subtitle>
                </ion-card-header>

                <ion-card-content>
                  <ion-text class="ion-padding-bottom">
                    <h1>{this.local_value}</h1>
                  </ion-text>
                  <br />
                  <ion-button
                    color="secondary"
                    onClick={() => {
                      this.local_value = core.random[this.type]();
                    }}
                  >
                    Get Local Random {this.type}
                  </ion-button>
                </ion-card-content>
              </ion-card>
            </ion-col>

            <ion-col size="4">
              <ion-card>
                <ion-card-header>
                  <ion-card-title>API Call</ion-card-title>
                  <ion-card-subtitle>Demo</ion-card-subtitle>
                </ion-card-header>

                <ion-card-content>
                  <ion-text>
                    {this.api_value ? <h1>{this.api_value?.random}</h1> : <ion-skeleton-text animated style={{ height: '2em', width: '2em' }}></ion-skeleton-text>}
                  </ion-text>
                  <br />
                  <ion-button
                    color="secondary"
                    onClick={async () => {
                      this.api_value = await this.get_random();
                    }}
                  >
                    Get API Random {this.type}
                  </ion-button>
                </ion-card-content>
              </ion-card>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>,
    ];
  }
}
