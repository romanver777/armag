export interface IAsteroids {
  links: ILinks;
  element_count: number;
  near_earth_objects: INearEarthObjects;
}

export interface ILinks {
  next: string;
  previous: string;
  self: string;
}

export interface INearEarthObjects {
  [name: string]: IAsteroid[];
}

export interface IAsteroid {
  links: Links2;
  id: string;
  neo_reference_id: string;
  name: string;
  nasa_jpl_url: string;
  absolute_magnitude_h: number;
  estimated_diameter: EstimatedDiameter;
  is_potentially_hazardous_asteroid: boolean;
  close_approach_data: CloseApproachDaum[];
  is_sentry_object: boolean;
}

export interface Links2 {
  self: string;
}

export interface EstimatedDiameter {
  kilometers: Kilometers;
  meters: Meters;
  miles: Miles;
  feet: Feet;
}

export interface Kilometers {
  estimated_diameter_min: number;
  estimated_diameter_max: number;
}

export interface Meters {
  estimated_diameter_min: number;
  estimated_diameter_max: number;
}

export interface Miles {
  estimated_diameter_min: number;
  estimated_diameter_max: number;
}

export interface Feet {
  estimated_diameter_min: number;
  estimated_diameter_max: number;
}

export interface CloseApproachDaum {
  close_approach_date: string;
  close_approach_date_full: string;
  epoch_date_close_approach: number;
  relative_velocity: RelativeVelocity;
  miss_distance: MissDistance;
  orbiting_body: string;
}

export interface RelativeVelocity {
  kilometers_per_second: string;
  kilometers_per_hour: string;
  miles_per_hour: string;
}

export interface MissDistance {
  astronomical: string;
  lunar: string;
  kilometers: string;
  miles: string;
}

export interface N20150907 {
  links: Links3;
  id: string;
  neo_reference_id: string;
  name: string;
  nasa_jpl_url: string;
  absolute_magnitude_h: number;
  estimated_diameter: EstimatedDiameter2;
  is_potentially_hazardous_asteroid: boolean;
  close_approach_data: CloseApproachDaum2[];
  is_sentry_object: boolean;
}

export interface Links3 {
  self: string;
}

export interface EstimatedDiameter2 {
  kilometers: Kilometers2;
  meters: Meters2;
  miles: Miles2;
  feet: Feet2;
}

export interface Kilometers2 {
  estimated_diameter_min: number;
  estimated_diameter_max: number;
}

export interface Meters2 {
  estimated_diameter_min: number;
  estimated_diameter_max: number;
}

export interface Miles2 {
  estimated_diameter_min: number;
  estimated_diameter_max: number;
}

export interface Feet2 {
  estimated_diameter_min: number;
  estimated_diameter_max: number;
}

export interface CloseApproachDaum2 {
  close_approach_date: string;
  close_approach_date_full: string;
  epoch_date_close_approach: number;
  relative_velocity: RelativeVelocity2;
  miss_distance: MissDistance2;
  orbiting_body: string;
}

export interface RelativeVelocity2 {
  kilometers_per_second: string;
  kilometers_per_hour: string;
  miles_per_hour: string;
}

export interface MissDistance2 {
  astronomical: string;
  lunar: string;
  kilometers: string;
  miles: string;
}
