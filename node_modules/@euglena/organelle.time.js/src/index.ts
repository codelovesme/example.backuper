"use strict"
import * as euglena_template from "@euglena/template";
import * as euglena from "@euglena/core";
import { sys, js } from "cessnalib";
import Particle = euglena.ParticleV1;
import particles = euglena_template.alive.particle;
import constants = euglena_template.alive.constants;

export class Organelle extends euglena_template.alive.organelle.TimeOrganelle {
    private time: sys.type.Time;
    constructor() {
        super();
        this.time = sys.type.StaticTools.Time.now();
    }

    private sapContent: euglena_template.alive.particle.NetOrganelleSapContent;

    protected bindActions(addAction: (particleName: string, action: (particle: Particle, callback: (particle: Particle) => void) => void) => void): void {
        addAction(euglena_template.alive.constants.particles.TimeOrganelleSap, (particle) => {
            this.sapContent = particle.data;
            let this_ = this;
            setInterval(() => {
                //let newDate = new Date(this.time.date.year, this.time.date.month - 1, this.time.date.day,
                //    this.time.clock.hour, this.time.clock.minute, this.time.clock.second + 1);
                let newDate = new Date();
                if (newDate.getSeconds() != this_.time.clock.second) {
                    this_.time.clock.second = newDate.getSeconds();
                    //this_.nucleus.receiveParticle(new euglena_template.being.alive.particles.Second(this_.time.clock.second));
                    if (newDate.getMinutes() != this_.time.clock.minute) {
                        this_.time.clock.minute = newDate.getMinutes();
                        //this_.nucleus.receiveParticle(new euglena_template.being.alive.particles.Minute(this_.time.clock.minute));
                        if (newDate.getHours() != this_.time.clock.hour) {
                            this_.time.clock.hour = newDate.getHours();
                            //this_.nucleus.receiveParticle(new euglena_template.being.alive.particles.Hour(this_.time.clock.hour));
                            if (newDate.getDate() != this_.time.date.day) {
                                this_.time.date.day = newDate.getDate();
                                //this_.nucleus.receiveParticle(new euglena_template.being.alive.particles.Day(this_.time.date.day));
                                if (newDate.getMonth() + 1 != this_.time.date.month) {
                                    this_.time.date.month = newDate.getMonth() + 1;
                                    //this_.nucleus.receiveParticle(new euglena_template.being.alive.particles.Month(this_.time.date.month));
                                    if (newDate.getFullYear() != this_.time.date.year) {
                                        this_.time.date.year = newDate.getFullYear();
                                        //this_.nucleus.receiveParticle(new euglena_template.being.alive.particles.Year(this_.time.date.year));
                                    }
                                }
                            }
                        }
                    }
                }
                this_.send(new euglena_template.alive.particle.Time(this.time, this.sapContent.euglenaName), this_.name);
            }, 1000);
        });
        addAction(constants.particles.SetTime, (particle) => {
            this.time = particle.data;
        });
    }
}