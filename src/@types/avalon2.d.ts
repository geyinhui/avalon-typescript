declare namespace Avalon2NameSpace {
    export interface ComponentConfig {
        template: String,
        defaults: Object
    }
}

// -- avalon.component
interface avalon2Static {
    component(name: String, componentConfig: Avalon2NameSpace.ComponentConfig): any;
    define(defineConfig: any): any;
}

declare module "avalon2" {
    export = avalon2;
}

declare var avalon: avalon2Static;
declare var avalon2: avalon2Static;