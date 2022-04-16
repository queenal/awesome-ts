import { logger } from '../utils/logger'

export class Animal {
    state: any
    constructor (state: string) { this.state = state }

    run () {
      logger.info(`${this.state}`)
    }
}
