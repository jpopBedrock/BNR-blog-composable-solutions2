import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
})
export class AppHome {
  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Composable Solutions</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <ion-grid>
          <ion-row>
            <ion-col class="ion-wrap" size="4">
              <ion-card>
                <ion-card-header>
                  <ion-card-title>Composable Solutions</ion-card-title>
                  <ion-card-subtitle>Demo</ion-card-subtitle>
                </ion-card-header>

                <ion-card-content>
                  <p>
                    Welcome to the Big Nerd Ranch demo on Composable Solutions for the blog post titled{' '}
                    <ion-router-link color="secondary" href="https://bignerdranch.com/blog/composable-solutions/" target="_blank">
                      Why Netlify and Fauna are my foundation for composable solutions
                    </ion-router-link>
                    . This is a demo of a{' '}
                    <ion-router-link color="secondary" href="https://github.com/BNR-Developer-Sandbox/BNR-blog-composable-solutions" target="_blank">
                      start repository
                    </ion-router-link>{' '}
                    with Netlify, Fauna, GitHub Actions, Stencil, and a local shared module.
                  </p>
                </ion-card-content>
              </ion-card>
            </ion-col>

            <ion-col class="ion-wrap" size="4">
              <ion-card>
                <ion-card-header>
                  <ion-card-title>Shared Module</ion-card-title>
                  <ion-card-subtitle>Demo</ion-card-subtitle>
                </ion-card-header>

                <ion-card-content>
                  <p>Use the following buttons to explore demos of the shared module found in the core directory.</p>
                  <br />
                  <ion-button color="secondary" href="/random/number">
                    Random Number
                  </ion-button>
                  <ion-button color="secondary" href="/random/letter">
                    Random Letter
                  </ion-button>
                  <ion-button color="secondary" href="/stores">
                    Stores
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
