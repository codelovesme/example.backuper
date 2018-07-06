
import {euglena} from "euglena";
import {euglena_template} from "../src/index";

import * as chai from "chai";

import Particle = euglena.being.Particle;

import Class = euglena.js.Class;
import tools = euglena_template.being.subscription.StaticTools;

describe("euglena.template", () => {
    describe("being", () => {
        describe("subscription", () => {
            describe("StaticTools", () => {
                it("addSubscription", () => {
                    //given
                    let particle = { meta: { name: "Token" } };
                    let euglenaName = "idcore";
                    //when
                    let result = tools.addSubscription(particle as euglena.being.Particle, euglenaName);
                    //then
                    chai.expect(tools["subscriptionDict"]).to.has.length(1);
                    chai.expect(tools["subscriptionDict"][0]).property('particle',particle);
                    chai.expect(tools["subscriptionDict"][0]['euglenas']).to.has.length(1);
                    chai.expect(tools["subscriptionDict"][0]['euglenas']).to.contains(euglenaName);
                });
                it("removeSubscription", () => {
                    //given
                    let particle = { meta: { name: "Token" } };
                    let euglenaName = "idcore";
                    let result = tools.addSubscription(particle as euglena.being.Particle, euglenaName);
                    //when
                    tools.removeSubscription(particle as Particle,euglenaName);
                    //after then
                    chai.expect(tools["subscriptionDict"]).to.has.length(1);
                    chai.expect(tools["subscriptionDict"][0]).property('particle');
                    chai.expect(tools["subscriptionDict"][0]['euglenas']).to.has.length(0);
                });
                it("removeSubscriptions", () => {
                    //given
                    let particle = { meta: { name: "Token" } };
                    let euglenaName = "idcore";
                    let result = tools.addSubscription(particle as euglena.being.Particle, euglenaName);
                    //when
                    tools.removeSubscriptions(particle as Particle);
                    //after then
                    chai.expect(tools["subscriptionDict"]).to.has.length(0);
                });
            });
        });
    });
});