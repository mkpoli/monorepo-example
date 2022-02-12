import { plus } from '@mkpoli-arithmetic/plus'

function minus(a: number, b: number): number {
  return plus(a, -b)
}

export { minus }
