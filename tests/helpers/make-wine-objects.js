import Ember from 'ember';

export default function makeWineObjects(total) {

  const names = [
    'Zisola Sicilia',
    'Ribera del Duero',
    'Clos Fourtet St.-Emilion',
    'Blandy Bual Madeira',
    'Baer Ursa',
    'Tenet Syrah Columbia Valley',
    'Oddero Barolo',
    'Lavau Gigondas',
    'Duorum Douro',
    'Philippe Alliet Chinon',
    'Orin Swift Machete',
    'Finca Flichman'
  ];
  const wineObjects = [];

  for (let i=0; i < total; i++) {

    const wineObject = Ember.Object.extend({

      name: Ember.computed(() => names[i]),
      quantity: Ember.computed(() => getRandomInt(10, 300)),

      toString() {
        return `${this.get('name')} (${this.get('quantity')})`;
      }

    }).create();

    wineObjects.push(wineObject);

  }

  return wineObjects;

}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
