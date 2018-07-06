/**
 * Created by codelovesme on 6/19/2015.
 */
import { Organelle } from "../src/index";
import * as euglena_template from "@euglena/template";
import * as chai from "chai";

describe("euglena", () => {
    describe("js", () => {
        describe("Class", () => {
            describe("equals", () => {
                it("should return true if both of object empty", () => {
                    //given
                    let organelle = new Organelle();
                    let sap = {euglenaName:""};
                    //when
                    organelle.receive(new euglena_template.alive.particle.TimeOrganelleSap(sap,""));
                    //then
                    //TODO
                });
            });
        });
    });
});
