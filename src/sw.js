/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import {registerRoute} from 'workbox-routing';
import {StaleWhileRevalidate} from 'workbox-strategies';

export default function swCustom(params) {
  if (params.debug) {
    console.log('[Docusaurus-PWA][SW]: running swCustom code!', params);
  }

  // Cache responses from external resources
  registerRoute((context) => {
    return [/about/].some((regex) => context.url.href.match(regex));
  }, new StaleWhileRevalidate());
}