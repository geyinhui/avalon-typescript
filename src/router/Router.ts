import page = require("page");

class Router {
    private static instance: Router = null;

    private constructor() { }

    public static getInstance() {
        if (this.instance == null) {
            this.instance == new Router();
        }

        return this.instance;
    }

    // 添加路由
    public add() {

        return this;
    }

    // 重定向
    public redirect() {

        return this;
    }


}
