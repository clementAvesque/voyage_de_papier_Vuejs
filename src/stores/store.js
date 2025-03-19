import { defineStore } from 'pinia';

export const useItemsStore = defineStore('items', {
  state: () => ({
    imageNames: ["art.svg","celebrite.svg","cinéma.svg","fait_divers.svg","gastronomie.svg","informatique.svg","mode.svg","politique.svg","sports.svg","voiture.svg","voyager.svg"]
      
  })
})