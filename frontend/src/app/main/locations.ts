export abstract class Location {
  constructor(public id: number,
              public name: string = null) {
  }
  abstract copy();
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
  copy() {
    return Building.copy(this)
  }
  static copy(b: Building): Building {
    return new Building(b.id, b.name, Level.copyAll(b.levels))
  }
  static copyAll(bs: Building[]): Building[] {
    return bs.map(b => Building.copy(b))
  }
}

export class Level extends Location {
  constructor(id: number = null,
              name: string = null,
              public rooms: Room[] = []) {
    super(id, name)
  }
  copy() {
    return Level.copy(this)
  }
  static copy(l: Level): Level {
    return new Level(l.id, l.name, Room.copyAll(l.rooms))
  }
  static copyAll(ls: Level[]): Level[] {
    return ls.map(l => Level.copy(l))
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
  copy() {
    return Room.copy(this)
  }
  static copy(r: Room): Room {
    return new Room(r.id, r.name, r.cube, r.area, r.light, r.heating)
  }
  static copyAll(rs: Room[]): Room[] {
    return rs.map(r => Room.copy(r))
  }
}

