import { Twitter } from './twitter.model'
import { Timestamp } from './timestamp.model'

export interface Stat {
  timestamp: Timestamp;
  twitters: {
    [twitter: string]: Twitter;
  }
}
