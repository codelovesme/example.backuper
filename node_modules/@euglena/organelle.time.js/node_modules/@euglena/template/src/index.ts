
"use strict";

/**
 * Created by codelovesme on 6/19/2015.
 * 
 * 
 * TODO list
 * Must be release major because removed some parts
 * 
 */
import { interaction, ParticleV2, MetaV2, AnyParticle, alive as core_alive } from "@euglena/core";
import { sys, js } from "cessnalib";
import Exception = sys.type.Exception;
import Impact = interaction.Impact;

export abstract class BooleanParticle extends ParticleV2<Boolean> {
    constructor(meta: MetaV2, data: Boolean) { super(meta, data); }
}
export abstract class VoidParticle extends ParticleV2<void> {
    constructor(meta: MetaV2) { super(meta); }
}
export namespace subscription {
    export class Record {

    }
    export interface SubscriptionRecord {
        particle: AnyParticle;
        euglenas: string[]
    }
    export class StaticTools {

        private static subscriptionDict: SubscriptionRecord[] = [];
        public static addSubscription(particleMatch: AnyParticle, euglenaName: string): void {
            let euglenas = StaticTools.getSubscriptions(particleMatch);
            if (euglenas) {
                if (!sys.type.StaticTools.Array.contains(euglenas, euglenaName)) {
                    euglenas.push(euglenaName);
                }
            } else {
                StaticTools.subscriptionDict.push({ particle: particleMatch, euglenas: [euglenaName] });
            }
        }
        public static removeSubscriptions(particleMatch: AnyParticle): string[] {
            for (let i = 0; i < StaticTools.subscriptionDict.length; i++) {
                if (js.Class.doesCover(particleMatch, StaticTools.subscriptionDict[i].particle)) {
                    return sys.type.StaticTools.Array.removeAt(StaticTools.subscriptionDict, i).euglenas;
                }
            }
            return null;
        }
        public static removeSubscription(particleMatch: AnyParticle, euglenaName: string): boolean {
            for (let i = 0; i < StaticTools.subscriptionDict.length; i++) {
                if (js.Class.doesCover(particleMatch, StaticTools.subscriptionDict[i].particle)) {
                    let index = StaticTools.subscriptionDict[i].euglenas.indexOf(euglenaName);
                    if (index >= 0) {
                        return sys.type.StaticTools.Array.removeAt(StaticTools.subscriptionDict[i].euglenas, index) ? true : false;
                    }
                }
            }
            return false;
        }
        public static getSubscriptions(particleMatch: AnyParticle): string[] {
            for (let i = 0; i < StaticTools.subscriptionDict.length; i++) {
                if (js.Class.doesCover(particleMatch, StaticTools.subscriptionDict[i].particle)) {
                    return StaticTools.subscriptionDict[i].euglenas;
                }
            }
            return null;
        }
        public static isSubscribed(particleMatch: AnyParticle, euglenaName: string): boolean {
            for (let i = 0; i < StaticTools.subscriptionDict.length; i++) {
                if (js.Class.doesCover(particleMatch, StaticTools.subscriptionDict[i].particle)) {
                    return sys.type.StaticTools.Array.contains(StaticTools.subscriptionDict[i].euglenas, euglenaName);
                }
            }
        }
    }
}
export namespace alive {
    import Cytoplasm = core_alive.Cytoplasm;
    export namespace constants {
        export namespace particles {
            export const Domain = "Domain";
            export const ServerRunning = "ServerRunning";
            export const WhoAmI = "WhoAmI";
            export const Particles = "Particles";
            export const EuglenaInfo = "EuglenaInfo";
            export const OrganelleInfo = "OrganelleInfo";
            export const OrganelleList = "OrganelleList";
            export const EuglenaName = "EuglenaName";
            export const EuglenaHasBeenBorn = "EuglenaHasBeenBorn";
            export const Acknowledge = "Acknowledge";
            export const Authenticate = "Authenticate";
            export const Time = "Time";
            export const Exception = "Exception";
            export const ConnectedToTheInternet = "ConnectedToTheInternet";
            export const Token = "Token";
            export const Impacts = "Impacts";
            export const Impact = "Impact";
            export const DoesParticleExist = "DoesParticleExist";
            export const DoesUniqueParticleExist = "DoesUniqueParticleExist";
            export const Gene = "Gene";
            export const ThrowImpact = "ThrowImpact";
            export const Listen = "Listen";
            export const ConnectedToEuglena = "ConnectedToEuglena";
            export const DisconnectedFromEuglena = "DisconnectedFromEuglena";
            export const ConnectToEuglena = "ConnectToEuglena";
            export const ReturnCurrentTime = "ReturnCurrentTime";
            export const ReturnIfConnectedToTheInternet = "ReturnIfConnectedToTheInternet";
            export const OrganelleHasComeToLife = "OrganelleHasComeToLife";
            export const Proxy = "Proxy";
            export const Coordinate = "Coordinate";
            export const SetTime = "SetTime";
            export const DbIsOnline = "DbIsOnline";
            export const NetOrganelleSap = "NetOrganelleSap";
            export const NetClientOrganelleSap = "NetClientOrganelleSap";
            export const TimeOrganelleSap = "TimeOrganelleSap";
            export const WebOrganelleSap = "WebOrganelleSap";
            export const GPSOrganelleSap = "GPSOrganelleSap";
            export const WebUIOrganelleSap = "WebUIOrganelleSap";
            export const DbOrganelleSap = "DbOrganelleSap";
            export const CytoplasmInfo = "CytoplasmInfo";
            export const ReadParticles = "ReadParticles";
            export const Subscribe = "Subscribe";
            export const subscriptionDict = "subscriptionDict";
            export const Password = "Password";
            export const AddGene = "AddGene";
            export const TimeChanged = "TimeChanged";
            export const ExceptionOccurred = "ExceptionOccurred";
            export const SaveParticle = "SaveParticle";
            export const SaveMatchedParticle = "SaveMatchedParticle";
            export const ReadParticle = "ReadParticle";
            export const RemoveParticle = "RemoveParticle";
            export const RemoveParticles = "RemoveParticles";
        }
        export namespace organelles {
            export const WebUIOrganelle = "WebUIOrganelle";
            export const GPSOrganelle = "GPSOrganelle";
            export const NetOrganelle = "NetOrganelle";
            export const TimeOrganelle = "TimeOrganelle";
            export const WebOrganelle = "WebOrganelle";
            export const DbOrganelle = "DbOrganelle";
            export const NetClientOrganelle = "NetClientOrganelle";
            export const Cytoplasm = "Cytoplasm";
        }
    }
    export namespace organelle {
        import Organelle = core_alive.Organelle;
        export abstract class TimeOrganelle extends Organelle<core_alive.particles.SapContent> {
            constructor() { super(alive.constants.organelles.TimeOrganelle); }
        }
        export abstract class NetOrganelle extends Organelle<particle.NetOrganelleSapContent> {
            constructor() { super(constants.organelles.NetOrganelle); }
        }
        export abstract class WebOrganelle extends Organelle<particle.WebOrganelleSapContent>{
            constructor() { super(constants.organelles.WebOrganelle); }
        }
        export abstract class WebUIOrganelle extends Organelle<particle.WebUIOrganelleSapContent>{
            constructor() { super(constants.organelles.WebUIOrganelle); }
        }
        export abstract class DbOrganelle extends Organelle<particle.DbOrganelleSapContent>{
            constructor() { super(constants.organelles.DbOrganelle); }
        }
        export abstract class NetClientOrganelle extends Organelle<particle.NetClientOrganelleSapContent>{
            constructor() { super(constants.organelles.NetClientOrganelle); }
        }
        export abstract class GPSOrganelle extends Organelle<particle.GPSOrganelleSapContent>{
            constructor() { super(constants.organelles.GPSOrganelle); }
        }
    }
    export namespace particle {
        export interface MatchedParticlesContent {
            particleRef: AnyParticle;
            result: AnyParticle[];
        }
        export class Password extends ParticleV2<string> {
            constructor(euglenaName: string, value: string) { super(new MetaV2(constants.particles.Password, euglenaName), value); }
        }
        export class subscriptionDict extends ParticleV2<sys.type.Map<any, string[]>> {
            constructor(of: string) {
                super(new MetaV2(constants.particles.subscriptionDict, of), new sys.type.Map<any, string[]>((key1, key2) => {
                    return js.Class.doesCover(key1, key2);
                }));
            }
        }
        export class Subscribe extends ParticleV2<AnyParticle> {
            constructor(particleReference: AnyParticle, of: string) {
                super(new MetaV2(constants.particles.Subscribe, of), particleReference);
            }
        }
        export class Coordinate extends ParticleV2<{ lat: number, lon: number }> {
            constructor(lat: number, lon: number, of: string) {
                super(new MetaV2(constants.particles.Coordinate, of), { lat, lon });
            }
        }
        export class WhoAmI extends ParticleV2<void> {
            constructor(of: string) {
                super(new MetaV2(constants.particles.WhoAmI, of));
            }
        }
        export interface WebUIOrganelleSapContent {
            euglenaName: string,
            rootComponentUrl: string
        }
        export interface NetClientOrganelleSapContent {
            euglenaName: string;
        }
        export class NetClientOrganelleSap extends ParticleV2<NetClientOrganelleSapContent> {
            constructor(of: string) { super(new MetaV2(constants.particles.NetClientOrganelleSap, of), { euglenaName: of }); }
        }
        export class WebUIOrganelleSap extends ParticleV2<WebUIOrganelleSapContent> {
            constructor(content: WebUIOrganelleSapContent, of: string) { super(new MetaV2(constants.particles.WebUIOrganelleSap, of), content); }
        }
        export interface WebOrganelleSapContent {
            euglenaName: string,
            euglenaInfo: particle.EuglenaInfo,
            singlePageApp: boolean
        }
        export class WebOrganelleSap extends ParticleV2<WebOrganelleSapContent> {
            constructor(content: WebOrganelleSapContent, of: string) { super(new MetaV2(constants.particles.WebOrganelleSap, of), content); }
        }
        export interface GPSOrganelleSapContent {
            euglenaName: string,
            port: string
        }
        export class GPSOrganelleSap extends ParticleV2<GPSOrganelleSapContent> {
            constructor(content: GPSOrganelleSapContent, of: string) { super(new MetaV2(constants.particles.GPSOrganelleSap, of), content); }
        }
        export interface NetOrganelleSapContent {
            euglenaName: string,
            euglenaInfo: particle.EuglenaInfo
        }
        export class NetOrganelleSap extends ParticleV2<NetOrganelleSapContent> {
            constructor(content: NetOrganelleSapContent, of: string) { super(new MetaV2(constants.particles.NetOrganelleSap, of), content); }
        }
        export interface DbOrganelleSapContent {
            euglenaName: string,
            url: string,
            port: number,
            databaseName: string
        }
        export class DbOrganelleSap extends ParticleV2<DbOrganelleSapContent> {
            constructor(content: DbOrganelleSapContent, of: string) { super(new MetaV2(constants.particles.DbOrganelleSap, of), content); }
        }
        export class TimeOrganelleSap extends ParticleV2<{ euglenaName: string }>{
            constructor(content: { euglenaName: string }, of: string) { super(new MetaV2(constants.particles.TimeOrganelleSap, of), content); }
        }
        export class DbIsOnline extends VoidParticle {
            constructor(of: string) { super(new MetaV2(constants.particles.DbIsOnline, of)); }
        }
        export class ServerRunning extends ParticleV2<{ port: string }> {
            constructor(port: string, of: string) { super(new MetaV2(constants.particles.ServerRunning, of), { port }); }
        }
        export class ReturnCurrentTime extends VoidParticle {
            constructor(of: string) { super(new MetaV2(constants.particles.ReturnCurrentTime, of)); }
        }
        export class ReturnIfConnectedToTheInternet extends VoidParticle {
            constructor(of: string) { super(new MetaV2(constants.particles.ReturnIfConnectedToTheInternet, of)); }
        }
        export class OrganelleHasComeToLife extends ParticleV2<{ organelleName: string }> {
            constructor(organelleName: string, of: string) {
                super(new MetaV2(constants.particles.OrganelleHasComeToLife, of), { organelleName: organelleName });
            }
        }
        export class Domain extends ParticleV2<string> {
            constructor(domain: string, of: string) {
                super(new MetaV2(constants.particles.Domain, of), domain);
            }
        }
        export class Authenticate extends ParticleV2<{ euglenaName: string, password: string }> {
            constructor(euglenaName: string, password: string, of: string) { super(new MetaV2(constants.particles.Authenticate, of), { euglenaName: euglenaName, password: password }); }
        }
        export class Proxy extends ParticleV2<{ from: string, to: string }> {
            constructor(from: string, to: string, expireTime: number, of: string) { super(new MetaV2(constants.particles.Proxy, of, expireTime), { from, to }); }
        }
        export class SetTime extends ParticleV2<sys.type.Time> {
            constructor(time: sys.type.Time, of: string) { super(new MetaV2(constants.particles.SetTime, of), time); }
        }
        export class ConnectToEuglena extends ParticleV2<alive.particle.EuglenaInfo> {
            constructor(euglenaInfo: alive.particle.EuglenaInfo, of: string) {
                super(new MetaV2(constants.particles.ConnectToEuglena, of), euglenaInfo);
            }
        }
        export class ConnectedToEuglena extends ParticleV2<alive.particle.EuglenaInfo> {
            constructor(euglenaInfo: alive.particle.EuglenaInfo, of: string) { super(new MetaV2(constants.particles.ConnectedToEuglena, of), euglenaInfo); }
        }
        export class DisconnectedFromEuglena extends ParticleV2<alive.particle.EuglenaInfo> {
            constructor(euglenaInfo: alive.particle.EuglenaInfo, of: string) { super(new MetaV2(constants.particles.ConnectedToEuglena, of), euglenaInfo); }
        }
        export class Listen extends VoidParticle {
            constructor(of: string) { super(new MetaV2(constants.particles.Listen, of)); }
        }
        export interface ThrowImpactContent {
            to: alive.particle.EuglenaInfo,
            impact: Impact
        }
        export class ThrowImpact extends ParticleV2<{ to: alive.particle.EuglenaInfo, impact: Impact }> {
            constructor(content: { to: alive.particle.EuglenaInfo, impact: Impact }, of: string) { super(new MetaV2(constants.particles.ThrowImpact, of), content); }
        }
        export class Impact extends ParticleV2<{ token: string, particle: AnyParticle }> {
            constructor(particle: AnyParticle, token: string, of: string) {
                super(new MetaV2(constants.particles.Impact, of), { particle, token });
            }
        }
        export class EuglenaInfo extends ParticleV2<{ name: string, url: string, port: string }> {
            constructor(content: { name: string, url: string, port: string }, of: string) { super(new MetaV2(constants.particles.EuglenaInfo, of), content); }
        }
        export enum OrganelleInfoLocationType {
            FileSystemPath, NodeModules, Url
        }
        export class OrganelleInfo<SAP> extends ParticleV2<{ name: string, location: { type: OrganelleInfoLocationType, path: string }, sap: SAP }>{
            constructor(organelleName: string, locationType: OrganelleInfoLocationType, locationPath: string, sap: SAP, of: string) {
                super(new MetaV2(constants.particles.OrganelleInfo, of), { name: organelleName, location: { type: locationType, path: locationPath }, sap });
            }
        }
        export class CytoplasmInfo extends ParticleV2<{ particles: AnyParticle[], chromosome: core_alive.dna.AnyGene[] }> {
            constructor(content: { particles: AnyParticle[], chromosome: core_alive.dna.AnyGene[] }, of: string) { super(new MetaV2(constants.particles.EuglenaInfo, of), content); }
        }
        export class OrganelleList extends ParticleV2<Array<string>> {
            constructor(content: Array<string>, of: string) { super(new MetaV2(constants.particles.OrganelleList, of), content); }
        }
        export class Exception extends ParticleV2<sys.type.Exception> {
            constructor(content: sys.type.Exception, of: string) { super(new MetaV2(constants.particles.Exception, of), content); }
        }
        export class Time extends ParticleV2<sys.type.Time> {
            constructor(content: sys.type.Time, of: string) { super(new MetaV2(constants.particles.Time, of), content); }
        }
        export class Acknowledge extends VoidParticle {
            constructor(of: string) { super(new MetaV2(constants.particles.Acknowledge, of)); }
        }
        export class ConnectedToTheInternet extends BooleanParticle {
            constructor(content: boolean, of: string) { super(new MetaV2(constants.particles.ConnectedToTheInternet, of), content); }
        }
        export class EuglenaHasBeenBorn extends BooleanParticle {
            constructor(of: string) { super(new MetaV2(constants.particles.EuglenaHasBeenBorn, of), true); }
        }
        export class SaveParticle extends ParticleV2<AnyParticle> {
            constructor(content: AnyParticle, of: string) { super(new MetaV2(constants.particles.SaveParticle, of), content); }
        }
        export class SaveMatchedParticle extends ParticleV2<AnyParticle> {
            constructor(content: AnyParticle, of: string) { super(new MetaV2(constants.particles.SaveMatchedParticle, of), content); }
        }
        export class ReadParticle extends ParticleV2<AnyParticle> {
            constructor(content: AnyParticle, of: string) { super(new MetaV2(constants.particles.ReadParticle, of), content); }
        }
        export class ReadParticles extends ParticleV2<AnyParticle> {
            constructor(query: any, of: string) {
                super(new MetaV2(constants.particles.ReadParticles, of), query);
            }
        }
        export class Particles extends ParticleV2<AnyParticle[]> {
            constructor(particles: AnyParticle[], of: string) { super(new MetaV2(constants.particles.Particles, of), particles); }
        }
        export interface RemoveParticleContent {
            name: string,
            of: string
        }
        export class RemoveParticle extends ParticleV2<AnyParticle> {
            constructor(ref: AnyParticle, of: string) { super(new MetaV2(constants.particles.RemoveParticle, of), ref); }
        }
        export class RemoveParticles extends ParticleV2<AnyParticle> {
            constructor(query: any, of: string) {
                super(new MetaV2(constants.particles.RemoveParticles, of), query);
            }
        }
        export interface DoesParticleExistContent {
            name: string,
            of: string
        }
        export class DoesParticleExist extends ParticleV2<DoesParticleExistContent> {
            constructor(content: DoesParticleExistContent, of: string) { super(new MetaV2(alive.constants.particles.DoesParticleExist, of), content); }
        }
    }
}


