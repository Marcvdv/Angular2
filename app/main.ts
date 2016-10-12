import {bootstrap}    from 'angular2/platform/browser';
import {HomeComponent} from './home.component';
import {ROUTER_PROVIDERS} from "angular2/router";
import {SchilderWensService} from "./services/schilderwens.service";

bootstrap(HomeComponent, [ROUTER_PROVIDERS, SchilderWensService]);
// [KlantService], [SchilderWensService],