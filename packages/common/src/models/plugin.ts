import { WithTimestamps } from '@slangy/common/model/timestamps.js';

export enum PluginType {
  Resource = 'resource',
}

export enum PluginSchemaPropertyType {
  string = 'string',
}

export type PluginSchema = {
  properties: {
    [name: string]: {
      type: PluginSchemaPropertyType;
      metadata?: {
        secret?: boolean;
      };
    };
  };
};

export type PluginConfig = {
  [key: string]: string;
};

export interface Plugin<Config extends PluginConfig = PluginConfig> extends WithTimestamps {
  type: PluginType;
  name: string;
  label: string;
  config: Config;
}
