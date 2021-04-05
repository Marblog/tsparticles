import type { ICoordinates } from "../Core/Interfaces/ICoordinates";
import type { Particle } from "../Core/Particle";

/**
 * @category Utils
 */
export class Point {
    constructor(readonly position: ICoordinates, readonly particle: Particle) {}
}
