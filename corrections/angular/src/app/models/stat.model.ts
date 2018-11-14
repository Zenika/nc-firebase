import { Twitter } from './twitter.model'

export interface Stat {
  timestamp: any;
  twitters: any;
  [key: string]: Twitter;
}
