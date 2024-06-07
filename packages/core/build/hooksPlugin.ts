import { each, isFunction } from 'lodash-es';
import shell from 'shelljs';

export default function hooksPlugin({
  rmFiles = [],
  beforeBuild,
  afterBuild
}: {
  rmFiles?: string[];
  // eslint-disable-next-line @typescript-eslint/ban-types
  beforeBuild?: Function;
  // eslint-disable-next-line @typescript-eslint/ban-types
  afterBuild?: Function;
}) {
  return {
    name: 'custom-hooks-plugin',
    buildStart() {
      each(rmFiles, (fName) => shell.rm('-rf', fName));
      isFunction(beforeBuild) && beforeBuild();
    },
    buildEnd(err?: Error) {
      !err && isFunction(afterBuild) && afterBuild();
    }
  };
}
