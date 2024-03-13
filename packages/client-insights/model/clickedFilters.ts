// Code generated by OpenAPI Generator (https://openapi-generator.tech), manual changes will be lost - read more on https://github.com/algolia/api-clients-automation. DO NOT EDIT.

import type { ClickEvent } from './clickEvent';

/**
 * Use this event to track when users click facet filters in your user interface.
 */
export type ClickedFilters = {
  /**
   * Event name, up to 64 ASCII characters.  Consider naming events consistently—for example, by adopting Segment\'s [object-action](https://segment.com/academy/collecting-data/naming-conventions-for-clean-data/#the-object-action-framework) framework.
   */
  eventName: string;

  eventType: ClickEvent;

  /**
   * Index name to which the event\'s items belong.
   */
  index: string;

  /**
   * Applied facet filters.  Facet filters are `facet:value` pairs. Facet values must be URL-encoded, such as, `discount:10%25`.
   */
  filters: string[];

  /**
   * Anonymous or pseudonymous user identifier.  Don\'t use personally identifiable information in user tokens. For more information, see [User token](https://www.algolia.com/doc/guides/sending-events/concepts/usertoken/).
   */
  userToken: string;

  /**
   * Identifier for authenticated users.  When the user signs in, you can get an identifier from your system and send it as `authenticatedUserToken`. This lets you keep using the `userToken` from before the user signed in, while providing a reliable way to identify users across sessions. Don\'t use personally identifiable information in user tokens. For more information, see [User token](https://www.algolia.com/doc/guides/sending-events/concepts/usertoken/).
   */
  authenticatedUserToken?: string;

  /**
   * Timestamp of the event in milliseconds in [Unix epoch time](https://wikipedia.org/wiki/Unix_time). By default, the Insights API uses the time it receives an event as its timestamp.
   */
  timestamp?: number;
};
