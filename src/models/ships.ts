export interface IShip {
  name: string,
  model: string,
  manufacturer: string,
  cost_in_credits: string,
  length: string,
  max_atmosphering_speed: string,
  crew: string,
  passengers: string,
  cargo_capacity: string,
  consumables: string,
  hyperdrive_rating: string,
  MGLT: string,
  starship_class: string
  pilots: Array<string>,
  films: Array<string>,
  created: string,
  edited: string,
  url: string,
}

export interface HttpShips {
  count: number
  next: string
  previous: string | null
  results: IShip[]
}
