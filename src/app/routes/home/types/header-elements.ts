import { Params } from "@angular/router"

export type HeaderElement = {
  id: number,
  to: string,
  queryParams?: Params,
  name: string,
  icon?: string,
}
