import * as euglena_template from "@euglena/template";
import * as euglena from "@euglena/core";
import Particle = euglena.ParticleV1;
export declare class Organelle extends euglena_template.alive.organelle.TimeOrganelle {
    private time;
    constructor();
    private sapContent;
    protected bindActions(addAction: (particleName: string, action: (particle: Particle, callback: (particle: Particle) => void) => void) => void): void;
}
