import { isString } from 'lodash-es';

class QiUIError extends Error {
  constructor(msg: string) {
    super(msg);
    this.name = 'QiUIError';
  }
}

export function throwError(scope: string, msg: string) {
  throw new QiUIError(`[${scope}]:${msg}`);
}

export function debugWarn(error: Error): void;
export function debugWarn(scope: string, msg: string): void;
export function debugWarn(scope: string | Error, msg?: string): void {
  if (process.env.NODE_ENV !== 'production') {
    const error = isString(scope) ? new QiUIError(`[${scope}]:${msg}`) : scope;
    /* eslint-disable no-console */
    console.warn(error);
    /* eslint-enable no-console */
  }
}
