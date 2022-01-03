    (function (root, factory) {
      if (typeof define === "function" && define.amd) {
        define(AMD_ARGUMENTS, factory);
      } else if (typeof exports === "object") {
        factory(COMMON_ARGUMENTS);
      } else {
        factory(BROWSER_ARGUMENTS);
      }
    })(UMD_ROOT, function (FACTORY_PARAMETERS) {
      FACTORY_BODY
    });
  `(e);function buildGlobal(e){const r=t().identifier("babelHelpers");const n=[];const i=t().functionExpression(null,[t().identifier("global")],t().blockStatement(n));const a=t().program([t().expressionStatement(t().callExpression(i,[t().conditionalExpression(t().binaryExpression("===",t().unaryExpression("typeof",t().identifier("global")),t().stringLiteral("undefined")),t().identifier("self"),t().identifier("global"))]))]);n.push(t().variableDeclaration("var",[t().variableDeclarator(r,t().assignmentExpression("=",t().memberExpression(t().identifier("global"),r),t().objectExpression([])))]));buildHelpers(n,r,e);return a}function buildModule(e){const r=[];const n=buildHelpers(r,null,e);r.unshift(t().exportNamedDeclaration(null,Object.keys(n).map((e=>t().exportSpecifier(t().cloneNode(n[e]),t().identifier(e))))));return t().program(r,[],"module")}function buildUmd(e){const r=t().identifier("babelHelpers");const n=[];n.push(t().variableDeclaration("var",[t().variableDeclarator(r,t().identifier("global"))]));buildHelpers(n,r,e);return t().program([buildUmdWrapper({FACTORY_PARAMETERS:t().identifier("global"),BROWSER_ARGUMENTS:t().assignmentExpression("=",t().memberExpression(t().identifier("root"),r),t().objectExpression([])),COMMON_ARGUMENTS:t().identifier("exports"),AMD_ARGUMENTS:t().arrayExpression([t().stringLiteral("exports")]),FACTORY_BODY:n,UMD_ROOT:t().identifier("this")})])}function buildVar(e){const r=t().identifier("babelHelpers");const n=[];n.push(t().variableDeclaration("var",[t().variableDeclarator(r,t().objectExpression([]))]));const i=t().program(n);buildHelpers(n,r,e);n.push(t().expressionStatement(r));return i}function buildHelpers(e,r,n){const getHelperReference=e=>r?t().memberExpression(r,t().identifier(e)):t().identifier(`_${e}`);const a={};helpers().list.forEach((function(r){if(n&&n.indexOf(r)<0)return;const s=a[r]=getHelperReference(r);helpers().ensure(r,i.default);const{nodes:o}=helpers().get(r,getHelperReference,s);e.push(...o)}));return a}function _default(e,r="global"){let n;const i={global:buildGlobal,module:buildModule,umd:buildUmd,var:buildVar}[r];if(i){n=i(e)}else{throw new Error(`Unsupported output type ${r}`)}return(0,_generator().default)(n).code}},36052:(e,r,n)=>{"use strict";Object.defineProperty(r,"__esModule",{value:true});r.transformFromAstAsync=r.transformFromAstSync=r.transformFromAst=void 0;function _gensync(){const e=n(686);_gensync=function(){return e};return e}var i=n(50119);var a=n(72930);const s=_gensync()((function*(e,r,n){const s=yield*(0,i.default)(n);if(s===null)return null;if(!e)throw new Error("No AST given");return yield*(0,a.run)(s,r,e)}));const o=function transformFromAst(e,r,n,i){if(typeof n==="function"){i=n;n=undefined}if(i===undefined){return s.sync(e,r,n)}s.errback(e,r,n,i)};r.transformFromAst=o;const l=s.sync;r.transformFromAstSync=l;const u=s.async;r.transformFromAstAsync=u},32842:(e,r,n)=>{"use strict";Object.defineProperty(r,"__esModule",{value:true});r.transformFileAsync=r.transformFileSync=r.transformFile=void 0;function _gensync(){const e=n(686);_gensync=function(){return e};return e}var i=n(50119);var a=n(72930);var s=n(39100);({});const o=_gensync()((function*(e,r){const n=Object.assign({},r,{filename:e});const o=yield*(0,i.default)(n);if(o===null)return null;const l=yield*s.readFile(e,"utf8");return yield*(0,a.run)(o,l)}));const l=o.errback;r.transformFile=l;const u=o.sync;r.transformFileSync=u;const p=o.async;r.transformFileAsync=p},99505:(e,r,n)=>{"use strict";Object.defineProperty(r,"__esModule",{value:true});r.transformAsync=r.transformSync=r.transform=void 0;function _gensync(){const e=n(686);_gensync=function(){return e};return e}var i=n(50119);var a=n(72930);const s=_gensync()((function*transform(e,r){const n=yield*(0,i.default)(r);if(n===null)return null;return yield*(0,a.run)(n,e)}));const o=function transform(e,r,n){if(typeof r==="function"){n=r;r=undefined}if(n===undefined)return s.sync(e,r);s.errback(e,r,n)};r.transform=o;const l=s.sync;r.transformSync=l;const u=s.async;r.transformAsync=u},95189:(e,r,n)=>{"use strict";Object.defineProperty(r,"__esModule",{value:true});r["default"]=loadBlockHoistPlugin;function _traverse(){const e=n(65032);_traverse=function(){return e};return e}var i=n(43346);let a;function loadBlockHoistPlugin(){if(!a){a=new i.default(Object.assign({},s,{visitor:_traverse().default.explode(s.visitor)}),{})}return a}function priority(e){const r=e==null?void 0:e._blockHoist;if(r==null)return 1;if(r===true)return 2;return r}function stableSort(e){const r=Object.create(null);for(let n=0;n<e.length;n++){const i=e[n];const a=priority(i);const s=r[a]||(r[a]=[]);s.push(i)}const n=Object.keys(r).map((e=>+e)).sort(((e,r)=>r-e));let i=0;for(const a of n){const n=r[a];for(const r of n){e[i++]=r}}return e}const s={name:"internal.blockHoist",visitor:{Block:{exit({node:e}){const{body:r}=e;let n=Math.pow(2,30)-1;let i=false;for(let e=0;e<r.length;e++){const a=r[e];const s=priority(a);if(s>n){i=true;break}n=s}if(!i)return;e.body=stableSort(r.slice())}}}}},26499:(e,r,n)=>{"use strict";Object.defineProperty(r,"__esModule",{value:true});r["default"]=void 0;function helpers(){const e=n(86168);helpers=function(){return e};return e}function _traverse(){const e=n(65032);_traverse=function(){return e};return e}function _codeFrame(){const e=n(22405);_codeFrame=function(){return e};return e}function t(){const e=n(3101);t=function(){return e};return e}function _helperModuleTransforms(){const e=n(87703);_helperModuleTransforms=function(){return e};return e}function _semver(){const e=n(27849);_semver=function(){return e};return e}const i={enter(e,r){const n=e.node.loc;if(n){r.loc=n;e.stop()}}};class File{constructor(e,{code:r,ast:n,inputMap:i}){this._map=new Map;this.opts=void 0;this.declarations={};this.path=null;this.ast={};this.scope=void 0;this.metadata={};this.code="";this.inputMap=null;this.hub={file:this,getCode:()=>this.code,getScope:()=>this.scope,addHelper:this.addHelper.bind(this),buildError:this.buildCodeFrameError.bind(this)};this.opts=e;this.code=r;this.ast=n;this.inputMap=i;this.path=_traverse().NodePath.get({hub:this.hub,parentPath:null,parent:this.ast,container:this.ast,key:"program"}).setContext();this.scope=this.path.scope}get shebang(){const{interpreter:e}=this.path.node;return e?e.value:""}set shebang(e){if(e){this.path.get("interpreter").replaceWith(t().interpreterDirective(e))}else{this.path.get("interpreter").remove()}}set(e,r){if(e==="helpersNamespace"){throw new Error("Babel 7.0.0-beta.56 has dropped support for the 'helpersNamespace' utility."+"If you are using @babel/plugin-external-helpers you will need to use a newer "+"version than the one you currently have installed. "+"If you have your own implementation, you'll want to explore using 'helperGenerator' "+"alongside 'file.availableHelper()'.")}this._map.set(e,r)}get(e){return this._map.get(e)}has(e){return this._map.has(e)}getModuleName(){return(0,_helperModuleTransforms().getModuleName)(this.opts,this.opts)}addImport(){throw new Error("This API has been removed. If you're looking for this "+"functionality in Babel 7, you should import the "+"'@babel/helper-module-imports' module and use the functions exposed "+" from that module, such as 'addNamed' or 'addDefault'.")}availableHelper(e,r){let n;try{n=helpers().minVersion(e)}catch(e){if(e.code!=="BABEL_HELPER_UNKNOWN")throw e;return false}if(typeof r!=="string")return true;if(_semver().valid(r))r=`^${r}`;return!_semver().intersects(`<${n}`,r)&&!_semver().intersects(`>=8.0.0`,r)}addHelper(e){const r=this.declarations[e];if(r)return t().cloneNode(r);const n=this.get("helperGenerator");if(n){const r=n(e);if(r)return r}helpers().ensure(e,File);const i=this.declarations[e]=this.scope.generateUidIdentifier(e);const a={};for(const r of helpers().getDependencies(e)){a[r]=this.addHelper(r)}const{nodes:s,globals:o}=helpers().get(e,(e=>a[e]),i,Object.keys(this.scope.getAllBindings()));o.forEach((e=>{if(this.path.scope.hasBinding(e,true)){this.path.scope.rename(e)}}));s.forEach((e=>{e._compact=true}));this.path.unshiftContainer("body",s);this.path.get("body").forEach((e=>{if(s.indexOf(e.node)===-1)return;if(e.isVariableDeclaration())this.scope.registerDeclaration(e)}));return i}addTemplateObject(){throw new Error("This function has been moved into the template literal transform itself.")}buildCodeFrameError(e,r,n=SyntaxError){let a=e&&(e.loc||e._loc);if(!a&&e){const n={loc:null};(0,_traverse().default)(e,i,this.scope,n);a=n.loc;let s="This is an error on an internal node. Probably an internal error.";if(a)s+=" Location has been estimated.";r+=` (${s})`}if(a){const{highlightCode:e=true}=this.opts;r+="\n"+(0,_codeFrame().codeFrameColumns)(this.code,{start:{line:a.start.line,column:a.start.column+1},end:a.end&&a.start.line===a.end.line?{line:a.end.line,column:a.end.column+1}:undefined},{highlightCode:e})}return new n(r)}}r["default"]=File},29281:(e,r,n)=>{"use strict";Object.defineProperty(r,"__esModule",{value:true});r["default"]=generateCode;function _convertSourceMap(){const e=n(12270);_convertSourceMap=function(){return e};return e}function _generator(){const e=n(52685);_generator=function(){return e};return e}var i=n(29472);function generateCode(e,r){const{opts:n,ast:a,code:s,inputMap:o}=r;const l=[];for(const r of e){for(const e of r){const{generatorOverride:r}=e;if(r){const e=r(a,n.generatorOpts,s,_generator().default);if(e!==undefined)l.push(e)}}}let u;if(l.length===0){u=(0,_generator().default)(a,n.generatorOpts,s)}else if(l.length===1){u=l[0];if(typeof u.then==="function"){throw new Error(`You appear to be using an async codegen plugin, `+`which your current version of Babel does not support. `+`If you're using a published plugin, `+`you may need to upgrade your @babel/core version.`)}}else{throw new Error("More than one plugin attempted to override codegen.")}let{code:p,map:f}=u;if(f&&o){f=(0,i.default)(o.toObject(),f)}if(n.sourceMaps==="inline"||n.sourceMaps==="both"){p+="\n"+_convertSourceMap().fromObject(f).toComment()}if(n.sourceMaps==="inline"){f=null}return{outputCode:p,outputMap:f}}},29472:(e,r,n)=>{"use strict";Object.defineProperty(r,"__esModule",{value:true});r["default"]=mergeSourceMap;function _sourceMap(){const e=n(4749);_sourceMap=function(){return e};return e}function mergeSourceMap(e,r){const n=buildMappingData(e);const i=buildMappingData(r);const a=new(_sourceMap().SourceMapGenerator);for(const{source:e}of n.sources){if(typeof e.content==="string"){a.setSourceContent(e.path,e.content)}}if(i.sources.length===1){const e=i.sources[0];const r=new Map;eachInputGeneratedRange(n,((n,i,s)=>{eachOverlappingGeneratedOutputRange(e,n,(e=>{const n=makeMappingKey(e);if(r.has(n))return;r.set(n,e);a.addMapping({source:s.path,original:{line:i.line,column:i.columnStart},generated:{line:e.line,column:e.columnStart},name:i.name})}))}));for(const e of r.values()){if(e.columnEnd===Infinity){continue}const n={line:e.line,columnStart:e.columnEnd};const i=makeMappingKey(n);if(r.has(i)){continue}a.addMapping({generated:{line:n.line,column:n.columnStart}})}}const s=a.toJSON();if(typeof n.sourceRoot==="string"){s.sourceRoot=n.sourceRoot}return s}function makeMappingKey(e){return`${e.line}/${e.columnStart}`}function eachOverlappingGeneratedOutputRange(e,r,n){const i=filterApplicableOriginalRanges(e,r);for(const{generated:e}of i){for(const r of e){n(r)}}}function filterApplicableOriginalRanges({mappings:e},{line:r,columnStart:n,columnEnd:i}){return filterSortedArray(e,(({original:e})=>{if(r>e.line)return-1;if(r<e.line)return 1;if(n>=e.columnEnd)return-1;if(i<=e.columnStart)return 1;return 0}))}function eachInputGeneratedRange(e,r){for(const{source:n,mappings:i}of e.sources){for(const{original:e,generated:a}of i){for(const i of a){r(i,e,n)}}}}function buildMappingData(e){const r=new(_sourceMap().SourceMapConsumer)(Object.assign({},e,{sourceRoot:null}));const n=new Map;const i=new Map;let a=null;r.computeColumnSpans();r.eachMapping((e=>{if(e.originalLine===null)return;let s=n.get(e.source);if(!s){s={path:e.source,content:r.sourceContentFor(e.source,true)};n.set(e.source,s)}let o=i.get(s);if(!o){o={source:s,mappings:[]};i.set(s,o)}const l={line:e.originalLine,columnStart:e.originalColumn,columnEnd:Infinity,name:e.name};if(a&&a.source===s&&a.mapping.line===e.originalLine){a.mapping.columnEnd=e.originalColumn}a={source:s,mapping:l};o.mappings.push({original:l,generated:r.allGeneratedPositionsFor({source:e.source,line:e.originalLine,column:e.originalColumn}).map((e=>({line:e.line,columnStart:e.column,columnEnd:e.lastColumn+1})))})}),null,_sourceMap().SourceMapConsumer.ORIGINAL_ORDER);return{file:e.file,sourceRoot:e.sourceRoot,sources:Array.from(i.values())}}function findInsertionLocation(e,r){let n=0;let i=e.length;while(n<i){const a=Math.floor((n+i)/2);const s=e[a];const o=r(s);if(o===0){n=a;break}if(o>=0){i=a}else{n=a+1}}let a=n;if(a<e.length){while(a>=0&&r(e[a])>=0){a--}return a+1}return a}function filterSortedArray(e,r){const n=findInsertionLocation(e,r);const i=[];for(let a=n;a<e.length&&r(e[a])===0;a++){i.push(e[a])}return i}},72930:(e,r,n)=>{"use strict";Object.defineProperty(r,"__esModule",{value:true});r.run=run;function _traverse(){const e=n(65032);_traverse=function(){return e};return e}var i=n(54550);var a=n(95189);var s=n(23924);var o=n(99037);var l=n(29281);function*run(e,r,n){const i=yield*(0,o.default)(e.passes,(0,s.default)(e),r,n);const a=i.opts;try{yield*transformFile(i,e.passes)}catch(e){var u;e.message=`${(u=a.filename)!=null?u:"unknown"}: ${e.message}`;if(!e.code){e.code="BABEL_TRANSFORM_ERROR"}throw e}let p,f;try{if(a.code!==false){({outputCode:p,outputMap:f}=(0,l.default)(e.passes,i))}}catch(e){var c;e.message=`${(c=a.filename)!=null?c:"unknown"}: ${e.message}`;if(!e.code){e.code="BABEL_GENERATE_ERROR"}throw e}return{metadata:i.metadata,options:a,ast:a.ast===true?i.ast:null,code:p===undefined?null:p,map:f===undefined?null:f,sourceType:i.ast.program.sourceType}}function*transformFile(e,r){for(const n of r){const r=[];const s=[];const o=[];for(const l of n.concat([(0,a.default)()])){const n=new i.default(e,l.key,l.options);r.push([l,n]);s.push(n);o.push(l.visitor)}for(const[n,i]of r){const r=n.pre;if(r){const n=r.call(i,e);yield*[];if(isThenable(n)){throw new Error(`You appear to be using an plugin with an async .pre, `+`which your current version of Babel does not support. `+`If you're using a published plugin, you may need to upgrade `+`your @babel/core version.`)}}}const l=_traverse().default.visitors.merge(o,s,e.opts.wrapPluginVisitorMethod);(0,_traverse().default)(e.ast,l,e.scope);for(const[n,i]of r){const r=n.post;if(r){const n=r.call(i,e);yield*[];if(isThenable(n)){throw new Error(`You appear to be using an plugin with an async .post, `+`which your current version of Babel does not support. `+`If you're using a published plugin, you may need to upgrade `+`your @babel/core version.`)}}}}}function isThenable(e){return!!e&&(typeof e==="object"||typeof e==="function")&&!!e.then&&typeof e.then==="function"}},99037:(e,r,n)=>{"use strict";Object.defineProperty(r,"__esModule",{value:true});r["default"]=normalizeFile;function _fs(){const e=n(57147);_fs=function(){return e};return e}function _path(){const e=n(71017);_path=function(){return e};return e}function _debug(){const e=n(86937);_debug=function(){return e};return e}function t(){const e=n(3101);t=function(){return e};return e}function _convertSourceMap(){const e=n(12270);_convertSourceMap=function(){return e};return e}var i=n(26499);var a=n(49665);var s=n(98574);const o=_debug()("babel:transform:file");const l=1e6;function*normalizeFile(e,r,n,f){n=`${n||""}`;if(f){if(f.type==="Program"){f=t().file(f,[],[])}else if(f.type!=="File"){throw new Error("AST root must be a Program or File node")}if(r.cloneInputAst){f=(0,s.default)(f)}}else{f=yield*(0,a.default)(e,r,n)}let c=null;if(r.inputSourceMap!==false){if(typeof r.inputSourceMap==="object"){c=_convertSourceMap().fromObject(r.inputSourceMap)}if(!c){const e=extractComments(u,f);if(e){try{c=_convertSourceMap().fromComment(e)}catch(e){o("discarding unknown inline input sourcemap",e)}}}if(!c){const e=extractComments(p,f);if(typeof r.filename==="string"&&e){try{const n=p.exec(e);const i=_fs().readFileSync(_path().resolve(_path().dirname(r.filename),n[1]));if(i.length>l){o("skip merging input map > 1 MB")}else{c=_convertSourceMap().fromJSON(i)}}catch(e){o("discarding unknown file input sourcemap",e)}}else if(e){o("discarding un-loadable file input sourcemap")}}}return new i.default(r,{code:n,ast:f,inputMap:c})}const u=/^[@#]\s+sourceMappingURL=data:(?:application|text)\/json;(?:charset[:=]\S+?;)?base64,(?:.*)$/;const p=/^[@#][ \t]+sourceMappingURL=([^\s'"`]+)[ \t]*$/;function extractCommentsFromList(e,r,n){if(r){r=r.filter((({value:r})=>{if(e.test(r)){n=r;return false}return true}))}return[r,n]}function extractComments(e,r){let n=null;t().traverseFast(r,(r=>{[r.leadingComments,n]=extractCommentsFromList(e,r.leadingComments,n);[r.innerComments,n]=extractCommentsFromList(e,r.innerComments,n);[r.trailingComments,n]=extractCommentsFromList(e,r.trailingComments,n)}));return n}},23924:(e,r,n)=>{"use strict";Object.defineProperty(r,"__esModule",{value:true});r["default"]=normalizeOptions;function _path(){const e=n(71017);_path=function(){return e};return e}function normalizeOptions(e){const{filename:r,cwd:n,filenameRelative:i=(typeof r==="string"?_path().relative(n,r):"unknown"),sourceType:a="module",inputSourceMap:s,sourceMaps:o=!!s,sourceRoot:l=e.options.moduleRoot,sourceFileName:u=_path().basename(i),comments:p=true,compact:f="auto"}=e.options;const c=e.options;const d=Object.assign({},c,{parserOpts:Object.assign({sourceType:_path().extname(i)===".mjs"?"module":a,sourceFileName:r,plugins:[]},c.parserOpts),generatorOpts:Object.assign({filename:r,auxiliaryCommentBefore:c.auxiliaryCommentBefore,auxiliaryCommentAfter:c.auxiliaryCommentAfter,retainLines:c.retainLines,comments:p,shouldPrintComment:c.shouldPrintComment,compact:f,minified:c.minified,sourceMaps:o,sourceRoot:l,sourceFileName:u},c.generatorOpts)});for(const r of e.passes){for(const e of r){if(e.manipulateOptions){e.manipulateOptions(d,d.parserOpts)}}}return d}},54550:(e,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:true});r["default"]=void 0;class PluginPass{constructor(e,r,n){this._map=new Map;this.key=void 0;this.file=void 0;this.opts=void 0;this.cwd=void 0;this.filename=void 0;this.key=r;this.file=e;this.opts=n||{};this.cwd=e.opts.cwd;this.filename=e.opts.filename}set(e,r){this._map.set(e,r)}get(e){return this._map.get(e)}availableHelper(e,r){return this.file.availableHelper(e,r)}addHelper(e){return this.file.addHelper(e)}addImport(){return this.file.addImport()}buildCodeFrameError(e,r,n){return this.file.buildCodeFrameError(e,r,n)}}r["default"]=PluginPass;{PluginPass.prototype.getModuleName=function getModuleName(){return this.file.getModuleName()}}},95251:(e,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:true});r["default"]=_default;const n="$$ babel internal serialized type"+Math.random();function serialize(e,r){if(typeof r!=="bigint")return r;return{[n]:"BigInt",value:r.toString()}}function revive(e,r){if(!r||typeof r!=="object")return r;if(r[n]!=="BigInt")return r;return BigInt(r.value)}function _default(e){return JSON.parse(JSON.stringify(e,serialize),revive)}},98574:(e,r,n)=>{"use strict";Object.defineProperty(r,"__esModule",{value:true});r["default"]=_default;function _v(){const e=n(84655);_v=function(){return e};return e}var i=n(95251);function _default(e){if(_v().deserialize&&_v().serialize){return _v().deserialize(_v().serialize(e))}return(0,i.default)(e)}},22405:(e,r,n)=>{"use strict";Object.defineProperty(r,"__esModule",{value:true});r.codeFrameColumns=codeFrameColumns;r["default"]=_default;var i=n(22753);let a=false;function getDefs(e){return{gutter:e.grey,marker:e.red.bold,message:e.red.bold}}const s=/\r\n|[\n\r\u2028\u2029]/;function getMarkerLines(e,r,n){const i=Object.assign({column:0,line:-1},e.start);const a=Object.assign({},i,e.end);const{linesAbove:s=2,linesBelow:o=3}=n||{};const l=i.line;const u=i.column;const p=a.line;const f=a.column;let c=Math.max(l-(s+1),0);let d=Math.min(r.length,p+o);if(l===-1){c=0}if(p===-1){d=r.length}const y=p-l;const m={};if(y){for(let e=0;e<=y;e++){const n=e+l;if(!u){m[n]=true}else if(e===0){const e=r[n-1].length;m[n]=[u,e-u+1]}else if(e===y){m[n]=[0,f]}else{const i=r[n-e].length;m[n]=[0,i]}}}else{if(u===f){if(u){m[l]=[u,0]}else{m[l]=true}}else{m[l]=[u,f-u]}}return{start:c,end:d,markerLines:m}}function codeFrameColumns(e,r,n={}){const a=(n.highlightCode||n.forceColor)&&(0,i.shouldHighlight)(n);const o=(0,i.getChalk)(n);const l=getDefs(o);const maybeHighlight=(e,r)=>a?e(r):r;const u=e.split(s);const{start:p,end:f,markerLines:c}=getMarkerLines(r,u,n);const d=r.start&&typeof r.start.column==="number";const y=String(f).length;const m=a?(0,i.default)(e,n):e;let T=m.split(s).slice(p,f).map(((e,r)=>{const i=p+1+r;const a=` ${i}`.slice(-y);const s=` ${a} |`;const o=c[i];const u=!c[i+1];if(o){let r="";if(Array.isArray(o)){const i=e.slice(0,Math.max(o[0]-1,0)).replace(/[^\t]/g," ");const a=o[1]||1;r=["\n ",maybeHighlight(l.gutter,s.replace(/\d/g," "))," ",i,maybeHighlight(l.marker,"^").repeat(a)].join("");if(u&&n.message){r+=" "+maybeHighlight(l.message,n.message)}}return[maybeHighlight(l.marker,">"),maybeHighlight(l.gutter,s),e.length>0?` ${e}`:"",r].join("")}else{return` ${maybeHighlight(l.gutter,s)}${e.length>0?` ${e}`:""}`}})).join("\n");if(n.message&&!d){T=`${" ".repeat(y+1)}${n.message}\n${T}`}if(a){return o.reset(T)}else{return T}}function _default(e,r,n,i={}){if(!a){a=true;const e="Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";if(process.emitWarning){process.emitWarning(e,"DeprecationWarning")}else{const r=new Error(e);r.name="DeprecationWarning";console.warn(new Error(e))}}n=Math.max(n,0);const s={start:{column:n,line:r}};return codeFrameColumns(e,s,i)}},26038:(e,r,n)=>{"use strict";Object.defineProperty(r,"__esModule",{value:true});r.getInclusionReasons=getInclusionReasons;var i=n(27849);var a=n(91610);var s=n(50240);function getInclusionReasons(e,r,n){const o=n[e]||{};return Object.keys(r).reduce(((e,n)=>{const l=(0,s.getLowestImplementedVersion)(o,n);const u=r[n];if(!l){e[n]=(0,a.prettifyVersion)(u)}else{const r=(0,s.isUnreleasedVersion)(l,n);const o=(0,s.isUnreleasedVersion)(u,n);if(!o&&(r||i.lt(u.toString(),(0,s.semverify)(l)))){e[n]=(0,a.prettifyVersion)(u)}}return e}),{})}},24486:(e,r,n)=>{"use strict";Object.defineProperty(r,"__esModule",{value:true});r.targetsSupported=targetsSupported;r.isRequired=isRequired;r["default"]=filterItems;var i=n(27849);var a=n(75884);var s=n(50240);function targetsSupported(e,r){const n=Object.keys(e);if(n.length===0){return false}const a=n.filter((n=>{const a=(0,s.getLowestImplementedVersion)(r,n);if(!a){return true}const o=e[n];if((0,s.isUnreleasedVersion)(o,n)){return false}if((0,s.isUnreleasedVersion)(a,n)){return true}if(!i.valid(o.toString())){throw new Error(`Invalid version passed for target "${n}": "${o}". `+"Versions must be in semver format (major.minor.patch)")}return i.gt((0,s.semverify)(a),o.toString())}));return a.length===0}function isRequired(e,r,{compatData:n=a,includes:i,excludes:s}={}){if(s!=null&&s.has(e))return false;if(i!=null&&i.has(e))return true;return!targetsSupported(r,n[e])}function filterItems(e,r,n,i,a,s,o){const l=new Set;const u={compatData:e,includes:r,excludes:n};for(const r in e){if(isRequired(r,i,u)){l.add(r)}else if(o){const e=o.get(r);if(e){l.add(e)}}}if(a){a.forEach((e=>!n.has(e)&&l.add(e)))}if(s){s.forEach((e=>!r.has(e)&&l.delete(e)))}return l}},44413:(e,r,n)=>{"use strict";Object.defineProperty(r,"__esModule",{value:true});r.isBrowsersQueryValid=isBrowsersQueryValid;r["default"]=getTargets;Object.defineProperty(r,"unreleasedLabels",{enumerable:true,get:function(){return l.unreleasedLabels}});Object.defineProperty(r,"TargetNames",{enumerable:true,get:function(){return u.TargetNames}});Object.defineProperty(r,"prettifyTargets",{enumerable:true,get:function(){return p.prettifyTargets}});Object.defineProperty(r,"getInclusionReasons",{enumerable:true,get:function(){return f.getInclusionReasons}});Object.defineProperty(r,"filterItems",{enumerable:true,get:function(){return c.default}});Object.defineProperty(r,"isRequired",{enumerable:true,get:function(){return c.isRequired}});var i=n(14907);var a=n(27347);var s=n(19302);var o=n(50240);var l=n(11915);var u=n(41888);var p=n(91610);var f=n(26038);var c=n(24486);const d=s["es6.module"];const y=new a.OptionValidator("@babel/helper-compilation-targets");function validateTargetNames(e){const r=Object.keys(u.TargetNames);for(const n of Object.keys(e)){if(!(n in u.TargetNames)){throw new Error(y.formatMessage(`'${n}' is not a valid target\n- Did you mean '${(0,a.findSuggestion)(n,r)}'?`))}}return e}function isBrowsersQueryValid(e){return typeof e==="string"||Array.isArray(e)&&e.every((e=>typeof e==="string"))}function validateBrowsers(e){y.invariant(e===undefined||isBrowsersQueryValid(e),`'${String(e)}' is not a valid browserslist query`);return e}function getLowestVersions(e){return e.reduce(((e,r)=>{const[n,i]=r.split(" ");const a=l.browserNameMap[n];if(!a){return e}try{const r=i.split("-")[0].toLowerCase();const s=(0,o.isUnreleasedVersion)(r,n);if(!e[a]){e[a]=s?r:(0,o.semverify)(r);return e}const l=e[a];const u=(0,o.isUnreleasedVersion)(l,n);if(u&&s){e[a]=(0,o.getLowestUnreleased)(l,r,n)}else if(u){e[a]=(0,o.semverify)(r)}else if(!u&&!s){const n=(0,o.semverify)(r);e[a]=(0,o.semverMin)(l,n)}}catch(e){}return e}),{})}function outputDecimalWarning(e){if(!e.length){return}console.warn("Warning, the following targets are using a decimal version:\n");e.forEach((({target:e,value:r})=>console.warn(`  ${e}: ${r}`)));console.warn(`\nWe recommend using a string for minor/patch versions to avoid numbers like 6.10\ngetting parsed as 6.1, which can lead to unexpected behavior.\n`)}function semverifyTarget(e,r){try{return(0,o.semverify)(r)}catch(n){throw new Error(y.formatMessage(`'${r}' is not a valid value for 'targets.${e}'.`))}}const m={__default(e,r){const n=(0,o.isUnreleasedVersion)(r,e)?r.toLowerCase():semverifyTarget(e,r);return[e,n]},node(e,r){const n=r===true||r==="current"?process.versions.node:semverifyTarget(e,r);return[e,n]}};function generateTargets(e){const r=Object.assign({},e);delete r.esmodules;delete r.browsers;return r}function resolveTargets(e){const r=i(e,{mobileToDesktop:true});return getLowestVersions(r)}function getTargets(e={},r={}){var n;let{browsers:a,esmodules:s}=e;const{configPath:l="."}=r;validateBrowsers(a);const u=generateTargets(e);let p=validateTargetNames(u);const f=!!a;const c=f||Object.keys(p).length>0;const y=!r.ignoreBrowserslistConfig&&!c;if(!a&&y){a=i.loadConfig({config:r.configFile,path:l,env:r.browserslistEnv});if(a==null){{a=[]}}}if(s&&(s!=="intersect"||!((n=a)!=null&&n.length))){a=Object.keys(d).map((e=>`${e} >= ${d[e]}`)).join(", ");s=false}if(a){const e=resolveTargets(a);if(s==="intersect"){for(const r of Object.keys(e)){const n=e[r];if(d[r]){e[r]=(0,o.getHighestUnreleased)(n,(0,o.semverify)(d[r]),r)}else{delete e[r]}}}p=Object.assign(e,p)}const T={};const S=[];for(const e of Object.keys(p).sort()){var h;const r=p[e];if(typeof r==="number"&&r%1!==0){S.push({target:e,value:r})}const n=(h=m[e])!=null?h:m.__default;const[i,a]=n(e,r);if(a){T[i]=a}}outputDecimalWarning(S);return T}},41888:(e,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:true});r.TargetNames=void 0;const n={node:"node",chrome:"chrome",opera:"opera",edge:"edge",firefox:"firefox",safari:"safari",ie:"ie",ios:"ios",android:"android",electron:"electron",samsung:"samsung",rhino:"rhino"};r.TargetNames=n},91610:(e,r,n)=>{"use strict";Object.defineProperty(r,"__esModule",{value:true});r.prettifyVersion=prettifyVersion;r.prettifyTargets=prettifyTargets;var i=n(27849);var a=n(11915);function prettifyVersion(e){if(typeof e!=="string"){return e}const r=[i.major(e)];const n=i.minor(e);const a=i.patch(e);if(n||a){r.push(n)}if(a){r.push(a)}return r.join(".")}function prettifyTargets(e){return Object.keys(e).reduce(((r,n)=>{let i=e[n];const s=a.unreleasedLabels[n];if(typeof i==="string"&&s!==i){i=prettifyVersion(i)}r[n]=i;return r}),{})}},11915:(e,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:true});r.browserNameMap=r.unreleasedLabels=void 0;const n={safari:"tp"};r.unreleasedLabels=n;const i={and_chr:"chrome",and_ff:"firefox",android:"android",chrome:"chrome",edge:"edge",firefox:"firefox",ie:"ie",ie_mob:"ie",ios_saf:"ios",node:"node",op_mob:"opera",opera:"opera",safari:"safari",samsung:"samsung"};r.browserNameMap=i},50240:(e,r,n)=>{"use strict";Object.defineProperty(r,"__esModule",{value:true});r.semverMin=semverMin;r.semverify=semverify;r.isUnreleasedVersion=isUnreleasedVersion;r.getLowestUnreleased=getLowestUnreleased;r.getHighestUnreleased=getHighestUnreleased;r.getLowestImplementedVersion=getLowestImplementedVersion;var i=n(27849);var a=n(27347);var s=n(11915);const o=/^(\d+|\d+.\d+)$/;const l=new a.OptionValidator("@babel/helper-compilation-targets");function semverMin(e,r){return e&&i.lt(e,r)?e:r}function semverify(e){if(typeof e==="string"&&i.valid(e)){return e}l.invariant(typeof e==="number"||typeof e==="string"&&o.test(e),`'${e}' is not a valid version`);const r=e.toString().split(".");while(r.length<3){r.push("0")}return r.join(".")}function isUnreleasedVersion(e,r){const n=s.unreleasedLabels[r];return!!n&&n===e.toString().toLowerCase()}function getLowestUnreleased(e,r,n){const i=s.unreleasedLabels[n];const a=[e,r].some((e=>e===i));if(a){return e===a?r:e||r}return semverMin(e,r)}function getHighestUnreleased(e,r,n){return getLowestUnreleased(e,r,n)===e?r:e}function getLowestImplementedVersion(e,r){const n=e[r];if(!n&&r==="android"){return e.chrome}return n}},75789:(e,r,n)=>{"use strict";Object.defineProperty(r,"__esModule",{value:true});var i=n(3101);function _interopNamespace(e){if(e&&e.__esModule)return e;var r=Object.create(null);if(e){Object.keys(e).forEach((function(n){if(n!=="default"){var i=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(r,n,i.get?i:{enumerable:true,get:function(){return e[n]}})}}))}r["default"]=e;return Object.freeze(r)}var a=_interopNamespace(i);function willPathCastToBoolean(e){const r=e;const{node:n,parentPath:i}=r;if(i.isLogicalExpression()){const{operator:e,right:r}=i.node;if(e==="&&"||e==="||"||e==="??"&&n===r){return willPathCastToBoolean(i)}}if(i.isSequenceExpression()){const{expressions:e}=i.node;if(e[e.length-1]===n){return willPathCastToBoolean(i)}else{return true}}return i.isConditional({test:n})||i.isUnaryExpression({operator:"!"})||i.isLoop({test:n})}class AssignmentMemoiser{constructor(){this._map=void 0;this._map=new WeakMap}has(e){return this._map.has(e)}get(e){if(!this.has(e))return;const r=this._map.get(e);const{value:n}=r;r.count--;if(r.count===0){return a.assignmentExpression("=",n,e)}return n}set(e,r,n){return this._map.set(e,{count:n,value:r})}}function toNonOptional(e,r){const{node:n}=e;if(a.isOptionalMemberExpression(n)){return a.memberExpression(r,n.property,n.computed)}if(e.isOptionalCallExpression()){const n=e.get("callee");if(e.node.optional&&n.isOptionalMemberExpression()){const{object:i}=n.node;const s=e.scope.maybeGenerateMemoised(i)||i;n.get("object").replaceWith(a.assignmentExpression("=",s,i));return a.callExpression(a.memberExpression(r,a.identifier("call")),[s,...e.node.arguments])}return a.callExpression(r,e.node.arguments)}return e.node}function isInDetachedTree(e){while(e){if(e.isProgram())break;const{parentPath:r,container:n,listKey:i}=e;const a=r.node;if(i){if(n!==a[i])return true}else{if(n!==a)return true}e=r}return false}const s={memoise(){},handle(e,r){const{node:n,parent:i,parentPath:s,scope:o}=e;if(e.isOptionalMemberExpression()){if(isInDetachedTree(e))return;const l=e.find((({node:r,parent:n})=>{if(a.isOptionalMemberExpression(n)){return n.optional||n.object!==r}if(a.isOptionalCallExpression(n)){return r!==e.node&&n.optional||n.callee!==r}return true}));if(o.path.isPattern()){l.replaceWith(a.callExpression(a.arrowFunctionExpression([],l.node),[]));return}const u=willPathCastToBoolean(l);const p=l.parentPath;if(p.isUpdateExpression({argument:n})||p.isAssignmentExpression({left:n})){throw e.buildCodeFrameError(`can't handle assignment`)}const f=p.isUnaryExpression({operator:"delete"});if(f&&l.isOptionalMemberExpression()&&l.get("property").isPrivateName()){throw e.buildCodeFrameError(`can't delete a private class element`)}let c=e;for(;;){if(c.isOptionalMemberExpression()){if(c.node.optional)break;c=c.get("object");continue}else if(c.isOptionalCallExpression()){if(c.node.optional)break;c=c.get("callee");continue}throw new Error(`Internal error: unexpected ${c.node.type}`)}const d=c.isOptionalMemberExpression()?"object":"callee";const y=c.node[d];const m=o.maybeGenerateMemoised(y);const T=m!=null?m:y;const S=s.isOptionalCallExpression({callee:n});const isOptionalCall=e=>S;const h=s.isCallExpression({callee:n});c.replaceWith(toNonOptional(c,T));if(isOptionalCall()){if(i.optional){s.replaceWith(this.optionalCall(e,i.arguments))}else{s.replaceWith(this.call(e,i.arguments))}}else if(h){e.replaceWith(this.boundGet(e))}else{e.replaceWith(this.get(e))}let b=e.node;for(let r=e;r!==l;){const e=r.parentPath;if(e===l&&isOptionalCall()&&i.optional){b=e.node;break}b=toNonOptional(e,b);r=e}let E;const P=l.parentPath;if(a.isMemberExpression(b)&&P.isOptionalCallExpression({callee:l.node,optional:true})){const{object:r}=b;E=e.scope.maybeGenerateMemoised(r);if(E){b.object=a.assignmentExpression("=",E,r)}}let x=l;if(f){x=P;b=P.node}const g=m?a.assignmentExpression("=",a.cloneNode(T),a.cloneNode(y)):a.cloneNode(T);if(u){let e;if(r){e=a.binaryExpression("!=",g,a.nullLiteral())}else{e=a.logicalExpression("&&",a.binaryExpression("!==",g,a.nullLiteral()),a.binaryExpression("!==",a.cloneNode(T),o.buildUndefinedNode()))}x.replaceWith(a.logicalExpression("&&",e,b))}else{let e;if(r){e=a.binaryExpression("==",g,a.nullLiteral())}else{e=a.logicalExpression("||",a.binaryExpression("===",g,a.nullLiteral()),a.binaryExpression("===",a.cloneNode(T),o.buildUndefinedNode()))}x.replaceWith(a.conditionalExpression(e,f?a.booleanLiteral(true):o.buildUndefinedNode(),b))}if(E){const e=P.node;P.replaceWith(a.optionalCallExpression(a.optionalMemberExpression(e.callee,a.identifier("call"),false,true),[a.cloneNode(E),...e.arguments],false))}return}if(a.isUpdateExpression(i,{argument:n})){if(this.simpleSet){e.replaceWith(this.simpleSet(e));return}const{operator:r,prefix:o}=i;this.memoise(e,2);const l=a.binaryExpression(r[0],a.unaryExpression("+",this.get(e)),a.numericLiteral(1));if(o){s.replaceWith(this.set(e,l))}else{const{scope:r}=e;const i=r.generateUidIdentifierBasedOnNode(n);r.push({id:i});l.left=a.assignmentExpression("=",a.cloneNode(i),l.left);s.replaceWith(a.sequenceExpression([this.set(e,l),a.cloneNode(i)]))}return}if(s.isAssignmentExpression({left:n})){if(this.simpleSet){e.replaceWith(this.simpleSet(e));return}const{operator:r,right:n}=s.node;if(r==="="){s.replaceWith(this.set(e,n))}else{const i=r.slice(0,-1);if(a.LOGICAL_OPERATORS.includes(i)){this.memoise(e,1);s.replaceWith(a.logicalExpression(i,this.get(e),this.set(e,n)))}else{this.memoise(e,2);s.replaceWith(this.set(e,a.binaryExpression(i,this.get(e),n)))}}return}if(s.isCallExpression({callee:n})){s.replaceWith(this.call(e,s.node.arguments));return}if(s.isOptionalCallExpression({callee:n})){if(o.path.isPattern()){s.replaceWith(a.callExpression(a.arrowFunctionExpression([],s.node),[]));return}s.replaceWith(this.optionalCall(e,s.node.arguments));return}if(s.isForXStatement({left:n})||s.isObjectProperty({value:n})&&s.parentPath.isObjectPattern()||s.isAssignmentPattern({left:n})&&s.parentPath.isObjectProperty({value:i})&&s.parentPath.parentPath.isObjectPattern()||s.isArrayPattern()||s.isAssignmentPattern({left:n})&&s.parentPath.isArrayPattern()||s.isRestElement()){e.replaceWith(this.destructureSet(e));return}if(s.isTaggedTemplateExpression()){e.replaceWith(this.boundGet(e))}else{e.replaceWith(this.get(e))}}};function memberExpressionToFunctions(e,r,n){e.traverse(r,Object.assign({},s,n,{memoiser:new AssignmentMemoiser}))}r["default"]=memberExpressionToFunctions},87071:(e,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:true});r["default"]=getModuleName;{const e=getModuleName;r["default"]=getModuleName=function getModuleName(r,n){var i,a,s,o;return e(r,{moduleId:(i=n.moduleId)!=null?i:r.moduleId,moduleIds:(a=n.moduleIds)!=null?a:r.moduleIds,getModuleId:(s=n.getModuleId)!=null?s:r.getModuleId,moduleRoot:(o=n.moduleRoot)!=null?o:r.moduleRoot})}}function getModuleName(e,r){const{filename:n,filenameRelative:i=n,sourceRoot:a=r.moduleRoot}=e;const{moduleId:s,moduleIds:o=!!s,getModuleId:l,moduleRoot:u=a}=r;if(!o)return null;if(s!=null&&!l){return s}let p=u!=null?u+"/":"";if(i){const e=a!=null?new RegExp("^"+a+"/?"):"";p+=i.replace(e,"").replace(/\.(\w*?)$/,"")}p=p.replace(/\\/g,"/");if(l){return l(p)||p}else{return p}}},87703:(e,r,n)=>{"use strict";Object.defineProperty(r,"__esModule",{value:true});r.rewriteModuleStatementsAndPrepareHeader=rewriteModuleStatementsAndPrepareHeader;r.ensureStatementsHoisted=ensureStatementsHoisted;r.wrapInterop=wrapInterop;r.buildNamespaceInitStatements=buildNamespaceInitStatements;Object.defineProperty(r,"isModule",{enumerable:true,get:function(){return o.isModule}});Object.defineProperty(r,"rewriteThis",{enumerable:true,get:function(){return l.default}});Object.defineProperty(r,"hasExports",{enumerable:true,get:function(){return p.hasExports}});Object.defineProperty(r,"isSideEffectImport",{enumerable:true,get:function(){return p.isSideEffectImport}});Object.defineProperty(r,"getModuleName",{enumerable:true,get:function(){return f.default}});var i=n(39491);var a=n(3101);var s=n(20153);var o=n(29115);var l=n(31600);var u=n(10838);var p=n(61601);var f=n(87071);function rewriteModuleStatementsAndPrepareHeader(e,{loose:r,exportName:n,strict:s,allowTopLevelThis:f,strictMode:c,noInterop:d,importInterop:y=(d?"none":"babel"),lazy:m,esNamespaceOnly:T,constantReexports:S=r,enumerableModuleMeta:h=r,noIncompleteNsImportDetection:b}){(0,p.validateImportInteropOption)(y);i((0,o.isModule)(e),"Cannot process module statements in a script");e.node.sourceType="script";const E=(0,p.default)(e,n,{importInterop:y,initializeReexports:S,lazy:m,esNamespaceOnly:T});if(!f){(0,l.default)(e)}(0,u.default)(e,E);if(c!==false){const r=e.node.directives.some((e=>e.value.value==="use strict"));if(!r){e.unshiftContainer("directives",a.directive(a.directiveLiteral("use strict")))}}const P=[];if((0,p.hasExports)(E)&&!s){P.push(buildESModuleHeader(E,h))}const x=buildExportNameListDeclaration(e,E);if(x){E.exportNameListName=x.name;P.push(x.statement)}P.push(...buildExportInitializationStatements(e,E,S,b));return{meta:E,headers:P}}function ensureStatementsHoisted(e){e.forEach((e=>{e._blockHoist=3}))}function wrapInterop(e,r,n){if(n==="none"){return null}if(n==="node-namespace"){return a.callExpression(e.hub.addHelper("interopRequireWildcard"),[r,a.booleanLiteral(true)])}else if(n==="node-default"){return null}let i;if(n==="default"){i="interopRequireDefault"}else if(n==="namespace"){i="interopRequireWildcard"}else{throw new Error(`Unknown interop: ${n}`)}return a.callExpression(e.hub.addHelper(i),[r])}function buildNamespaceInitStatements(e,r,n=false){const i=[];let o=a.identifier(r.name);if(r.lazy)o=a.callExpression(o,[]);for(const e of r.importsNamespace){if(e===r.name)continue;i.push(s.default.statement`var NAME = SOURCE;`({NAME:e,SOURCE:a.cloneNode(o)}))}if(n){i.push(...buildReexportsFromMeta(e,r,true))}for(const n of r.reexportNamespace){i.push((r.lazy?s.default.statement`
            Object.defineProperty(EXPORTS, "NAME", {
              enumerable: true,
              get: function() {
                return NAMESPACE;
              }
            });
          `:s.default.statement`EXPORTS.NAME = NAMESPACE;`)({EXPORTS:e.exportName,NAME:n,NAMESPACE:a.cloneNode(o)}))}if(r.reexportAll){const s=buildNamespaceReexport(e,a.cloneNode(o),n);s.loc=r.reexportAll.loc;i.push(s)}return i}const c={constant:s.default.statement`EXPORTS.EXPORT_NAME = NAMESPACE_IMPORT;`,constantComputed:s.default.statement`EXPORTS["EXPORT_NAME"] = NAMESPACE_IMPORT;`,spec:(0,s.default)`
    Object.defineProperty(EXPORTS, "EXPORT_NAME", {
      enumerable: true,
      get: function() {
        return NAMESPACE_IMPORT;
      },
    });
    `};const buildReexportsFromMeta=(e,r,n)=>{const i=r.lazy?a.callExpression(a.identifier(r.name),[]):a.identifier(r.name);const{stringSpecifiers:s}=e;return Array.from(r.reexports,(([o,l])=>{let u=a.cloneNode(i);if(l==="default"&&r.interop==="node-default"){}else if(s.has(l)){u=a.memberExpression(u,a.stringLiteral(l),true)}else{u=a.memberExpression(u,a.identifier(l))}const p={EXPORTS:e.exportName,EXPORT_NAME:o,NAMESPACE_IMPORT:u};if(n||a.isIdentifier(u)){if(s.has(o)){return c.constantComputed(p)}else{return c.constant(p)}}else{return c.spec(p)}}))};function buildESModuleHeader(e,r=false){return(r?s.default.statement`
        EXPORTS.__esModule = true;
      `:s.default.statement`
        Object.defineProperty(EXPORTS, "__esModule", {
          value: true,
        });
      `)({EXPORTS:e.exportName})}function buildNamespaceReexport(e,r,n){return(n?s.default.statement`
        Object.keys(NAMESPACE).forEach(function(key) {
          if (key === "default" || key === "__esModule") return;
          VERIFY_NAME_LIST;
          if (key in EXPORTS && EXPORTS[key] === NAMESPACE[key]) return;

          EXPORTS[key] = NAMESPACE[key];
        });
      `:s.default.statement`
        Object.keys(NAMESPACE).forEach(function(key) {
          if (key === "default" || key === "__esModule") return;
          VERIFY_NAME_LIST;
          if (key in EXPORTS && EXPORTS[key] === NAMESPACE[key]) return;

          Object.defineProperty(EXPORTS, key, {
            enumerable: true,
            get: function() {
              return NAMESPACE[key];
            },
          });
        });
    `)({NAMESPACE:r,EXPORTS:e.exportName,VERIFY_NAME_LIST:e.exportNameListName?(0,s.default)`
            if (Object.prototype.hasOwnProperty.call(EXPORTS_LIST, key)) return;
          `({EXPORTS_LIST:e.exportNameListName}):null})}function buildExportNameListDeclaration(e,r){const n=Object.create(null);for(const e of r.local.values()){for(const r of e.names){n[r]=true}}let i=false;for(const e of r.source.values()){for(const r of e.reexports.keys()){n[r]=true}for(const r of e.reexportNamespace){n[r]=true}i=i||!!e.reexportAll}if(!i||Object.keys(n).length===0)return null;const s=e.scope.generateUidIdentifier("exportNames");delete n.default;return{name:s.name,statement:a.variableDeclaration("var",[a.variableDeclarator(s,a.valueToNode(n))])}}function buildExportInitializationStatements(e,r,n=false,i=false){const s=[];const o=[];for(const[e,n]of r.local){if(n.kind==="import"){}else if(n.kind==="hoisted"){s.push(buildInitStatement(r,n.names,a.identifier(e)))}else{o.push(...n.names)}}for(const e of r.source.values()){if(!n){s.push(...buildReexportsFromMeta(r,e,false))}for(const r of e.reexportNamespace){o.push(r)}}if(!i){s.push(...chunk(o,100).map((n=>buildInitStatement(r,n,e.scope.buildUndefinedNode()))))}return s}const d={computed:s.default.expression`EXPORTS["NAME"] = VALUE`,default:s.default.expression`EXPORTS.NAME = VALUE`};function buildInitStatement(e,r,n){const{stringSpecifiers:i,exportName:s}=e;return a.expressionStatement(r.reduce(((e,r)=>{const n={EXPORTS:s,NAME:r,VALUE:e};if(i.has(r)){return d.computed(n)}else{return d.default(n)}}),n))}function chunk(e,r){const n=[];for(let i=0;i<e.length;i+=r){n.push(e.slice(i,i+r))}return n}},61601:(e,r,n)=>{"use strict";Object.defineProperty(r,"__esModule",{value:true});r.hasExports=hasExports;r.isSideEffectImport=isSideEffectImport;r.validateImportInteropOption=validateImportInteropOption;r["default"]=normalizeModuleAndLoadMetadata;var i=n(71017);var a=n(46960);var s=n(37058);function hasExports(e){return e.hasExports}function isSideEffectImport(e){return e.imports.size===0&&e.importsNamespace.size===0&&e.reexports.size===0&&e.reexportNamespace.size===0&&!e.reexportAll}function validateImportInteropOption(e){if(typeof e!=="function"&&e!=="none"&&e!=="babel"&&e!=="node"){throw new Error(`.importInterop must be one of "none", "babel", "node", or a function returning one of those values (received ${e}).`)}return e}function resolveImportInterop(e,r){if(typeof e==="function"){return validateImportInteropOption(e(r))}return e}function normalizeModuleAndLoadMetadata(e,r,{importInterop:n,initializeReexports:i=false,lazy:a=false,esNamespaceOnly:s=false}){if(!r){r=e.scope.generateUidIdentifier("exports").name}const o=new Set;nameAnonymousExports(e);const{local:l,source:u,hasExports:p}=getModuleMetadata(e,{initializeReexports:i,lazy:a},o);removeModuleDeclarations(e);for(const[,e]of u){if(e.importsNamespace.size>0){e.name=e.importsNamespace.values().next().value}const r=resolveImportInterop(n,e.source);if(r==="none"){e.interop="none"}else if(r==="node"&&e.interop==="namespace"){e.interop="node-namespace"}else if(r==="node"&&e.interop==="default"){e.interop="node-default"}else if(s&&e.interop==="namespace"){e.interop="default"}}return{exportName:r,exportNameListName:null,hasExports:p,local:l,source:u,stringSpecifiers:o}}function getExportSpecifierName(e,r){if(e.isIdentifier()){return e.node.name}else if(e.isStringLiteral()){const n=e.node.value;if(!(0,a.isIdentifierName)(n)){r.add(n)}return n}else{throw new Error(`Expected export specifier to be either Identifier or StringLiteral, got ${e.node.type}`)}}function assertExportSpecifier(e){if(e.isExportSpecifier()){return}else if(e.isExportNamespaceSpecifier()){throw e.buildCodeFrameError("Export namespace should be first transformed by `@babel/plugin-proposal-export-namespace-from`.")}else{throw e.buildCodeFrameError("Unexpected export specifier type")}}function getModuleMetadata(e,{lazy:r,initializeReexports:n},a){const s=getLocalExportMetadata(e,n,a);const o=new Map;const getData=r=>{const n=r.value;let a=o.get(n);if(!a){a={name:e.scope.generateUidIdentifier((0,i.basename)(n,(0,i.extname)(n))).name,interop:"none",loc:null,imports:new Map,importsNamespace:new Set,reexports:new Map,reexportNamespace:new Set,reexportAll:null,lazy:false,source:n};o.set(n,a)}return a};let l=false;e.get("body").forEach((e=>{if(e.isImportDeclaration()){const r=getData(e.node.source);if(!r.loc)r.loc=e.node.loc;e.get("specifiers").forEach((e=>{if(e.isImportDefaultSpecifier()){const n=e.get("local").node.name;r.imports.set(n,"default");const i=s.get(n);if(i){s.delete(n);i.names.forEach((e=>{r.reexports.set(e,"default")}))}}else if(e.isImportNamespaceSpecifier()){const n=e.get("local").node.name;r.importsNamespace.add(n);const i=s.get(n);if(i){s.delete(n);i.names.forEach((e=>{r.reexportNamespace.add(e)}))}}else if(e.isImportSpecifier()){const n=getExportSpecifierName(e.get("imported"),a);const i=e.get("local").node.name;r.imports.set(i,n);const o=s.get(i);if(o){s.delete(i);o.names.forEach((e=>{r.reexports.set(e,n)}))}}}))}else if(e.isExportAllDeclaration()){l=true;const r=getData(e.node.source);if(!r.loc)r.loc=e.node.loc;r.reexportAll={loc:e.node.loc}}else if(e.isExportNamedDeclaration()&&e.node.source){l=true;const r=getData(e.node.source);if(!r.loc)r.loc=e.node.loc;e.get("specifiers").forEach((e=>{assertExportSpecifier(e);const n=getExportSpecifierName(e.get("local"),a);const i=getExportSpecifierName(e.get("exported"),a);r.reexports.set(i,n);if(i==="__esModule"){throw e.get("exported").buildCodeFrameError('Illegal export "__esModule".')}}))}else if(e.isExportNamedDeclaration()||e.isExportDefaultDeclaration()){l=true}}));for(const e of o.values()){let r=false;let n=false;if(e.importsNamespace.size>0){r=true;n=true}if(e.reexportAll){n=true}for(const i of e.imports.values()){if(i==="default")r=true;else n=true}for(const i of e.reexports.values()){if(i==="default")r=true;else n=true}if(r&&n){e.interop="namespace"}else if(r){e.interop="default"}}for(const[e,n]of o){if(r!==false&&!(isSideEffectImport(n)||n.reexportAll)){if(r===true){n.lazy=!/\./.test(e)}else if(Array.isArray(r)){n.lazy=r.indexOf(e)!==-1}else if(typeof r==="function"){n.lazy=r(e)}else{throw new Error(`.lazy must be a boolean, string array, or function`)}}}return{hasExports:l,local:s,source:o}}function getLocalExportMetadata(e,r,n){const i=new Map;e.get("body").forEach((e=>{let n;if(e.isImportDeclaration()){n="import"}else{if(e.isExportDefaultDeclaration())e=e.get("declaration");if(e.isExportNamedDeclaration()){if(e.node.declaration){e=e.get("declaration")}else if(r&&e.node.source&&e.get("source").isStringLiteral()){e.get("specifiers").forEach((e=>{assertExportSpecifier(e);i.set(e.get("local").node.name,"block")}));return}}if(e.isFunctionDeclaration()){n="hoisted"}else if(e.isClassDeclaration()){n="block"}else if(e.isVariableDeclaration({kind:"var"})){n="var"}else if(e.isVariableDeclaration()){n="block"}else{return}}Object.keys(e.getOuterBindingIdentifiers()).forEach((e=>{i.set(e,n)}))}));const a=new Map;const getLocalMetadata=e=>{const r=e.node.name;let n=a.get(r);if(!n){const s=i.get(r);if(s===undefined){throw e.buildCodeFrameError(`Exporting local "${r}", which is not declared.`)}n={names:[],kind:s};a.set(r,n)}return n};e.get("body").forEach((e=>{if(e.isExportNamedDeclaration()&&(r||!e.node.source)){if(e.node.declaration){const r=e.get("declaration");const n=r.getOuterBindingIdentifierPaths();Object.keys(n).forEach((e=>{if(e==="__esModule"){throw r.buildCodeFrameError('Illegal export "__esModule".')}getLocalMetadata(n[e]).names.push(e)}))}else{e.get("specifiers").forEach((e=>{const r=e.get("local");const i=e.get("exported");const a=getLocalMetadata(r);const s=getExportSpecifierName(i,n);if(s==="__esModule"){throw i.buildCodeFrameError('Illegal export "__esModule".')}a.names.push(s)}))}}else if(e.isExportDefaultDeclaration()){const r=e.get("declaration");if(r.isFunctionDeclaration()||r.isClassDeclaration()){getLocalMetadata(r.get("id")).names.push("default")}else{throw r.buildCodeFrameError("Unexpected default expression export.")}}}));return a}function nameAnonymousExports(e){e.get("body").forEach((e=>{if(!e.isExportDefaultDeclaration())return;(0,s.default)(e)}))}function removeModuleDeclarations(e){e.get("body").forEach((e=>{if(e.isImportDeclaration()){e.remove()}else if(e.isExportNamedDeclaration()){if(e.node.declaration){e.node.declaration._blockHoist=e.node._blockHoist;e.replaceWith(e.node.declaration)}else{e.remove()}}else if(e.isExportDefaultDeclaration()){const r=e.get("declaration");if(r.isFunctionDeclaration()||r.isClassDeclaration()){r._blockHoist=e.node._blockHoist;e.replaceWith(r)}else{throw r.buildCodeFrameError("Unexpected default expression export.")}}else if(e.isExportAllDeclaration()){e.remove()}}))}},10838:(e,r,n)=>{"use strict";Object.defineProperty(r,"__esModule",{value:true});r["default"]=rewriteLiveReferences;var i=n(39491);var a=n(3101);var s=n(20153);var o=n(38623);function rewriteLiveReferences(e,r){const n=new Map;const i=new Map;const requeueInParent=r=>{e.requeue(r)};for(const[e,i]of r.source){for(const[r,a]of i.imports){n.set(r,[e,a,null])}for(const r of i.importsNamespace){n.set(r,[e,null,r])}}for(const[e,n]of r.local){let r=i.get(e);if(!r){r=[];i.set(e,r)}r.push(...n.names)}const s={metadata:r,requeueInParent:requeueInParent,scope:e.scope,exported:i};e.traverse(l,s);(0,o.default)(e,new Set([...Array.from(n.keys()),...Array.from(i.keys())]));const p={seen:new WeakSet,metadata:r,requeueInParent:requeueInParent,scope:e.scope,imported:n,exported:i,buildImportReference:([e,n,i],s)=>{const o=r.source.get(e);if(i){if(o.lazy)s=a.callExpression(s,[]);return s}let l=a.identifier(o.name);if(o.lazy)l=a.callExpression(l,[]);if(n==="default"&&o.interop==="node-default"){return l}const u=r.stringSpecifiers.has(n);return a.memberExpression(l,u?a.stringLiteral(n):a.identifier(n),u)}};e.traverse(u,p)}const l={Scope(e){e.skip()},ClassDeclaration(e){const{requeueInParent:r,exported:n,metadata:i}=this;const{id:s}=e.node;if(!s)throw new Error("Expected class to have a name");const o=s.name;const l=n.get(o)||[];if(l.length>0){const n=a.expressionStatement(buildBindingExportAssignmentExpression(i,l,a.identifier(o)));n._blockHoist=e.node._blockHoist;r(e.insertAfter(n)[0])}},VariableDeclaration(e){const{requeueInParent:r,exported:n,metadata:i}=this;Object.keys(e.getOuterBindingIdentifiers()).forEach((s=>{const o=n.get(s)||[];if(o.length>0){const n=a.expressionStatement(buildBindingExportAssignmentExpression(i,o,a.identifier(s)));n._blockHoist=e.node._blockHoist;r(e.insertAfter(n)[0])}}))}};const buildBindingExportAssignmentExpression=(e,r,n)=>(r||[]).reduce(((r,n)=>{const{stringSpecifiers:i}=e;const s=i.has(n);return a.assignmentExpression("=",a.memberExpression(a.identifier(e.exportName),s?a.stringLiteral(n):a.identifier(n),s),r)}),n);const buildImportThrow=e=>s.default.expression.ast`
    (function() {
      throw new Error('"' + '${e}' + '" is read-only.');
    })()
  `;const u={ReferencedIdentifier(e){const{seen:r,buildImportReference:n,scope:i,imported:s,requeueInParent:o}=this;if(r.has(e.node))return;r.add(e.node);const l=e.node.name;const u=s.get(l);if(u){const r=e.scope.getBinding(l);const s=i.getBinding(l);if(s!==r)return;const p=n(u,e.node);p.loc=e.node.loc;if((e.parentPath.isCallExpression({callee:e.node})||e.parentPath.isOptionalCallExpression({callee:e.node})||e.parentPath.isTaggedTemplateExpression({tag:e.node}))&&a.isMemberExpression(p)){e.replaceWith(a.sequenceExpression([a.numericLiteral(0),p]))}else if(e.isJSXIdentifier()&&a.isMemberExpression(p)){const{object:r,property:n}=p;e.replaceWith(a.jsxMemberExpression(a.jsxIdentifier(r.name),a.jsxIdentifier(n.name)))}else{e.replaceWith(p)}o(e);e.skip()}},AssignmentExpression:{exit(e){const{scope:r,seen:n,imported:s,exported:o,requeueInParent:l,buildImportReference:u}=this;if(n.has(e.node))return;n.add(e.node);const p=e.get("left");if(p.isMemberExpression())return;if(p.isIdentifier()){const n=p.node.name;if(r.getBinding(n)!==e.scope.getBinding(n)){return}const f=o.get(n);const c=s.get(n);if((f==null?void 0:f.length)>0||c){i(e.node.operator==="=","Path was not simplified");const r=e.node;if(c){r.left=u(c,r.left);r.right=a.sequenceExpression([r.right,buildImportThrow(n)])}e.replaceWith(buildBindingExportAssignmentExpression(this.metadata,f,r));l(e)}}else{const n=p.getOuterBindingIdentifiers();const i=Object.keys(n).filter((n=>r.getBinding(n)===e.scope.getBinding(n)));const u=i.find((e=>s.has(e)));if(u){e.node.right=a.sequenceExpression([e.node.right,buildImportThrow(u)])}const f=[];i.forEach((e=>{const r=o.get(e)||[];if(r.length>0){f.push(buildBindingExportAssignmentExpression(this.metadata,r,a.identifier(e)))}}));if(f.length>0){let r=a.sequenceExpression(f);if(e.parentPath.isExpressionStatement()){r=a.expressionStatement(r);r._blockHoist=e.parentPath.node._blockHoist}const n=e.insertAfter(r)[0];l(n)}}}},"ForOfStatement|ForInStatement"(e){const{scope:r,node:n}=e;const{left:i}=n;const{exported:s,imported:o,scope:l}=this;if(!a.isVariableDeclaration(i)){let n=false,u;const p=e.get("body").scope;for(const e of Object.keys(a.getOuterBindingIdentifiers(i))){if(l.getBinding(e)===r.getBinding(e)){if(s.has(e)){n=true;if(p.hasOwnBinding(e)){p.rename(e)}}if(o.has(e)&&!u){u=e}}}if(!n&&!u){return}e.ensureBlock();const f=e.get("body");const c=r.generateUidIdentifierBasedOnNode(i);e.get("left").replaceWith(a.variableDeclaration("let",[a.variableDeclarator(a.cloneNode(c))]));r.registerDeclaration(e.get("left"));if(n){f.unshiftContainer("body",a.expressionStatement(a.assignmentExpression("=",i,c)))}if(u){f.unshiftContainer("body",a.expressionStatement(buildImportThrow(u)))}}}}},31600:(e,r,n)=>{"use strict";Object.defineProperty(r,"__esModule",{value:true});r["default"]=rewriteThis;var i=n(66771);var a=n(65032);var s=n(3101);function rewriteThis(e){(0,a.default)(e.node,Object.assign({},o,{noScope:true}))}const o=a.default.visitors.merge([i.environmentVisitor,{ThisExpression(e){e.replaceWith(s.unaryExpression("void",s.numericLiteral(0),true))}}])},66771:(e,r,n)=>{"use strict";Object.defineProperty(r,"__esModule",{value:true});r.skipAllButComputedKey=skipAllButComputedKey;r["default"]=r.environmentVisitor=void 0;var i=n(65032);var a=n(75789);var s=n(86721);var o=n(3101);function getPrototypeOfExpression(e,r,n,i){e=o.cloneNode(e);const a=r||i?e:o.memberExpression(e,o.identifier("prototype"));return o.callExpression(n.addHelper("getPrototypeOf"),[a])}function skipAllButComputedKey(e){if(!e.node.computed){e.skip();return}const r=o.VISITOR_KEYS[e.type];for(const n of r){if(n!=="key")e.skipKey(n)}}const l={[`${o.staticBlock?"StaticBlock|":""}ClassPrivateProperty|TypeAnnotation`](e){e.skip()},Function(e){if(e.isMethod())return;if(e.isArrowFunctionExpression())return;e.skip()},"Method|ClassProperty"(e){skipAllButComputedKey(e)}};r.environmentVisitor=l;const u=i.default.visitors.merge([l,{Super(e,r){const{node:n,parentPath:i}=e;if(!i.isMemberExpression({object:n}))return;r.handle(i)}}]);const p=i.default.visitors.merge([l,{Scopable(e,{refName:r}){const n=e.scope.getOwnBinding(r);if(n&&n.identifier.name===r){e.scope.rename(r)}}}]);const f={memoise(e,r){const{scope:n,node:i}=e;const{computed:a,property:s}=i;if(!a){return}const o=n.maybeGenerateMemoised(s);if(!o){return}this.memoiser.set(s,o,r)},prop(e){const{computed:r,property:n}=e.node;if(this.memoiser.has(n)){return o.cloneNode(this.memoiser.get(n))}if(r){return o.cloneNode(n)}return o.stringLiteral(n.name)},get(e){return this._get(e,this._getThisRefs())},_get(e,r){const n=getPrototypeOfExpression(this.getObjectRef(),this.isStatic,this.file,this.isPrivateMethod);return o.callExpression(this.file.addHelper("get"),[r.memo?o.sequenceExpression([r.memo,n]):n,this.prop(e),r.this])},_getThisRefs(){if(!this.isDerivedConstructor){return{this:o.thisExpression()}}const e=this.scope.generateDeclaredUidIdentifier("thisSuper");return{memo:o.assignmentExpression("=",e,o.thisExpression()),this:o.cloneNode(e)}},set(e,r){const n=this._getThisRefs();const i=getPrototypeOfExpression(this.getObjectRef(),this.isStatic,this.file,this.isPrivateMethod);return o.callExpression(this.file.addHelper("set"),[n.memo?o.sequenceExpression([n.memo,i]):i,this.prop(e),r,n.this,o.booleanLiteral(e.isInStrictMode())])},destructureSet(e){throw e.buildCodeFrameError(`Destructuring to a super field is not supported yet.`)},call(e,r){const n=this._getThisRefs();return(0,s.default)(this._get(e,n),o.cloneNode(n.this),r,false)},optionalCall(e,r){const n=this._getThisRefs();return(0,s.default)(this._get(e,n),o.cloneNode(n.this),r,true)}};const c=Object.assign({},f,{prop(e){const{property:r}=e.node;if(this.memoiser.has(r)){return o.cloneNode(this.memoiser.get(r))}return o.cloneNode(r)},get(e){const{isStatic:r,getSuperRef:n}=this;const{computed:i}=e.node;const a=this.prop(e);let s;if(r){var l;s=(l=n())!=null?l:o.memberExpression(o.identifier("Function"),o.identifier("prototype"))}else{var u;s=o.memberExpression((u=n())!=null?u:o.identifier("Object"),o.identifier("prototype"))}return o.memberExpression(s,a,i)},set(e,r){const{computed:n}=e.node;const i=this.prop(e);return o.assignmentExpression("=",o.memberExpression(o.thisExpression(),i,n),r)},destructureSet(e){const{computed:r}=e.node;const n=this.prop(e);return o.memberExpression(o.thisExpression(),n,r)},call(e,r){return(0,s.default)(this.get(e),o.thisExpression(),r,false)},optionalCall(e,r){return(0,s.default)(this.get(e),o.thisExpression(),r,true)}});class ReplaceSupers{constructor(e){var r;const n=e.methodPath;this.methodPath=n;this.isDerivedConstructor=n.isClassMethod({kind:"constructor"})&&!!e.superRef;this.isStatic=n.isObjectMethod()||n.node.static||(n.isStaticBlock==null?void 0:n.isStaticBlock());this.isPrivateMethod=n.isPrivate()&&n.isMethod();this.file=e.file;this.constantSuper=(r=e.constantSuper)!=null?r:e.isLoose;this.opts=e}getObjectRef(){return o.cloneNode(this.opts.objectRef||this.opts.getObjectRef())}getSuperRef(){if(this.opts.superRef)return o.cloneNode(this.opts.superRef);if(this.opts.getSuperRef)return o.cloneNode(this.opts.getSuperRef())}replace(){if(this.opts.refToPreserve){this.methodPath.traverse(p,{refName:this.opts.refToPreserve.name})}const e=this.constantSuper?c:f;(0,a.default)(this.methodPath,u,Object.assign({file:this.file,scope:this.methodPath.scope,isDerivedConstructor:this.isDerivedConstructor,isStatic:this.isStatic,isPrivateMethod:this.isPrivateMethod,getObjectRef:this.getObjectRef.bind(this),getSuperRef:this.getSuperRef.bind(this),boundGet:e.get},e))}}r["default"]=ReplaceSupers},38623:(e,r,n)=>{"use strict";Object.defineProperty(r,"__esModule",{value:true});r["default"]=simplifyAccess;var i=n(3101);function simplifyAccess(e,r){e.traverse(a,{scope:e.scope,bindingNames:r,seen:new WeakSet})}const a={UpdateExpression:{exit(e){const{scope:r,bindingNames:n}=this;const a=e.get("argument");if(!a.isIdentifier())return;const s=a.node.name;if(!n.has(s))return;if(r.getBinding(s)!==e.scope.getBinding(s)){return}if(e.parentPath.isExpressionStatement()&&!e.isCompletionRecord()){const r=e.node.operator=="++"?"+=":"-=";e.replaceWith(i.assignmentExpression(r,a.node,i.numericLiteral(1)))}else if(e.node.prefix){e.replaceWith(i.assignmentExpression("=",i.identifier(s),i.binaryExpression(e.node.operator[0],i.unaryExpression("+",a.node),i.numericLiteral(1))))}else{const r=e.scope.generateUidIdentifierBasedOnNode(a.node,"old");const n=r.name;e.scope.push({id:r});const s=i.binaryExpression(e.node.operator[0],i.identifier(n),i.numericLiteral(1));e.replaceWith(i.sequenceExpression([i.assignmentExpression("=",i.identifier(n),i.unaryExpression("+",a.node)),i.assignmentExpression("=",i.cloneNode(a.node),s),i.identifier(n)]))}}},AssignmentExpression:{exit(e){const{scope:r,seen:n,bindingNames:a}=this;if(e.node.operator==="=")return;if(n.has(e.node))return;n.add(e.node);const s=e.get("left");if(!s.isIdentifier())return;const o=s.node.name;if(!a.has(o))return;if(r.getBinding(o)!==e.scope.getBinding(o)){return}const l=e.node.operator.slice(0,-1);if(i.LOGICAL_OPERATORS.includes(l)){e.replaceWith(i.logicalExpression(l,e.node.left,i.assignmentExpression("=",i.cloneNode(e.node.left),e.node.right)))}else{e.node.right=i.binaryExpression(l,i.cloneNode(e.node.left),e.node.right);e.node.operator="="}}}}},74826:(e,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:true});r.isIdentifierStart=isIdentifierStart;r.isIdentifierChar=isIdentifierChar;r.isIdentifierName=isIdentifierName;let n="ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࣇऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-鿼ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞿꟂ-ꟊꟵ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ";let i="‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿᫀᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷹᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿";const a=new RegExp("["+n+"]");const s=new RegExp("["+n+i+"]");n=i=null;const o=[0,11,2,25,2,18,2,1,2,14,3,13,35,122,70,52,268,28,4,48,48,31,14,29,6,37,11,29,3,35,5,7,2,4,43,157,19,35,5,35,5,39,9,51,157,310,10,21,11,7,153,5,3,0,2,43,2,1,4,0,3,22,11,22,10,30,66,18,2,1,11,21,11,25,71,55,7,1,65,0,16,3,2,2,2,28,43,28,4,28,36,7,2,27,28,53,11,21,11,18,14,17,111,72,56,50,14,50,14,35,349,41,7,1,79,28,11,0,9,21,107,20,28,22,13,52,76,44,33,24,27,35,30,0,3,0,9,34,4,0,13,47,15,3,22,0,2,0,36,17,2,24,85,6,2,0,2,3,2,14,2,9,8,46,39,7,3,1,3,21,2,6,2,1,2,4,4,0,19,0,13,4,159,52,19,3,21,2,31,47,21,1,2,0,185,46,42,3,37,47,21,0,60,42,14,0,72,26,230,43,117,63,32,7,3,0,3,7,2,1,2,23,16,0,2,0,95,7,3,38,17,0,2,0,29,0,11,39,8,0,22,0,12,45,20,0,35,56,264,8,2,36,18,0,50,29,113,6,2,1,2,37,22,0,26,5,2,1,2,31,15,0,328,18,190,0,80,921,103,110,18,195,2749,1070,4050,582,8634,568,8,30,114,29,19,47,17,3,32,20,6,18,689,63,129,74,6,0,67,12,65,1,2,0,29,6135,9,1237,43,8,8952,286,50,2,18,3,9,395,2309,106,6,12,4,8,8,9,5991,84,2,70,2,1,3,0,3,1,3,3,2,11,2,0,2,6,2,64,2,3,3,7,2,6,2,27,2,3,2,4,2,0,4,6,2,339,3,24,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,7,2357,44,11,6,17,0,370,43,1301,196,60,67,8,0,1205,3,2,26,2,1,2,0,3,0,2,9,2,3,2,0,2,0,7,0,5,0,2,0,2,0,2,2,2,1,2,0,3,0,2,0,2,0,2,0,2,0,2,1,2,0,3,3,2,6,2,3,2,3,2,0,2,9,2,16,6,2,2,4,2,16,4421,42717,35,4148,12,221,3,5761,15,7472,3104,541,1507,4938];const l=[509,0,227,0,150,4,294,9,1368,2,2,1,6,3,41,2,5,0,166,1,574,3,9,9,370,1,154,10,176,2,54,14,32,9,16,3,46,10,54,9,7,2,37,13,2,9,6,1,45,0,13,2,49,13,9,3,2,11,83,11,7,0,161,11,6,9,7,3,56,1,2,6,3,1,3,2,10,0,11,1,3,6,4,4,193,17,10,9,5,0,82,19,13,9,214,6,3,8,28,1,83,16,16,9,82,12,9,9,84,14,5,9,243,14,166,9,71,5,2,1,3,3,2,0,2,1,13,9,120,6,3,6,4,0,29,9,41,6,2,3,9,0,10,10,47,15,406,7,2,7,17,9,57,21,2,13,123,5,4,0,2,1,2,6,2,0,9,9,49,4,2,1,2,4,9,9,330,3,19306,9,135,4,60,6,26,9,1014,0,2,54,8,3,82,0,12,1,19628,1,5319,4,4,5,9,7,3,6,31,3,149,2,1418,49,513,54,5,49,9,0,15,0,23,4,2,14,1361,6,2,16,3,6,2,1,2,4,262,6,10,9,419,13,1495,6,110,6,6,9,4759,9,787719,239];function isInAstralSet(e,r){let n=65536;for(let i=0,a=r.length;i<a;i+=2){n+=r[i];if(n>e)return false;n+=r[i+1];if(n>=e)return true}return false}function isIdentifierStart(e){if(e<65)return e===36;if(e<=90)return true;if(e<97)return e===95;if(e<=122)return true;if(e<=65535){return e>=170&&a.test(String.fromCharCode(e))}return isInAstralSet(e,o)}function isIdentifierChar(e){if(e<48)return e===36;if(e<58)return true;if(e<65)return false;if(e<=90)return true;if(e<97)return e===95;if(e<=122)return true;if(e<=65535){return e>=170&&s.test(String.fromCharCode(e))}return isInAstralSet(e,o)||isInAstralSet(e,l)}function isIdentifierName(e){let r=true;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);if((i&64512)===55296&&n+1<e.length){const r=e.charCodeAt(++n);if((r&64512)===56320){i=65536+((i&1023)<<10)+(r&1023)}}if(r){r=false;if(!isIdentifierStart(i)){return false}}else if(!isIdentifierChar(i)){return false}}return!r}},46960:(e,r,n)=>{"use strict";Object.defineProperty(r,"__esModule",{value:true});Object.defineProperty(r,"isIdentifierName",{enumerable:true,get:function(){return i.isIdentifierName}});Object.defineProperty(r,"isIdentifierChar",{enumerable:true,get:function(){return i.isIdentifierChar}});Object.defineProperty(r,"isIdentifierStart",{enumerable:true,get:function(){return i.isIdentifierStart}});Object.defineProperty(r,"isReservedWord",{enumerable:true,get:function(){return a.isReservedWord}});Object.defineProperty(r,"isStrictBindOnlyReservedWord",{enumerable:true,get:function(){return a.isStrictBindOnlyReservedWord}});Object.defineProperty(r,"isStrictBindReservedWord",{enumerable:true,get:function(){return a.isStrictBindReservedWord}});Object.defineProperty(r,"isStrictReservedWord",{enumerable:true,get:function(){return a.isStrictReservedWord}});Object.defineProperty(r,"isKeyword",{enumerable:true,get:function(){return a.isKeyword}});var i=n(74826);var a=n(1465)},1465:(e,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:true});r.isReservedWord=isReservedWord;r.isStrictReservedWord=isStrictReservedWord;r.isStrictBindOnlyReservedWord=isStrictBindOnlyReservedWord;r.isStrictBindReservedWord=isStrictBindReservedWord;r.isKeyword=isKeyword;const n={keyword:["break","case","catch","continue","debugger","default","do","else","finally","for","function","if","return","switch","throw","try","var","const","while","with","new","this","super","class","extends","export","import","null","true","false","in","instanceof","typeof","void","delete"],strict:["implements","interface","let","package","private","protected","public","static","yield"],strictBind:["eval","arguments"]};const i=new Set(n.keyword);const a=new Set(n.strict);const s=new Set(n.strictBind);function isReservedWord(e,r){return r&&e==="await"||e==="enum"}function isStrictReservedWord(e,r){return isReservedWord(e,r)||a.has(e)}function isStrictBindOnlyReservedWord(e){return s.has(e)}function isStrictBindReservedWord(e,r){return isStrictReservedWord(e,r)||isStrictBindOnlyReservedWord(e)}function isKeyword(e){return i.has(e)}},51606:(e,r,n)=>{"use strict";Object.defineProperty(r,"__esModule",{value:true});r.wrapRegExp=r["typeof"]=r.objectSpread2=r.jsx=void 0;var i=n(20153);const a={minVersion:"7.0.0-beta.0",ast:()=>i.default.program.ast('\nvar REACT_ELEMENT_TYPE;\nexport default function _createRawReactElement(type, props, key, children) {\n  if (!REACT_ELEMENT_TYPE) {\n    REACT_ELEMENT_TYPE =\n      (typeof Symbol === "function" &&\n        \n        Symbol["for"] &&\n        Symbol["for"]("react.element")) ||\n      0xeac7;\n  }\n  var defaultProps = type && type.defaultProps;\n  var childrenLength = arguments.length - 3;\n  if (!props && childrenLength !== 0) {\n    \n    \n    props = { children: void 0 };\n  }\n  if (childrenLength === 1) {\n    props.children = children;\n  } else if (childrenLength > 1) {\n    var childArray = new Array(childrenLength);\n    for (var i = 0; i < childrenLength; i++) {\n      childArray[i] = arguments[i + 3];\n    }\n    props.children = childArray;\n  }\n  if (props && defaultProps) {\n    for (var propName in defaultProps) {\n      if (props[propName] === void 0) {\n        props[propName] = defaultProps[propName];\n      }\n    }\n  } else if (!props) {\n    props = defaultProps || {};\n  }\n  return {\n    $$typeof: REACT_ELEMENT_TYPE,\n    type: type,\n    key: key === undefined ? null : "" + key,\n    ref: null,\n    props: props,\n    _owner: null,\n  };\n}\n')};r.jsx=a;const s={minVersion:"7.5.0",ast:()=>i.default.program.ast('\nimport defineProperty from "defineProperty";\nfunction ownKeys(object, enumerableOnly) {\n  var keys = Object.keys(object);\n  if (Object.getOwnPropertySymbols) {\n    var symbols = Object.getOwnPropertySymbols(object);\n    if (enumerableOnly) {\n      symbols = symbols.filter(function (sym) {\n        return Object.getOwnPropertyDescriptor(object, sym).enumerable;\n      });\n    }\n    keys.push.apply(keys, symbols);\n  }\n  return keys;\n}\nexport default function _objectSpread2(target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i] != null ? arguments[i] : {};\n    if (i % 2) {\n      ownKeys(Object(source), true).forEach(function (key) {\n        defineProperty(target, key, source[key]);\n      });\n    } else if (Object.getOwnPropertyDescriptors) {\n      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));\n    } else {\n      ownKeys(Object(source)).forEach(function (key) {\n        Object.defineProperty(\n          target,\n          key,\n          Object.getOwnPropertyDescriptor(source, key)\n        );\n      });\n    }\n  }\n  return target;\n}\n')};r.objectSpread2=s;const o={minVersion:"7.0.0-beta.0",ast:()=>i.default.program.ast('\nexport default function _typeof(obj) {\n  "@babel/helpers - typeof";\n  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {\n    _typeof = function (obj) {\n      return typeof obj;\n    };\n  } else {\n    _typeof = function (obj) {\n      return obj &&\n        typeof Symbol === "function" &&\n        obj.constructor === Symbol &&\n        obj !== Symbol.prototype\n        ? "symbol"\n        : typeof obj;\n    };\n  }\n  return _typeof(obj);\n}\n')};r["typeof"]=o;const l={minVersion:"7.2.6",ast:()=>i.default.program.ast('\nimport setPrototypeOf from "setPrototypeOf";\nimport inherits from "inherits";\nexport default function _wrapRegExp() {\n  _wrapRegExp = function (re, groups) {\n    return new BabelRegExp(re, undefined, groups);\n  };\n  var _super = RegExp.prototype;\n  var _groups = new WeakMap();\n  function BabelRegExp(re, flags, groups) {\n    var _this = new RegExp(re, flags);\n    \n    _groups.set(_this, groups || _groups.get(re));\n    return setPrototypeOf(_this, BabelRegExp.prototype);\n  }\n  inherits(BabelRegExp, RegExp);\n  BabelRegExp.prototype.exec = function (str) {\n    var result = _super.exec.call(this, str);\n    if (result) result.groups = buildGroups(result, this);\n    return result;\n  };\n  BabelRegExp.prototype[Symbol.replace] = function (str, substitution) {\n    if (typeof substitution === "string") {\n      var groups = _groups.get(this);\n      return _super[Symbol.replace].call(\n        this,\n        str,\n        substitution.replace(/\\$<([^>]+)>/g, function (_, name) {\n          return "$" + groups[name];\n        })\n      );\n    } else if (typeof substitution === "function") {\n      var _this = this;\n      return _super[Symbol.replace].call(this, str, function () {\n        var args = arguments;\n        \n        if (typeof args[args.length - 1] !== "object") {\n          args = [].slice.call(args);\n          args.push(buildGroups(args, _this));\n        }\n        return substitution.apply(this, args);\n      });\n    } else {\n      return _super[Symbol.replace].call(this, str, substitution);\n    }\n  };\n  function buildGroups(result, re) {\n    \n    \n    var g = _groups.get(re);\n    return Object.keys(g).reduce(function (groups, name) {\n      groups[name] = result[g[name]];\n      return groups;\n    }, Object.create(null));\n  }\n  return _wrapRegExp.apply(this, arguments);\n}\n')};r.wrapRegExp=l},16759:(e,r,n)=>{"use strict";Object.defineProperty(r,"__esModule",{value:true});r["default"]=void 0;var i=n(20153);var a=n(51606);const s=Object.assign({__proto__:null},a);var o=s;r["default"]=o;const helper=e=>r=>({minVersion:e,ast:()=>i.default.program.ast(r)});s.asyncIterator=helper("7.0.0-beta.0")`
  export default function _asyncIterator(iterable) {
    var method;
    if (typeof Symbol !== "undefined") {
      if (Symbol.asyncIterator) method = iterable[Symbol.asyncIterator];
      if (method == null && Symbol.iterator) method = iterable[Symbol.iterator];
    }
    if (method == null) method = iterable["@@asyncIterator"];
    if (method == null) method = iterable["@@iterator"]
    if (method == null) throw new TypeError("Object is not async iterable");
    return method.call(iterable);
  }
`;s.AwaitValue=helper("7.0.0-beta.0")`
  export default function _AwaitValue(value) {
    this.wrapped = value;
  }
`;s.AsyncGenerator=helper("7.0.0-beta.0")`
  import AwaitValue from "AwaitValue";

  export default function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null,
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg)
        var value = result.value;
        var wrappedAwait = value instanceof AwaitValue;

        Promise.resolve(wrappedAwait ? value.wrapped : value).then(
          function (arg) {
            if (wrappedAwait) {
              resume(key === "return" ? "return" : "next", arg);
              return
            }

            settle(result.done ? "return" : "normal", arg);
          },
          function (err) { resume("throw", err); });
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({ value: value, done: true });
          break;
        case "throw":
          front.reject(value);
          break;
        default:
          front.resolve({ value: value, done: false });
          break;
      }

      front = front.next;
      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    // Hide "return" method if generator return is not supported
    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  AsyncGenerator.prototype[typeof Symbol === "function" && Symbol.asyncIterator || "@@asyncIterator"] = function () { return this; };

  AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); };
  AsyncGenerator.prototype.throw = function (arg) { return this._invoke("throw", arg); };
  AsyncGenerator.prototype.return = function (arg) { return this._invoke("return", arg); };
`;s.wrapAsyncGenerator=helper("7.0.0-beta.0")`
  import AsyncGenerator from "AsyncGenerator";

  export default function _wrapAsyncGenerator(fn) {
    return function () {
      return new AsyncGenerator(fn.apply(this, arguments));
    };
  }
`;s.awaitAsyncGenerator=helper("7.0.0-beta.0")`
  import AwaitValue from "AwaitValue";

  export default function _awaitAsyncGenerator(value) {
    return new AwaitValue(value);
  }
`;s.asyncGeneratorDelegate=helper("7.0.0-beta.0")`
  export default function _asyncGeneratorDelegate(inner, awaitWrap) {
    var iter = {}, waiting = false;

    function pump(key, value) {
      waiting = true;
      value = new Promise(function (resolve) { resolve(inner[key](value)); });
      return { done: false, value: awaitWrap(value) };
    };

    iter[typeof Symbol !== "undefined" && Symbol.iterator || "@@iterator"] = function () { return this; };

    iter.next = function (value) {
      if (waiting) {
        waiting = false;
        return value;
      }
      return pump("next", value);
    };

    if (typeof inner.throw === "function") {
      iter.throw = function (value) {
        if (waiting) {
          waiting = false;
          throw value;
        }
        return pump("throw", value);
      };
    }

    if (typeof inner.return === "function") {
      iter.return = function (value) {
        if (waiting) {
          waiting = false;
          return value;
        }
        return pump("return", value);
      };
    }

    return iter;
  }
`;s.asyncToGenerator=helper("7.0.0-beta.0")`
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  export default function _asyncToGenerator(fn) {
    return function () {
      var self = this, args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }
`;s.classCallCheck=helper("7.0.0-beta.0")`
  export default function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
`;s.createClass=helper("7.0.0-beta.0")`
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i ++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  export default function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
`;s.defineEnumerableProperties=helper("7.0.0-beta.0")`
  export default function _defineEnumerableProperties(obj, descs) {
    for (var key in descs) {
      var desc = descs[key];
      desc.configurable = desc.enumerable = true;
      if ("value" in desc) desc.writable = true;
      Object.defineProperty(obj, key, desc);
    }

    // Symbols are not enumerated over by for-in loops. If native
    // Symbols are available, fetch all of the descs object's own
    // symbol properties and define them on our target object too.
    if (Object.getOwnPropertySymbols) {
      var objectSymbols = Object.getOwnPropertySymbols(descs);
      for (var i = 0; i < objectSymbols.length; i++) {
        var sym = objectSymbols[i];
        var desc = descs[sym];
        desc.configurable = desc.enumerable = true;
        if ("value" in desc) desc.writable = true;
        Object.defineProperty(obj, sym, desc);
      }
    }
    return obj;
  }
`;s.defaults=helper("7.0.0-beta.0")`
  export default function _defaults(obj, defaults) {
    var keys = Object.getOwnPropertyNames(defaults);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var value = Object.getOwnPropertyDescriptor(defaults, key);
      if (value && value.configurable && obj[key] === undefined) {
        Object.defineProperty(obj, key, value);
      }
    }
    return obj;
  }
`;s.defineProperty=helper("7.0.0-beta.0")`
  export default function _defineProperty(obj, key, value) {
    // Shortcircuit the slow defineProperty path when possible.
    // We are trying to avoid issues where setters defined on the
    // prototype cause side effects under the fast path of simple
    // assignment. By checking for existence of the property with
    // the in operator, we can optimize most of this overhead away.
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
`;s.extends=helper("7.0.0-beta.0")`
  export default function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };

    return _extends.apply(this, arguments);
  }
`;s.objectSpread=helper("7.0.0-beta.0")`
  import defineProperty from "defineProperty";

  export default function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = (arguments[i] != null) ? Object(arguments[i]) : {};
      var ownKeys = Object.keys(source);
      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }
      ownKeys.forEach(function(key) {
        defineProperty(target, key, source[key]);
      });
    }
    return target;
  }
`;s.inherits=helper("7.0.0-beta.0")`
  import setPrototypeOf from "setPrototypeOf";

  export default function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) setPrototypeOf(subClass, superClass);
  }
`;s.inheritsLoose=helper("7.0.0-beta.0")`
  import setPrototypeOf from "setPrototypeOf";

  export default function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    setPrototypeOf(subClass, superClass);
  }
`;s.getPrototypeOf=helper("7.0.0-beta.0")`
  export default function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function _getPrototypeOf(o) {
          return o.__proto__ || Object.getPrototypeOf(o);
        };
    return _getPrototypeOf(o);
  }
`;s.setPrototypeOf=helper("7.0.0-beta.0")`
  export default function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
`;s.isNativeReflectConstruct=helper("7.9.0")`
  export default function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;

    // core-js@3
    if (Reflect.construct.sham) return false;

    // Proxy can't be polyfilled. Every browser implemented
    // proxies before or at the same time as Reflect.construct,
    // so if they support Proxy they also support Reflect.construct.
    if (typeof Proxy === "function") return true;

    // Since Reflect.construct can't be properly polyfilled, some
    // implementations (e.g. core-js@2) don't set the correct internal slots.
    // Those polyfills don't allow us to subclass built-ins, so we need to
    // use our fallback implementation.
    try {
      // If the internal slots aren't set, this throws an error similar to
      //   TypeError: this is not a Boolean object.

      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
      return true;
    } catch (e) {
      return false;
    }
  }
`;s.construct=helper("7.0.0-beta.0")`
  import setPrototypeOf from "setPrototypeOf";
  import isNativeReflectConstruct from "isNativeReflectConstruct";

  export default function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      // NOTE: If Parent !== Class, the correct __proto__ is set *after*
      //       calling the constructor.
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }
    // Avoid issues with Class being present but undefined when it wasn't
    // present in the original call.
    return _construct.apply(null, arguments);
  }
`;s.isNativeFunction=helper("7.0.0-beta.0")`
  export default function _isNativeFunction(fn) {
    // Note: This function returns "true" for core-js functions.
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }
`;s.wrapNativeSuper=helper("7.0.0-beta.0")`
  import getPrototypeOf from "getPrototypeOf";
  import setPrototypeOf from "setPrototypeOf";
  import isNativeFunction from "isNativeFunction";
  import construct from "construct";

  export default function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !isNativeFunction(Class)) return Class;
      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);
        _cache.set(Class, Wrapper);
      }
      function Wrapper() {
        return construct(Class, arguments, getPrototypeOf(this).constructor)
      }
      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true,
        }
      });

      return setPrototypeOf(Wrapper, Class);
    }

    return _wrapNativeSuper(Class)
  }
`;s.instanceof=helper("7.0.0-beta.0")`
  export default function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
      return !!right[Symbol.hasInstance](left);
    } else {
      return left instanceof right;
    }
  }
`;s.interopRequireDefault=helper("7.0.0-beta.0")`
  export default function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
`;s.interopRequireWildcard=helper("7.14.0")`
  function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;

    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function (nodeInterop) {
      return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
  }

  export default function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
      return obj;
    }

    if (obj === null || (typeof obj !== "object" && typeof obj !== "function")) {
      return { default: obj }
    }

    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }

    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor
          ? Object.getOwnPropertyDescriptor(obj, key)
          : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj.default = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
`;s.newArrowCheck=helper("7.0.0-beta.0")`
  export default function _newArrowCheck(innerThis, boundThis) {
    if (innerThis !== boundThis) {
      throw new TypeError("Cannot instantiate an arrow function");
    }
  }
`;s.objectDestructuringEmpty=helper("7.0.0-beta.0")`
  export default function _objectDestructuringEmpty(obj) {
    if (obj == null) throw new TypeError("Cannot destructure undefined");
  }
`;s.objectWithoutPropertiesLoose=helper("7.0.0-beta.0")`
  export default function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};

    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }
`;s.objectWithoutProperties=helper("7.0.0-beta.0")`
  import objectWithoutPropertiesLoose from "objectWithoutPropertiesLoose";

  export default function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = objectWithoutPropertiesLoose(source, excluded);
    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }
`;s.assertThisInitialized=helper("7.0.0-beta.0")`
  export default function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
`;s.possibleConstructorReturn=helper("7.0.0-beta.0")`
  import assertThisInitialized from "assertThisInitialized";

  export default function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }

    return assertThisInitialized(self);
  }
`;s.createSuper=helper("7.9.0")`
  import getPrototypeOf from "getPrototypeOf";
  import isNativeReflectConstruct from "isNativeReflectConstruct";
  import possibleConstructorReturn from "possibleConstructorReturn";

  export default function _createSuper(Derived) {
    var hasNativeReflectConstruct = isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        // NOTE: This doesn't work if this.__proto__.constructor has been modified.
        var NewTarget = getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return possibleConstructorReturn(this, result);
    }
  }
 `;s.superPropBase=helper("7.0.0-beta.0")`
  import getPrototypeOf from "getPrototypeOf";

  export default function _superPropBase(object, property) {
    // Yes, this throws if object is null to being with, that's on purpose.
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = getPrototypeOf(object);
      if (object === null) break;
    }
    return object;
  }
`;s.get=helper("7.0.0-beta.0")`
  import superPropBase from "superPropBase";

  export default function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = superPropBase(target, property);

        if (!base) return;

        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }
    return _get(target, property, receiver || target);
  }
`;s.set=helper("7.0.0-beta.0")`
  import superPropBase from "superPropBase";
  import defineProperty from "defineProperty";

  function set(target, property, value, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.set) {
      set = Reflect.set;
    } else {
      set = function set(target, property, value, receiver) {
        var base = superPropBase(target, property);
        var desc;

        if (base) {
          desc = Object.getOwnPropertyDescriptor(base, property);
          if (desc.set) {
            desc.set.call(receiver, value);
            return true;
          } else if (!desc.writable) {
            // Both getter and non-writable fall into this.
            return false;
          }
        }

        // Without a super that defines the property, spec boils down to
        // "define on receiver" for some reason.
        desc = Object.getOwnPropertyDescriptor(receiver, property);
        if (desc) {
          if (!desc.writable) {
            // Setter, getter, and non-writable fall into this.
            return false;
          }

          desc.value = value;
          Object.defineProperty(receiver, property, desc);
        } else {
          // Avoid setters that may be defined on Sub's prototype, but not on
          // the instance.
          defineProperty(receiver, property, value);
        }

        return true;
      };
    }

    return set(target, property, value, receiver);
  }

  export default function _set(target, property, value, receiver, isStrict) {
    var s = set(target, property, value, receiver || target);
    if (!s && isStrict) {
      throw new Error('failed to set property');
    }

    return value;
  }
`;s.taggedTemplateLiteral=helper("7.0.0-beta.0")`
  export default function _taggedTemplateLiteral(strings, raw) {
    if (!raw) { raw = strings.slice(0); }
    return Object.freeze(Object.defineProperties(strings, {
        raw: { value: Object.freeze(raw) }
    }));
  }
`;s.taggedTemplateLiteralLoose=helper("7.0.0-beta.0")`
  export default function _taggedTemplateLiteralLoose(strings, raw) {
    if (!raw) { raw = strings.slice(0); }
    strings.raw = raw;
    return strings;
  }
`;s.readOnlyError=helper("7.0.0-beta.0")`
  export default function _readOnlyError(name) {
    throw new TypeError("\\"" + name + "\\" is read-only");
  }
`;s.writeOnlyError=helper("7.12.13")`
  export default function _writeOnlyError(name) {
    throw new TypeError("\\"" + name + "\\" is write-only");
  }
`;s.classNameTDZError=helper("7.0.0-beta.0")`
  export default function _classNameTDZError(name) {
    throw new Error("Class \\"" + name + "\\" cannot be referenced in computed property keys.");
  }
`;s.temporalUndefined=helper("7.0.0-beta.0")`
  // This function isn't mean to be called, but to be used as a reference.
  // We can't use a normal object because it isn't hoisted.
  export default function _temporalUndefined() {}
`;s.tdz=helper("7.5.5")`
  export default function _tdzError(name) {
    throw new ReferenceError(name + " is not defined - temporal dead zone");
  }
`;s.temporalRef=helper("7.0.0-beta.0")`
  import undef from "temporalUndefined";
  import err from "tdz";

  export default function _temporalRef(val, name) {
    return val === undef ? err(name) : val;
  }
`;s.slicedToArray=helper("7.0.0-beta.0")`
  import arrayWithHoles from "arrayWithHoles";
  import iterableToArrayLimit from "iterableToArrayLimit";
  import unsupportedIterableToArray from "unsupportedIterableToArray";
  import nonIterableRest from "nonIterableRest";

  export default function _slicedToArray(arr, i) {
    return (
      arrayWithHoles(arr) ||
      iterableToArrayLimit(arr, i) ||
      unsupportedIterableToArray(arr, i) ||
      nonIterableRest()
    );
  }
`;s.slicedToArrayLoose=helper("7.0.0-beta.0")`
  import arrayWithHoles from "arrayWithHoles";
  import iterableToArrayLimitLoose from "iterableToArrayLimitLoose";
  import unsupportedIterableToArray from "unsupportedIterableToArray";
  import nonIterableRest from "nonIterableRest";

  export default function _slicedToArrayLoose(arr, i) {
    return (
      arrayWithHoles(arr) ||
      iterableToArrayLimitLoose(arr, i) ||
      unsupportedIterableToArray(arr, i) ||
      nonIterableRest()
    );
  }
`;s.toArray=helper("7.0.0-beta.0")`
  import arrayWithHoles from "arrayWithHoles";
  import iterableToArray from "iterableToArray";
  import unsupportedIterableToArray from "unsupportedIterableToArray";
  import nonIterableRest from "nonIterableRest";

  export default function _toArray(arr) {
    return (
      arrayWithHoles(arr) ||
      iterableToArray(arr) ||
      unsupportedIterableToArray(arr) ||
      nonIterableRest()
    );
  }
`;s.toConsumableArray=helper("7.0.0-beta.0")`
  import arrayWithoutHoles from "arrayWithoutHoles";
  import iterableToArray from "iterableToArray";
  import unsupportedIterableToArray from "unsupportedIterableToArray";
  import nonIterableSpread from "nonIterableSpread";

  export default function _toConsumableArray(arr) {
    return (
      arrayWithoutHoles(arr) ||
      iterableToArray(arr) ||
      unsupportedIterableToArray(arr) ||
      nonIterableSpread()
    );
  }
`;s.arrayWithoutHoles=helper("7.0.0-beta.0")`
  import arrayLikeToArray from "arrayLikeToArray";

  export default function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return arrayLikeToArray(arr);
  }
`;s.arrayWithHoles=helper("7.0.0-beta.0")`
  export default function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
`;s.maybeArrayLike=helper("7.9.0")`
  import arrayLikeToArray from "arrayLikeToArray";

  export default function _maybeArrayLike(next, arr, i) {
    if (arr && !Array.isArray(arr) && typeof arr.length === "number") {
      var len = arr.length;
      return arrayLikeToArray(arr, i !== void 0 && i < len ? i : len);
    }
    return next(arr, i);
  }
`;s.iterableToArray=helper("7.0.0-beta.0")`
  export default function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
`;s.iterableToArrayLimit=helper("7.0.0-beta.0")`
  export default function _iterableToArrayLimit(arr, i) {
    // this is an expanded form of \`for...of\` that properly supports abrupt completions of
    // iterators etc. variable names have been minimised to reduce the size of this massive
    // helper. sometimes spec compliance is annoying :(
    //
    // _n = _iteratorNormalCompletion
    // _d = _didIteratorError
    // _e = _iteratorError
    // _i = _iterator
    // _s = _step

    var _i = arr == null ? null : (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);
    if (_i == null) return;

    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
`;s.iterableToArrayLimitLoose=helper("7.0.0-beta.0")`
  export default function _iterableToArrayLimitLoose(arr, i) {
    var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);
    if (_i == null) return;

    var _arr = [];
    for (_i = _i.call(arr), _step; !(_step = _i.next()).done;) {
      _arr.push(_step.value);
      if (i && _arr.length === i) break;
    }
    return _arr;
  }
`;s.unsupportedIterableToArray=helper("7.9.0")`
  import arrayLikeToArray from "arrayLikeToArray";

  export default function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return arrayLikeToArray(o, minLen);
  }
`;s.arrayLikeToArray=helper("7.9.0")`
  export default function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
`;s.nonIterableSpread=helper("7.0.0-beta.0")`
  export default function _nonIterableSpread() {
    throw new TypeError(
      "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
`;s.nonIterableRest=helper("7.0.0-beta.0")`
  export default function _nonIterableRest() {
    throw new TypeError(
      "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
`;s.createForOfIteratorHelper=helper("7.9.0")`
  import unsupportedIterableToArray from "unsupportedIterableToArray";

  // s: start (create the iterator)
  // n: next
  // e: error (called whenever something throws)
  // f: finish (always called at the end)

  export default function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (!it) {
      // Fallback for engines without symbol support
      if (
        Array.isArray(o) ||
        (it = unsupportedIterableToArray(o)) ||
        (allowArrayLike && o && typeof o.length === "number")
      ) {
        if (it) o = it;
        var i = 0;
        var F = function(){};
        return {
          s: F,
          n: function() {
            if (i >= o.length) return { done: true };
            return { done: false, value: o[i++] };
          },
          e: function(e) { throw e; },
          f: F,
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true, didErr = false, err;

    return {
      s: function() {
        it = it.call(o);
      },
      n: function() {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function(e) {
        didErr = true;
        err = e;
      },
      f: function() {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }
`;s.createForOfIteratorHelperLoose=helper("7.9.0")`
  import unsupportedIterableToArray from "unsupportedIterableToArray";

  export default function _createForOfIteratorHelperLoose(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (it) return (it = it.call(o)).next.bind(it);

    // Fallback for engines without symbol support
    if (
      Array.isArray(o) ||
      (it = unsupportedIterableToArray(o)) ||
      (allowArrayLike && o && typeof o.length === "number")
    ) {
      if (it) o = it;
      var i = 0;
      return function() {
        if (i >= o.length) return { done: true };
        return { done: false, value: o[i++] };
      }
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
`;s.skipFirstGeneratorNext=helper("7.0.0-beta.0")`
  export default function _skipFirstGeneratorNext(fn) {
    return function () {
      var it = fn.apply(this, arguments);
      it.next();
      return it;
    }
  }
`;s.toPrimitive=helper("7.1.5")`
  export default function _toPrimitive(
    input,
    hint /*: "default" | "string" | "number" | void */
  ) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
`;s.toPropertyKey=helper("7.1.5")`
  import toPrimitive from "toPrimitive";

  export default function _toPropertyKey(arg) {
    var key = toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }
`;s.initializerWarningHelper=helper("7.0.0-beta.0")`
    export default function _initializerWarningHelper(descriptor, context){
        throw new Error(
          'Decorating class property failed. Please ensure that ' +
          'proposal-class-properties is enabled and runs after the decorators transform.'
        );
    }
`;s.initializerDefineProperty=helper("7.0.0-beta.0")`
    export default function _initializerDefineProperty(target, property, descriptor, context){
        if (!descriptor) return;

        Object.defineProperty(target, property, {
            enumerable: descriptor.enumerable,
            configurable: descriptor.configurable,
            writable: descriptor.writable,
            value: descriptor.initializer ? descriptor.initializer.call(context) : void 0,
        });
    }
`;s.applyDecoratedDescriptor=helper("7.0.0-beta.0")`
    export default function _applyDecoratedDescriptor(target, property, decorators, descriptor, context){
        var desc = {};
        Object.keys(descriptor).forEach(function(key){
            desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;
        if ('value' in desc || desc.initializer){
            desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function(desc, decorator){
            return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0){
            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
            desc.initializer = undefined;
        }

        if (desc.initializer === void 0){
            Object.defineProperty(target, property, desc);
            desc = null;
        }

        return desc;
    }
`;s.classPrivateFieldLooseKey=helper("7.0.0-beta.0")`
  var id = 0;
  export default function _classPrivateFieldKey(name) {
    return "__private_" + (id++) + "_" + name;
  }
`;s.classPrivateFieldLooseBase=helper("7.0.0-beta.0")`
  export default function _classPrivateFieldBase(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
      throw new TypeError("attempted to use private field on non-instance");
    }
    return receiver;
  }
`;s.classPrivateFieldGet=helper("7.0.0-beta.0")`
  import classApplyDescriptorGet from "classApplyDescriptorGet";
  import classExtractFieldDescriptor from "classExtractFieldDescriptor";
  export default function _classPrivateFieldGet(receiver, privateMap) {
    var descriptor = classExtractFieldDescriptor(receiver, privateMap, "get");
    return classApplyDescriptorGet(receiver, descriptor);
  }
`;s.classPrivateFieldSet=helper("7.0.0-beta.0")`
  import classApplyDescriptorSet from "classApplyDescriptorSet";
  import classExtractFieldDescriptor from "classExtractFieldDescriptor";
  export default function _classPrivateFieldSet(receiver, privateMap, value) {
    var descriptor = classExtractFieldDescriptor(receiver, privateMap, "set");
    classApplyDescriptorSet(receiver, descriptor, value);
    return value;
  }
`;s.classPrivateFieldDestructureSet=helper("7.4.4")`
  import classApplyDescriptorDestructureSet from "classApplyDescriptorDestructureSet";
  import classExtractFieldDescriptor from "classExtractFieldDescriptor";
  export default function _classPrivateFieldDestructureSet(receiver, privateMap) {
    var descriptor = classExtractFieldDescriptor(receiver, privateMap, "set");
    return classApplyDescriptorDestructureSet(receiver, descriptor);
  }
`;s.classExtractFieldDescriptor=helper("7.13.10")`
  export default function _classExtractFieldDescriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to " + action + " private field on non-instance");
    }
    return privateMap.get(receiver);
  }
`;s.classStaticPrivateFieldSpecGet=helper("7.0.2")`
  import classApplyDescriptorGet from "classApplyDescriptorGet";
  import classCheckPrivateStaticAccess from "classCheckPrivateStaticAccess";
  import classCheckPrivateStaticFieldDescriptor from "classCheckPrivateStaticFieldDescriptor";
  export default function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) {
    classCheckPrivateStaticAccess(receiver, classConstructor);
    classCheckPrivateStaticFieldDescriptor(descriptor, "get");
    return classApplyDescriptorGet(receiver, descriptor);
  }
`;s.classStaticPrivateFieldSpecSet=helper("7.0.2")`
  import classApplyDescriptorSet from "classApplyDescriptorSet";
  import classCheckPrivateStaticAccess from "classCheckPrivateStaticAccess";
  import classCheckPrivateStaticFieldDescriptor from "classCheckPrivateStaticFieldDescriptor";
  export default function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) {
    classCheckPrivateStaticAccess(receiver, classConstructor);
    classCheckPrivateStaticFieldDescriptor(descriptor, "set");
    classApplyDescriptorSet(receiver, descriptor, value);
    return value;
  }
`;s.classStaticPrivateMethodGet=helper("7.3.2")`
  import classCheckPrivateStaticAccess from "classCheckPrivateStaticAccess";
  export default function _classStaticPrivateMethodGet(receiver, classConstructor, method) {
    classCheckPrivateStaticAccess(receiver, classConstructor);
    return method;
  }
`;s.classStaticPrivateMethodSet=helper("7.3.2")`
  export default function _classStaticPrivateMethodSet() {
    throw new TypeError("attempted to set read only static private field");
  }
`;s.classApplyDescriptorGet=helper("7.13.10")`
  export default function _classApplyDescriptorGet(receiver, descriptor) {
    if (descriptor.get) {
      return descriptor.get.call(receiver);
    }
    return descriptor.value;
  }
`;s.classApplyDescriptorSet=helper("7.13.10")`
  export default function _classApplyDescriptorSet(receiver, descriptor, value) {
    if (descriptor.set) {
      descriptor.set.call(receiver, value);
    } else {
      if (!descriptor.writable) {
        // This should only throw in strict mode, but class bodies are
        // always strict and private fields can only be used inside
        // class bodies.
        throw new TypeError("attempted to set read only private field");
      }
      descriptor.value = value;
    }
  }
`;s.classApplyDescriptorDestructureSet=helper("7.13.10")`
  export default function _classApplyDescriptorDestructureSet(receiver, descriptor) {
    if (descriptor.set) {
      if (!("__destrObj" in descriptor)) {
        descriptor.__destrObj = {
          set value(v) {
            descriptor.set.call(receiver, v)
          },
        };
      }
      return descriptor.__destrObj;
    } else {
      if (!descriptor.writable) {
        // This should only throw in strict mode, but class bodies are
        // always strict and private fields can only be used inside
        // class bodies.
        throw new TypeError("attempted to set read only private field");
      }

      return descriptor;
    }
  }
`;s.classStaticPrivateFieldDestructureSet=helper("7.13.10")`
  import classApplyDescriptorDestructureSet from "classApplyDescriptorDestructureSet";
  import classCheckPrivateStaticAccess from "classCheckPrivateStaticAccess";
  import classCheckPrivateStaticFieldDescriptor from "classCheckPrivateStaticFieldDescriptor";
  export default function _classStaticPrivateFieldDestructureSet(receiver, classConstructor, descriptor) {
    classCheckPrivateStaticAccess(receiver, classConstructor);
    classCheckPrivateStaticFieldDescriptor(descriptor, "set");
    return classApplyDescriptorDestructureSet(receiver, descriptor);
  }
`;s.classCheckPrivateStaticAccess=helper("7.13.10")`
  export default function _classCheckPrivateStaticAccess(receiver, classConstructor) {
    if (receiver !== classConstructor) {
      throw new TypeError("Private static access of wrong provenance");
    }
  }
`;s.classCheckPrivateStaticFieldDescriptor=helper("7.13.10")`
  export default function _classCheckPrivateStaticFieldDescriptor(descriptor, action) {
    if (descriptor === undefined) {
      throw new TypeError("attempted to " + action + " private static field before its declaration");
    }
  }
`;s.decorate=helper("7.1.5")`
  import toArray from "toArray";
  import toPropertyKey from "toPropertyKey";

  // These comments are stripped by @babel/template
  /*::
  type PropertyDescriptor =
    | {
        value: any,
        writable: boolean,
        configurable: boolean,
        enumerable: boolean,
      }
    | {
        get?: () => any,
        set?: (v: any) => void,
        configurable: boolean,
        enumerable: boolean,
      };

  type FieldDescriptor ={
    writable: boolean,
    configurable: boolean,
    enumerable: boolean,
  };

  type Placement = "static" | "prototype" | "own";
  type Key = string | symbol; // PrivateName is not supported yet.

  type ElementDescriptor =
    | {
        kind: "method",
        key: Key,
        placement: Placement,
        descriptor: PropertyDescriptor
      }
    | {
        kind: "field",
        key: Key,
        placement: Placement,
        descriptor: FieldDescriptor,
        initializer?: () => any,
      };

  // This is exposed to the user code
  type ElementObjectInput = ElementDescriptor & {
    [@@toStringTag]?: "Descriptor"
  };

  // This is exposed to the user code
  type ElementObjectOutput = ElementDescriptor & {
    [@@toStringTag]?: "Descriptor"
    extras?: ElementDescriptor[],
    finisher?: ClassFinisher,
  };

  // This is exposed to the user code
  type ClassObject = {
    [@@toStringTag]?: "Descriptor",
    kind: "class",
    elements: ElementDescriptor[],
  };

  type ElementDecorator = (descriptor: ElementObjectInput) => ?ElementObjectOutput;
  type ClassDecorator = (descriptor: ClassObject) => ?ClassObject;
  type ClassFinisher = <A, B>(cl: Class<A>) => Class<B>;

  // Only used by Babel in the transform output, not part of the spec.
  type ElementDefinition =
    | {
        kind: "method",
        value: any,
        key: Key,
        static?: boolean,
        decorators?: ElementDecorator[],
      }
    | {
        kind: "field",
        value: () => any,
        key: Key,
        static?: boolean,
        decorators?: ElementDecorator[],
    };

  declare function ClassFactory<C>(initialize: (instance: C) => void): {
    F: Class<C>,
    d: ElementDefinition[]
  }

  */

  /*::
  // Various combinations with/without extras and with one or many finishers

  type ElementFinisherExtras = {
    element: ElementDescriptor,
    finisher?: ClassFinisher,
    extras?: ElementDescriptor[],
  };

  type ElementFinishersExtras = {
    element: ElementDescriptor,
    finishers: ClassFinisher[],
    extras: ElementDescriptor[],
  };

  type ElementsFinisher = {
    elements: ElementDescriptor[],
    finisher?: ClassFinisher,
  };

  type ElementsFinishers = {
    elements: ElementDescriptor[],
    finishers: ClassFinisher[],
  };

  */

  /*::

  type Placements = {
    static: Key[],
    prototype: Key[],
    own: Key[],
  };

  */

  // ClassDefinitionEvaluation (Steps 26-*)
  export default function _decorate(
    decorators /*: ClassDecorator[] */,
    factory /*: ClassFactory */,
    superClass /*: ?Class<*> */,
    mixins /*: ?Array<Function> */,
  ) /*: Class<*> */ {
    var api = _getDecoratorsApi();
    if (mixins) {
      for (var i = 0; i < mixins.length; i++) {
        api = mixins[i](api);
      }
    }

    var r = factory(function initialize(O) {
      api.initializeInstanceElements(O, decorated.elements);
    }, superClass);
    var decorated = api.decorateClass(
      _coalesceClassElements(r.d.map(_createElementDescriptor)),
      decorators,
    );

    api.initializeClassElements(r.F, decorated.elements);

    return api.runClassFinishers(r.F, decorated.finishers);
  }

  function _getDecoratorsApi() {
    _getDecoratorsApi = function() {
      return api;
    };

    var api = {
      elementsDefinitionOrder: [["method"], ["field"]],

      // InitializeInstanceElements
      initializeInstanceElements: function(
        /*::<C>*/ O /*: C */,
        elements /*: ElementDescriptor[] */,
      ) {
        ["method", "field"].forEach(function(kind) {
          elements.forEach(function(element /*: ElementDescriptor */) {
            if (element.kind === kind && element.placement === "own") {
              this.defineClassElement(O, element);
            }
          }, this);
        }, this);
      },

      // InitializeClassElements
      initializeClassElements: function(
        /*::<C>*/ F /*: Class<C> */,
        elements /*: ElementDescriptor[] */,
      ) {
        var proto = F.prototype;

        ["method", "field"].forEach(function(kind) {
          elements.forEach(function(element /*: ElementDescriptor */) {
            var placement = element.placement;
            if (
              element.kind === kind &&
              (placement === "static" || placement === "prototype")
            ) {
              var receiver = placement === "static" ? F : proto;
              this.defineClassElement(receiver, element);
            }
          }, this);
        }, this);
      },

      // DefineClassElement
      defineClassElement: function(
        /*::<C>*/ receiver /*: C | Class<C> */,
        element /*: ElementDescriptor */,
      ) {
        var descriptor /*: PropertyDescriptor */ = element.descriptor;
        if (element.kind === "field") {
          var initializer = element.initializer;
          descriptor = {
            enumerable: descriptor.enumerable,
            writable: descriptor.writable,
            configurable: descriptor.configurable,
            value: initializer === void 0 ? void 0 : initializer.call(receiver),
          };
        }
        Object.defineProperty(receiver, element.key, descriptor);
      },

      // DecorateClass
      decorateClass: function(
        elements /*: ElementDescriptor[] */,
        decorators /*: ClassDecorator[] */,
      ) /*: ElementsFinishers */ {
        var newElements /*: ElementDescriptor[] */ = [];
        var finishers /*: ClassFinisher[] */ = [];
        var placements /*: Placements */ = {
          static: [],
          prototype: [],
          own: [],
        };

        elements.forEach(function(element /*: ElementDescriptor */) {
          this.addElementPlacement(element, placements);
        }, this);

        elements.forEach(function(element /*: ElementDescriptor */) {
          if (!_hasDecorators(element)) return newElements.push(element);

          var elementFinishersExtras /*: ElementFinishersExtras */ = this.decorateElement(
            element,
            placements,
          );
          newElements.push(elementFinishersExtras.element);
          newElements.push.apply(newElements, elementFinishersExtras.extras);
          finishers.push.apply(finishers, elementFinishersExtras.finishers);
        }, this);

        if (!decorators) {
          return { elements: newElements, finishers: finishers };
        }

        var result /*: ElementsFinishers */ = this.decorateConstructor(
          newElements,
          decorators,
        );
        finishers.push.apply(finishers, result.finishers);
        result.finishers = finishers;

        return result;
      },

      // AddElementPlacement
      addElementPlacement: function(
        element /*: ElementDescriptor */,
        placements /*: Placements */,
        silent /*: boolean */,
      ) {
        var keys = placements[element.placement];
        if (!silent && keys.indexOf(element.key) !== -1) {
          throw new TypeError("Duplicated element (" + element.key + ")");
        }
        keys.push(element.key);
      },

      // DecorateElement
      decorateElement: function(
        element /*: ElementDescriptor */,
        placements /*: Placements */,
      ) /*: ElementFinishersExtras */ {
        var extras /*: ElementDescriptor[] */ = [];
        var finishers /*: ClassFinisher[] */ = [];

        for (
          var decorators = element.decorators, i = decorators.length - 1;
          i >= 0;
          i--
        ) {
          // (inlined) RemoveElementPlacement
          var keys = placements[element.placement];
          keys.splice(keys.indexOf(element.key), 1);

          var elementObject /*: ElementObjectInput */ = this.fromElementDescriptor(
            element,
          );
          var elementFinisherExtras /*: ElementFinisherExtras */ = this.toElementFinisherExtras(
            (0, decorators[i])(elementObject) /*: ElementObjectOutput */ ||
              elementObject,
          );

          element = elementFinisherExtras.element;
          this.addElementPlacement(element, placements);

          if (elementFinisherExtras.finisher) {
            finishers.push(elementFinisherExtras.finisher);
          }

          var newExtras /*: ElementDescriptor[] | void */ =
            elementFinisherExtras.extras;
          if (newExtras) {
            for (var j = 0; j < newExtras.length; j++) {
              this.addElementPlacement(newExtras[j], placements);
            }
            extras.push.apply(extras, newExtras);
          }
        }

        return { element: element, finishers: finishers, extras: extras };
      },

      // DecorateConstructor
      decorateConstructor: function(
        elements /*: ElementDescriptor[] */,
        decorators /*: ClassDecorator[] */,
      ) /*: ElementsFinishers */ {
        var finishers /*: ClassFinisher[] */ = [];

        for (var i = decorators.length - 1; i >= 0; i--) {
          var obj /*: ClassObject */ = this.fromClassDescriptor(elements);
          var elementsAndFinisher /*: ElementsFinisher */ = this.toClassDescriptor(
            (0, decorators[i])(obj) /*: ClassObject */ || obj,
          );

          if (elementsAndFinisher.finisher !== undefined) {
            finishers.push(elementsAndFinisher.finisher);
          }

          if (elementsAndFinisher.elements !== undefined) {
            elements = elementsAndFinisher.elements;

            for (var j = 0; j < elements.length - 1; j++) {
              for (var k = j + 1; k < elements.length; k++) {
                if (
                  elements[j].key === elements[k].key &&
                  elements[j].placement === elements[k].placement
                ) {
                  throw new TypeError(
                    "Duplicated element (" + elements[j].key + ")",
                  );
                }
              }
            }
          }
        }

        return { elements: elements, finishers: finishers };
      },

      // FromElementDescriptor
      fromElementDescriptor: function(
        element /*: ElementDescriptor */,
      ) /*: ElementObject */ {
        var obj /*: ElementObject */ = {
          kind: element.kind,
          key: element.key,
          placement: element.placement,
          descriptor: element.descriptor,
        };

        var desc = {
          value: "Descriptor",
          configurable: true,
        };
        Object.defineProperty(obj, Symbol.toStringTag, desc);

        if (element.kind === "field") obj.initializer = element.initializer;

        return obj;
      },

      // ToElementDescriptors
      toElementDescriptors: function(
        elementObjects /*: ElementObject[] */,
      ) /*: ElementDescriptor[] */ {
        if (elementObjects === undefined) return;
        return toArray(elementObjects).map(function(elementObject) {
          var element = this.toElementDescriptor(elementObject);
          this.disallowProperty(elementObject, "finisher", "An element descriptor");
          this.disallowProperty(elementObject, "extras", "An element descriptor");
          return element;
        }, this);
      },

      // ToElementDescriptor
      toElementDescriptor: function(
        elementObject /*: ElementObject */,
      ) /*: ElementDescriptor */ {
        var kind = String(elementObject.kind);
        if (kind !== "method" && kind !== "field") {
          throw new TypeError(
            'An element descriptor\\'s .kind property must be either "method" or' +
              ' "field", but a decorator created an element descriptor with' +
              ' .kind "' +
              kind +
              '"',
          );
        }

        var key = toPropertyKey(elementObject.key);

        var placement = String(elementObject.placement);
        if (
          placement !== "static" &&
          placement !== "prototype" &&
          placement !== "own"
        ) {
          throw new TypeError(
            'An element descriptor\\'s .placement property must be one of "static",' +
              ' "prototype" or "own", but a decorator created an element descriptor' +
              ' with .placement "' +
              placement +
              '"',
          );
        }

        var descriptor /*: PropertyDescriptor */ = elementObject.descriptor;

        this.disallowProperty(elementObject, "elements", "An element descriptor");

        var element /*: ElementDescriptor */ = {
          kind: kind,
          key: key,
          placement: placement,
          descriptor: Object.assign({}, descriptor),
        };

        if (kind !== "field") {
          this.disallowProperty(elementObject, "initializer", "A method descriptor");
        } else {
          this.disallowProperty(
            descriptor,
            "get",
            "The property descriptor of a field descriptor",
          );
          this.disallowProperty(
            descriptor,
            "set",
            "The property descriptor of a field descriptor",
          );
          this.disallowProperty(
            descriptor,
            "value",
            "The property descriptor of a field descriptor",
          );

          element.initializer = elementObject.initializer;
        }

        return element;
      },

      toElementFinisherExtras: function(
        elementObject /*: ElementObject */,
      ) /*: ElementFinisherExtras */ {
        var element /*: ElementDescriptor */ = this.toElementDescriptor(
          elementObject,
        );
        var finisher /*: ClassFinisher */ = _optionalCallableProperty(
          elementObject,
          "finisher",
        );
        var extras /*: ElementDescriptors[] */ = this.toElementDescriptors(
          elementObject.extras,
        );

        return { element: element, finisher: finisher, extras: extras };
      },

      // FromClassDescriptor
      fromClassDescriptor: function(
        elements /*: ElementDescriptor[] */,
      ) /*: ClassObject */ {
        var obj = {
          kind: "class",
          elements: elements.map(this.fromElementDescriptor, this),
        };

        var desc = { value: "Descriptor", configurable: true };
        Object.defineProperty(obj, Symbol.toStringTag, desc);

        return obj;
      },

      // ToClassDescriptor
      toClassDescriptor: function(
        obj /*: ClassObject */,
      ) /*: ElementsFinisher */ {
        var kind = String(obj.kind);
        if (kind !== "class") {
          throw new TypeError(
            'A class descriptor\\'s .kind property must be "class", but a decorator' +
              ' created a class descriptor with .kind "' +
              kind +
              '"',
          );
        }

        this.disallowProperty(obj, "key", "A class descriptor");
        this.disallowProperty(obj, "placement", "A class descriptor");
        this.disallowProperty(obj, "descriptor", "A class descriptor");
        this.disallowProperty(obj, "initializer", "A class descriptor");
        this.disallowProperty(obj, "extras", "A class descriptor");

        var finisher = _optionalCallableProperty(obj, "finisher");
        var elements = this.toElementDescriptors(obj.elements);

        return { elements: elements, finisher: finisher };
      },

      // RunClassFinishers
      runClassFinishers: function(
        constructor /*: Class<*> */,
        finishers /*: ClassFinisher[] */,
      ) /*: Class<*> */ {
        for (var i = 0; i < finishers.length; i++) {
          var newConstructor /*: ?Class<*> */ = (0, finishers[i])(constructor);
          if (newConstructor !== undefined) {
            // NOTE: This should check if IsConstructor(newConstructor) is false.
            if (typeof newConstructor !== "function") {
              throw new TypeError("Finishers must return a constructor.");
            }
            constructor = newConstructor;
          }
        }
        return constructor;
      },

      disallowProperty: function(obj, name, objectType) {
        if (obj[name] !== undefined) {
          throw new TypeError(objectType + " can't have a ." + name + " property.");
        }
      }
    };

    return api;
  }

  // ClassElementEvaluation
  function _createElementDescriptor(
    def /*: ElementDefinition */,
  ) /*: ElementDescriptor */ {
    var key = toPropertyKey(def.key);

    var descriptor /*: PropertyDescriptor */;
    if (def.kind === "method") {
      descriptor = {
        value: def.value,
        writable: true,
        configurable: true,
        enumerable: false,
      };
    } else if (def.kind === "get") {
      descriptor = { get: def.value, configurable: true, enumerable: false };
    } else if (def.kind === "set") {
      descriptor = { set: def.value, configurable: true, enumerable: false };
    } else if (def.kind === "field") {
      descriptor = { configurable: true, writable: true, enumerable: true };
    }

    var element /*: ElementDescriptor */ = {
      kind: def.kind === "field" ? "field" : "method",
      key: key,
      placement: def.static
        ? "static"
        : def.kind === "field"
        ? "own"
        : "prototype",
      descriptor: descriptor,
    };
    if (def.decorators) element.decorators = def.decorators;
    if (def.kind === "field") element.initializer = def.value;

    return element;
  }

  // CoalesceGetterSetter
  function _coalesceGetterSetter(
    element /*: ElementDescriptor */,
    other /*: ElementDescriptor */,
  ) {
    if (element.descriptor.get !== undefined) {
      other.descriptor.get = element.descriptor.get;
    } else {
      other.descriptor.set = element.descriptor.set;
    }
  }

  // CoalesceClassElements
  function _coalesceClassElements(
    elements /*: ElementDescriptor[] */,
  ) /*: ElementDescriptor[] */ {
    var newElements /*: ElementDescriptor[] */ = [];

    var isSameElement = function(
      other /*: ElementDescriptor */,
    ) /*: boolean */ {
      return (
        other.kind === "method" &&
        other.key === element.key &&
        other.placement === element.placement
      );
    };

    for (var i = 0; i < elements.length; i++) {
      var element /*: ElementDescriptor */ = elements[i];
      var other /*: ElementDescriptor */;

      if (
        element.kind === "method" &&
        (other = newElements.find(isSameElement))
      ) {
        if (
          _isDataDescriptor(element.descriptor) ||
          _isDataDescriptor(other.descriptor)
        ) {
          if (_hasDecorators(element) || _hasDecorators(other)) {
            throw new ReferenceError(
              "Duplicated methods (" + element.key + ") can't be decorated.",
            );
          }
          other.descriptor = element.descriptor;
        } else {
          if (_hasDecorators(element)) {
            if (_hasDecorators(other)) {
              throw new ReferenceError(
                "Decorators can't be placed on different accessors with for " +
                  "the same property (" +
                  element.key +
                  ").",
              );
            }
            other.decorators = element.decorators;
          }
          _coalesceGetterSetter(element, other);
        }
      } else {
        newElements.push(element);
      }
    }

    return newElements;
  }

  function _hasDecorators(element /*: ElementDescriptor */) /*: boolean */ {
    return element.decorators && element.decorators.length;
  }

  function _isDataDescriptor(desc /*: PropertyDescriptor */) /*: boolean */ {
    return (
      desc !== undefined &&
      !(desc.value === undefined && desc.writable === undefined)
    );
  }

  function _optionalCallableProperty /*::<T>*/(
    obj /*: T */,
    name /*: $Keys<T> */,
  ) /*: ?Function */ {
    var value = obj[name];
    if (value !== undefined && typeof value !== "function") {
      throw new TypeError("Expected '" + name + "' to be a function");
    }
    return value;
  }

`;s.classPrivateMethodGet=helper("7.1.6")`
  export default function _classPrivateMethodGet(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
      throw new TypeError("attempted to get private field on non-instance");
    }
    return fn;
  }
`;{s.classPrivateMethodSet=helper("7.1.6")`
    export default function _classPrivateMethodSet() {
      throw new TypeError("attempted to reassign private method");
    }