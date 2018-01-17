export abstract class Location {
  constructor(public id: number,
              public name: string = null) {
  }
  static copy(l: any):any {
    if (l.levels) {
      return Building.copy(l)
    } else if (l.rooms) {
      return Level.copy(l)
    } else {
      return Room.copy(l)
    }
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

  static copy(r: Room): Room {
    return new Room(r.id, r.name, r.cube, r.area, r.light, r.heating)
  }
  static copyAll(rs: Room[]): Room[] {
    return rs.map(r => Room.copy(r))
  }

  static equals(r1: Room, r2: Room): boolean {
    if (!r1 && !r2) return true;
    if (!r1 || !r2) return false;
    return r1.light === r2.light &&
      r1.area === r2.area &&
      r1.cube === r2.cube &&
      r1.heating == r2.heating &&
      r1.id === r2.id &&
      r1.name === r2.name
  }
}

