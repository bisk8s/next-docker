import Bisk9sGraph from '../assets/bisk8s-graph.svg'

export type svg = typeof Bisk9sGraph

declare module 'styled-components' {
  export interface SVG extends svg {
    className: string
  }
}
