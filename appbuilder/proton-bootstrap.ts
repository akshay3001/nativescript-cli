///<reference path="../.d.ts"/>
"use strict";

require("../bootstrap");
$injector.require("messages", "./messages/messages");
$injector.require("logger", "./appbuilder/proton-logger");

import Future = require("fibers/future");
import {OptionsBase} from "../options";
$injector.require("staticConfig", "./appbuilder/proton-static-config");
$injector.register("mobilePlatformsCapabilities", {});
$injector.register("config", {});
// Proton will track the features and execptions, so no need of analyticsService here.
$injector.register("analyiticsService", {});
$injector.register("options", $injector.resolve(OptionsBase, {options: {}, defaultProfileDir: ""}));
$injector.requirePublicClass("deviceEmitter", "./appbuilder/device-emitter");
$injector.requirePublicClass("deviceLogProvider", "./appbuilder/device-log-provider");
import {installUncaughtExceptionListener} from "../errors";
installUncaughtExceptionListener();
$injector.register("deviceAppDataProvider", {
	createFactoryRules(): IDictionary<Mobile.IDeviceAppDataFactoryRule> {
		return {
				Android: {
					vanilla: ""
				},
				iOS: {
					vanilla: ""
				},
				WP8: {
					vanilla: ""
				}
			};
		}
	}
);
$injector.register("emulatorSettingsService", {
	canStart(platform: string): IFuture<boolean> {
		return Future.fromResult(true);
	},
	minVersion(): number {
		return 10;
	}
});

// When debugging uncomment the lines below and comment the line #6 (requiring logger).
// $injector.require("logger", "./logger");
// $injector.resolve("logger").setLevel("TRACE");