/**
 * Created by baiqb on 2017/4/9.
 */
import avalon = require('avalon2');
import utils from './utils';

// 组件
import demo from './components/demo';
// 注册
utils.avalon.useCmpt('ms-demo', demo, avalon);

let app = avalon.define({
    $id: 'body'
});