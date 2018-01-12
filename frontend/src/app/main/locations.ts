export abstract class Location {
  constructor(public id: number,
              public name: string = null) {
  }
}

export enum LocationType {
  ROOM, LEVEL, BUILDING
}

export class Building extends Location {
  constructor(id: number = null,
              name: string = null,
              public levels: Level[] = []) {
    super(id, name)
  }
}

export class Level extends Location {
  constructor(id: number = null,
              name: string = null,
              public rooms: Room[] = []) {
    super(id, name)
  }
}

export class Room extends Location {
  constructor(id: number = null,
              name: string = null,
              public cube: number = null,
              public area: number = null,
              public light: number = null,
              public heating: number = null) {
    super(id, name)
  }
}

