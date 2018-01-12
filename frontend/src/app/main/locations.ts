export interface Location {
  id: number
  name: string
}

export class Building implements Location{
  constructor(public id: number = null,
              public name: string = null,
              public levels: Level[] = []) {
  }
}

export class Level implements Location{
  constructor(public id: number = null,
              public name: string = null,
              public rooms: Room[] = []) {
  }
}

export class Room implements Location{
  constructor(public id: number = null,
              public name: string = null,
              public cube: number = null,
              public area: number = null,
              public light: number = null,
              public heating: number = null) {
  }
}

