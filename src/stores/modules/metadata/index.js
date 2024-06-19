import { SetupStoreId } from '@/constants';
import { defineStore, acceptHMRUpdate } from 'pinia';

export const MetadataStore = defineStore(SetupStoreId.Metadata, {
  state: () => ({
    metadatas: []
  }),
  getters: {},
  actions: {
    setMetadata(metadatas) {
      this.metadatas = metadatas ?? [];
    }
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(MetadataStore, import.meta.hot));
}
