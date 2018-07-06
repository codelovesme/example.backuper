/**
 * Created by codelovesme on 6/19/2015.
 *
 *
 * TODO list
 * * ReadParticle, ReamoveParticle must take query:any instead of AnyParticle
 *      SaveParticle must be the same with the Cytoplasm saveParticle
 *
 */
import { ParticleV2, MetaV2, AnyParticle, alive as core_alive } from "@euglena/core";
import { sys } from "cessnalib";
export declare abstract class BooleanParticle extends ParticleV2<Boolean> {
    constructor(meta: MetaV2, data: Boolean);
}
export declare abstract class VoidParticle extends ParticleV2<void> {
    constructor(meta: MetaV2);
}
export declare namespace subscription {
    class Record {
    }
    interface SubscriptionRecord {
        particle: AnyParticle;
        euglenas: string[];
    }
    class StaticTools {
        private static subscriptionDict;
        static addSubscription(particleMatch: AnyParticle, euglenaName: string): void;
        static removeSubscriptions(particleMatch: AnyParticle): string[];
        static removeSubscription(particleMatch: AnyParticle, euglenaName: string): boolean;
        static getSubscriptions(particleMatch: AnyParticle): string[];
        static isSubscribed(particleMatch: AnyParticle, euglenaName: string): boolean;
    }
}
export declare namespace alive {
    namespace constants {
        namespace particles {
            const Domain = "Domain";
            const ServerRunning = "ServerRunning";
            const WhoAmI = "WhoAmI";
            const Particles = "Particles";
            const EuglenaInfo = "EuglenaInfo";
            const OrganelleInfo = "OrganelleInfo";
            const OrganelleList = "OrganelleList";
            const EuglenaName = "EuglenaName";
            const EuglenaHasBeenBorn = "EuglenaHasBeenBorn";
            const Acknowledge = "Acknowledge";
            const Authenticate = "Authenticate";
            const Time = "Time";
            const Exception = "Exception";
            const ConnectedToTheInternet = "ConnectedToTheInternet";
            const Token = "Token";
            const Impacts = "Impacts";
            const Impact = "Impact";
            const DoesParticleExist = "DoesParticleExist";
            const DoesUniqueParticleExist = "DoesUniqueParticleExist";
            const Gene = "Gene";
            const ThrowImpact = "ThrowImpact";
            const Listen = "Listen";
            const ConnectedToEuglena = "ConnectedToEuglena";
            const DisconnectedFromEuglena = "DisconnectedFromEuglena";
            const ConnectToEuglena = "ConnectToEuglena";
            const ReturnCurrentTime = "ReturnCurrentTime";
            const ReturnIfConnectedToTheInternet = "ReturnIfConnectedToTheInternet";
            const OrganelleHasComeToLife = "OrganelleHasComeToLife";
            const Proxy = "Proxy";
            const Coordinate = "Coordinate";
            const SetTime = "SetTime";
            const DbIsOnline = "DbIsOnline";
            const NetOrganelleSap = "NetOrganelleSap";
            const NetClientOrganelleSap = "NetClientOrganelleSap";
            const TimeOrganelleSap = "TimeOrganelleSap";
            const WebOrganelleSap = "WebOrganelleSap";
            const GPSOrganelleSap = "GPSOrganelleSap";
            const WebUIOrganelleSap = "WebUIOrganelleSap";
            const DbOrganelleSap = "DbOrganelleSap";
            const CytoplasmInfo = "CytoplasmInfo";
            const ReadParticles = "ReadParticles";
            const Subscribe = "Subscribe";
            const subscriptionDict = "subscriptionDict";
            const Password = "Password";
            const AddGene = "AddGene";
            const TimeChanged = "TimeChanged";
            const ExceptionOccurred = "ExceptionOccurred";
            const SaveParticle = "SaveParticle";
            const RenameParticle = "RenameParticle";
            const SaveMatchedParticle = "SaveMatchedParticle";
            const ReadParticle = "ReadParticle";
            const RemoveParticle = "RemoveParticle";
            const RemoveParticles = "RemoveParticles";
            const Api = "Api";
            const IAmReady = "IAmReady";
        }
        namespace organelles {
            const WebUIOrganelle = "WebUIOrganelle";
            const GPSOrganelle = "GPSOrganelle";
            const NetOrganelle = "NetOrganelle";
            const TimeOrganelle = "TimeOrganelle";
            const WebOrganelle = "WebOrganelle";
            const DbOrganelle = "DbOrganelle";
            const NetClientOrganelle = "NetClientOrganelle";
            const Cytoplasm = "Cytoplasm";
        }
    }
    namespace organelle {
        import Organelle = core_alive.Organelle;
        abstract class TimeOrganelle extends Organelle<core_alive.particles.SapContent> {
            constructor();
        }
        abstract class NetOrganelle extends Organelle<particle.NetOrganelleSapContent> {
            constructor();
        }
        abstract class WebOrganelle extends Organelle<particle.WebOrganelleSapContent> {
            constructor();
        }
        abstract class WebUIOrganelle extends Organelle<particle.WebUIOrganelleSapContent> {
            constructor();
        }
        abstract class DbOrganelle extends Organelle<particle.DbOrganelleSapContent> {
            constructor();
        }
        abstract class NetClientOrganelle extends Organelle<particle.NetClientOrganelleSapContent> {
            constructor();
        }
        abstract class GPSOrganelle extends Organelle<particle.GPSOrganelleSapContent> {
            constructor();
        }
    }
    namespace particle {
        class IamReady extends VoidParticle {
            constructor(of: string);
        }
        interface MatchedParticlesContent {
            particleRef: AnyParticle;
            result: AnyParticle[];
        }
        class Api extends ParticleV2<AnyParticle[]> {
            constructor(particles: AnyParticle[], of: string);
        }
        class Password extends ParticleV2<string> {
            constructor(euglenaName: string, value: string);
        }
        class subscriptionDict extends ParticleV2<sys.type.Map<any, string[]>> {
            constructor(of: string);
        }
        class Subscribe extends ParticleV2<AnyParticle> {
            constructor(particleReference: AnyParticle, of: string);
        }
        class Coordinate extends ParticleV2<{
            lat: number;
            lon: number;
        }> {
            constructor(lat: number, lon: number, of: string);
        }
        class WhoAmI extends ParticleV2<void> {
            constructor(of: string);
        }
        interface WebUIOrganelleSapContent {
            euglenaName: string;
        }
        interface NetClientOrganelleSapContent {
            euglenaName: string;
        }
        class NetClientOrganelleSap extends ParticleV2<NetClientOrganelleSapContent> {
            constructor(of: string);
        }
        class WebUIOrganelleSap extends ParticleV2<WebUIOrganelleSapContent> {
            constructor(content: WebUIOrganelleSapContent, of: string);
        }
        interface WebOrganelleSapContent {
            euglenaName: string;
            euglenaInfo: particle.EuglenaInfo;
            singlePageApp: boolean;
        }
        class WebOrganelleSap extends ParticleV2<WebOrganelleSapContent> {
            constructor(content: WebOrganelleSapContent, of: string);
        }
        interface GPSOrganelleSapContent {
            euglenaName: string;
            port: string;
        }
        class GPSOrganelleSap extends ParticleV2<GPSOrganelleSapContent> {
            constructor(content: GPSOrganelleSapContent, of: string);
        }
        interface NetOrganelleSapContent {
            euglenaName: string;
            euglenaInfo: particle.EuglenaInfo;
        }
        class NetOrganelleSap extends ParticleV2<NetOrganelleSapContent> {
            constructor(content: NetOrganelleSapContent, of: string);
        }
        interface DbOrganelleSapContent {
            euglenaName: string;
            url: string;
            port: number;
            databaseName: string;
        }
        class DbOrganelleSap extends ParticleV2<DbOrganelleSapContent> {
            constructor(content: DbOrganelleSapContent, of: string);
        }
        class TimeOrganelleSap extends ParticleV2<{
            euglenaName: string;
        }> {
            constructor(content: {
                euglenaName: string;
            }, of: string);
        }
        class DbIsOnline extends VoidParticle {
            constructor(of: string);
        }
        class ServerRunning extends ParticleV2<{
            port: string;
        }> {
            constructor(port: string, of: string);
        }
        class ReturnCurrentTime extends VoidParticle {
            constructor(of: string);
        }
        class ReturnIfConnectedToTheInternet extends VoidParticle {
            constructor(of: string);
        }
        class OrganelleHasComeToLife extends ParticleV2<{
            organelleName: string;
        }> {
            constructor(organelleName: string, of: string);
        }
        class Domain extends ParticleV2<string> {
            constructor(domain: string, of: string);
        }
        class Authenticate extends ParticleV2<{
            euglenaName: string;
            password: string;
        }> {
            constructor(euglenaName: string, password: string, of: string);
        }
        class Proxy extends ParticleV2<{
            from: string;
            to: string;
        }> {
            constructor(from: string, to: string, expireTime: number, of: string);
        }
        class SetTime extends ParticleV2<sys.type.Time> {
            constructor(time: sys.type.Time, of: string);
        }
        class ConnectToEuglena extends ParticleV2<alive.particle.EuglenaInfo> {
            constructor(euglenaInfo: alive.particle.EuglenaInfo, of: string);
        }
        class ConnectedToEuglena extends ParticleV2<alive.particle.EuglenaInfo> {
            constructor(euglenaInfo: alive.particle.EuglenaInfo, of: string);
        }
        class DisconnectedFromEuglena extends ParticleV2<alive.particle.EuglenaInfo> {
            constructor(euglenaInfo: alive.particle.EuglenaInfo, of: string);
        }
        class Listen extends VoidParticle {
            constructor(of: string);
        }
        interface ThrowImpactContent {
            to: alive.particle.EuglenaInfo;
            impact: Impact;
        }
        class ThrowImpact extends ParticleV2<{
            to: alive.particle.EuglenaInfo;
            impact: Impact;
        }> {
            constructor(content: {
                to: alive.particle.EuglenaInfo;
                impact: Impact;
            }, of: string);
        }
        class Impact extends ParticleV2<{
            token: string;
            particle: AnyParticle;
        }> {
            constructor(particle: AnyParticle, token: string, of: string);
        }
        class EuglenaInfo extends ParticleV2<{
            name: string;
            url: string;
            port: string;
        }> {
            constructor(content: {
                name: string;
                url: string;
                port: string;
            }, of: string);
        }
        enum OrganelleInfoLocationType {
            FileSystemPath = 0,
            NodeModules = 1,
            Url = 2,
        }
        class OrganelleInfo<SAP> extends ParticleV2<{
            name: string;
            location: {
                type: OrganelleInfoLocationType;
                path: string;
            };
            sap: SAP;
        }> {
            constructor(organelleName: string, locationType: OrganelleInfoLocationType, locationPath: string, sap: SAP, of: string);
        }
        class CytoplasmInfo extends ParticleV2<{
            particles: AnyParticle[];
            chromosome: core_alive.dna.AnyGene[];
        }> {
            constructor(content: {
                particles: AnyParticle[];
                chromosome: core_alive.dna.AnyGene[];
            }, of: string);
        }
        class OrganelleList extends ParticleV2<Array<string>> {
            constructor(content: Array<string>, of: string);
        }
        class Exception extends ParticleV2<sys.type.Exception> {
            constructor(content: sys.type.Exception, of: string);
        }
        class Time extends ParticleV2<sys.type.Time> {
            constructor(content: sys.type.Time, of: string);
        }
        class Acknowledge extends VoidParticle {
            constructor(of: string);
        }
        class ConnectedToTheInternet extends BooleanParticle {
            constructor(content: boolean, of: string);
        }
        class EuglenaHasBeenBorn extends BooleanParticle {
            constructor(of: string);
        }
        class RenameParticle extends ParticleV2<{
            newName: string;
            query?: any;
        }> {
            constructor(newName: string, query: any, of: string);
        }
        class SaveParticle extends ParticleV2<{
            particle: AnyParticle;
            query?: any;
        }> {
            constructor(particle: AnyParticle, of: string, query?: any);
        }
        class ReadParticle extends ParticleV2<any> {
            constructor(query: any, of: string);
        }
        class ReadParticles extends ParticleV2<any> {
            constructor(query: any, of: string);
        }
        class Particles extends ParticleV2<AnyParticle[]> {
            constructor(particles: AnyParticle[], of: string);
        }
        class RemoveParticle extends ParticleV2<any> {
            constructor(query: any, of: string);
        }
        class RemoveParticles extends ParticleV2<any> {
            constructor(query: any, of: string);
        }
        interface DoesParticleExistContent {
            name: string;
            of: string;
        }
        class DoesParticleExist extends ParticleV2<DoesParticleExistContent> {
            constructor(content: DoesParticleExistContent, of: string);
        }
    }
}
