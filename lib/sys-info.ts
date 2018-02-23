import * as path from "path";
import { sysInfo } from "nativescript-doctor";

export class SysInfo {
	public async getSysInfo(config?: NativeScriptDoctor.ISysInfoConfig): Promise<NativeScriptDoctor.ISysInfoData> {
		const pathToNativeScriptCliPackageJson = (config && config.pathToNativeScriptCliPackageJson) || path.join(__dirname, "..", "package.json");
		const androidToolsInfo = config && config.androidToolsInfo;

		return sysInfo.getSysInfo({pathToNativeScriptCliPackageJson, androidToolsInfo});
	}

	public async getXCodeVersion(): Promise<string> {
		return sysInfo.getXcodeVersion();
	}
}
$injector.register("sysInfo", SysInfo);
