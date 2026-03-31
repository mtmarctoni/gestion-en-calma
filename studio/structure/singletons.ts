import type { DocumentActionComponent } from 'sanity';

export const singletonTypes = new Set([
  'siteSettings',
  'homePage',
  'aboutPage',
  'servicesPage',
  'contactPage',
]);

const blockedActions = new Set(['delete', 'duplicate', 'unpublish']);

export function filterSingletonActions(actions: DocumentActionComponent[]) {
  return actions.filter((action) => {
    if (!action.action) {
      return true;
    }

    return !blockedActions.has(action.action);
  });
}
