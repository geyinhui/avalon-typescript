import * as style from './index.css';

let demoComponent: Avalon2NameSpace.ComponentConfig = {
    template: `<div class='${style.foo}'>{{@demoData.name}}{{@demoData.name}}</div>`,
    defaults: {
        demoData: {
            name: "带血爬出来的Avalon"
        }
    }
}

export default demoComponent;

