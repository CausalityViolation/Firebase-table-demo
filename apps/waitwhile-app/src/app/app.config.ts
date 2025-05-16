import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';

const firebaseConfig = {
  apiKey: 'AIzaSyBX5azNymYNaFb2DPdLUFVmZV1JwUsLclY',
  authDomain: 'waitwhile-uppgift.firebaseapp.com',
  projectId: 'waitwhile-uppgift',
  storageBucket: 'waitwhile-uppgift.firebasestorage.app',
  messagingSenderId: '144458546078',
  appId: '1:144458546078:web:f27b5cbfe13a7ef3de748f',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
};
