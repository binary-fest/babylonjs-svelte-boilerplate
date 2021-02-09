import { Writable, writable } from "svelte/store";
import type { StandModel } from './model/StandModel'
export const click = writable(false)

export const StandDesc: Writable<StandModel> = writable(null)