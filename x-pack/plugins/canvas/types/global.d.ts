/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { i18n as I18N } from '@kbn/i18n';

declare global {
  const STUB_CANVAS_I18N: typeof I18N | undefined;
  const canvas: {
    i18n: typeof I18N;
  };
}
