import { cloneDeep } from 'lodash-es';
import { SetupStoreId } from '@/constants';

/**
 * The plugin reset the state of the store which is written by setup syntax
 *
 * @param context
 */
export function resetSetupStore(context) {
  const setupSyntaxIds = Object.values(SetupStoreId);

  if (setupSyntaxIds.includes(context.store.$id)) {
    const { $state } = context.store;

    const defaultStore = cloneDeep($state);

    context.store.$reset = () => {
      context.store.$patch(defaultStore);
    };
  }
}
