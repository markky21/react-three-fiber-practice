type Point = { x: number; y: number }

interface Dictionary<T> {
  [id: string]: T
}

interface Hole {
  start: string// id point
  end: string// id point
  width?: number // probably fixed to 1m
  height: number
  fromGround?: number
}

export interface Walls {
  path: string[] // id pointów
  thickness: number
}

interface Sensor {
  point: string // id pointu
  tag?: string
}

interface RoomObject {
  shapePoints: string[] // id pointów
  height: number
  fromGround?: number
}

interface Path {
  tag?: string
  points: string[] // id pointów
}

interface ProductionHall {
  points: Dictionary<Point>
  walls: Dictionary<Walls>
  holes: Dictionary<Hole>
  sensors: Dictionary<Sensor>
  objects: Dictionary<RoomObject>
  path: Dictionary<Path>
} /*type Point = { x: number, y: number }

interface Dictionary<T> {
  [id: string]: T
}

interface Hole {
  start: number
  width: number
  height: number
  fromGround?: number
}

export interface Wall {
  start: string // id pointu
  end: string // id pointu
  thickness: number
  meta?: {
    holes: Dictionary<Hole>
  }
}

interface Sensor {
  point: string // id pointu
  tag?: string
}

interface RoomObject {
  shapePoints: string[] // id pointów
  height: number
  fromGround?: number
}

interface Path {
  tag?: string
  points: string[] // id pointów
}

interface ProductionHall {
  points: Dictionary<Point>
  walls: Dictionary<Wall>
  sensors: Dictionary<Sensor>
  objects: Dictionary<RoomObject>
  path: Dictionary<Path>
}*/
/*
type Point = [number, number]

interface Dictionary<T> {
  [id: string]: T
}

interface Hole {
  start: number
  width: number
  height: number
  fromGround?: number
}

export interface Wall {
  start: Point
  end: Point
  thickness: number
  meta?: {
    holes: Dictionary<Hole>
  }
}

interface Sensor {
  point: Point
  tag?: string
}

interface RoomObject {
  shapePoints: Point[]
  height: number
  fromGround?: number
}

interface Path {
  tag?: string
  points: Point[]
}

interface ProductionHall {
  walls: Dictionary<Wall>
  sensors: Dictionary<Sensor>
  objects: Dictionary<RoomObject>
  path: Dictionary<Path>
}
*/
