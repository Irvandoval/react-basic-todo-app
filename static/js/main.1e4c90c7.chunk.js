(this["webpackJsonpreact-basic-todo-app"]=this["webpackJsonpreact-basic-todo-app"]||[]).push([[0],{120:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},122:function(e,t,a){e.exports=a(314)},310:function(e,t,a){},311:function(e,t,a){},312:function(e,t,a){},313:function(e,t,a){},314:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(55),c=a.n(r),i=a(6),o=a(27),m=a(117),s=a(9),d=a(4),p="app/MainApplication/ADD_ITEM",u="app/MainApplication/UPDATE_ITEM",E="app/MainApplication/REMOVE_ITEM",h="app/MainApplication/SET_SELECTED_ITEM_ID",b="app/MainApplication/SET_RENDER_CREATE",f="app/MainApplication/SET_RENDER_EDIT",v="app/MainApplication/CLOSE_PANEL",C="app/MainApplication/CLEAR_LIST",y="app/MainApplication/TOGGLE_ALL",g="app/MainApplication/OPEN_CREATE_PANEL",k="app/MainApplication/OPEN_EDIT_PANEL",I=Object(d.fromJS)({items:[{id:"6b7d54a2-caff-11ea-87d0-0242ac130003",name:"Learn how to code",description:"Spend two hours a day coding",type:"dev-task",createdAt:1578831166e3,isCompleted:!1},{id:"8e0f82ec-caff-11ea-87d0-0242ac130003",name:"Learn how to cook",description:"Stop eating cereal all day",type:"daily-task",createdAt:1574104366e3,isCompleted:!1},{id:"b033cb6e-ccb0-11ea-87d0-0242ac130003",name:"Take out the trash",description:"Do at least that for God's sake",type:"daily-task",createdAt:1549069931e3,isCompleted:!0},{id:"66d8e256-d20a-11ea-87d0-0242ac130003",name:"Wash the dishes",description:"Or you can eat from the can, your call",type:"daily-task",createdAt:1594455449e3,isCompleted:!1}],renderCreate:!1,renderEdit:!1,selectedItemId:""}),O=function(e,t,a){return e.get(t).findIndex((function(e){return e.get("id")===a}))};var A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return e.update("items",(function(e){return e.unshift(t.payload)}));case u:var a=O(e,"items",t.id);return e.updateIn(["items",a],(function(e){return e.merge(t.payload)}));case E:var n=O(e,"items",t.id);return e.get("selectedItemId")===t.id?e.deleteIn(["items",n]).set("renderEdit",!1).set("selectedItemId",""):e.deleteIn(["items",n]);case h:return e.set("selectedItemId",t.id);case b:return e.set("renderCreate",t.payload);case f:return e.set("renderEdit",t.payload);case g:return e.set("renderCreate",!0).set("renderEdit",!1).set("selectedItemId","");case k:return e.set("renderCreate",!1).set("renderEdit",!0).set("selectedItemId",t.id);case v:return e.set("renderCreate",!1).set("renderEdit",!1).set("selectedItemId","");case C:return e.set("items",new d.List([])).set("renderEdit",!1).set("selectedItemId","");case y:return e.update("items",(function(e){return e.map((function(e){return e.set("isCompleted",t.bool)}))}));default:return e}},N=Object(m.combineReducers)({app:A,form:s.reducer}),T=Object(o.createStore)(N,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),S=a(119),j=a(5),_=a(29),w=a(30),D=a(32),L=a(31),P=a(315),x=function(e){return e.getIn(["app","items"],new d.List([]))},R=function(e){return e.getIn(["app","selectedItemId"])},F=function(e){return e.getIn(["app","items"],new d.List([])).find((function(t){return t.get("id")===R(e)}))},M=function(e){return e.getIn(["app","renderCreate"],!1)},U=function(e){return e.getIn(["app","renderEdit"],!1)};function B(e,t){return"edit"===e?J(t.get("id"),t):H(t.set("id",Object(P.a)()).set("createdAt",Date.now()).set("isCompleted",!1))}function H(e){return{type:p,payload:e}}function J(e,t){return{type:u,id:e,payload:t}}var V=a(56),X=(a(54),a(118)),K=a.n(X);var q=[{value:"dev-task",label:"Development task"},{value:"daily-task",label:"Daily task"},{value:"routine",label:"Routine"},{value:"incidentals",label:"Incidentals"},{value:"projects",label:"Projects"},{value:"problems",label:"Problems"},{value:"researching",label:"Researching"},{value:"testing",label:"Testing"}];var G=function(e){var t=e.item,a=e.name,n=e.isCompleted,r=e.onRemoveItem,c=e.handleChange,i=e.handleBlur,o=e.handleKeyDown,m=e.handleCheck,s=e.onOpenEditPanel;return l.a.createElement("div",{className:"rTableRow"},l.a.createElement("div",{className:"rTableCell"},l.a.createElement("span",null,t.get("id"))),l.a.createElement("div",{className:"rTableCell"},l.a.createElement("span",null,n?l.a.createElement("span",{className:"item-completed"},t.get("name")):l.a.createElement("input",{type:"text",name:"name",placeholder:"Enter a task name...",value:a,onChange:c,onBlur:i,onKeyDown:o}))),l.a.createElement("div",{className:"rTableCell"},l.a.createElement("span",null,t.get("type").replace(/^[\s_]+|[\s_]+$/g,"").replace(/[_\s]+/g," ").replace(/[-\s]+/g," ").replace(/^[a-z]/,(function(e){return e.toUpperCase()})))),l.a.createElement("div",{className:"rTableCell"},l.a.createElement("span",null,t.get("description"))),l.a.createElement("div",{className:"rTableCell"},l.a.createElement("span",null,K()(t.get("createdAt")).format("lll"))),l.a.createElement("div",{className:"rTableCell rTableAction"},l.a.createElement("span",null,l.a.createElement("input",{type:"checkbox",name:"isCompleted",checked:n,onChange:m}))),l.a.createElement("div",{className:"rTableCell rTableAction"},l.a.createElement("button",{type:"button",onClick:function(){return s(t.get("id"))}},"Edit"),l.a.createElement("button",{type:"button",onClick:function(){return r(t.get("id"))}},"X")))},W=function(e){Object(D.a)(a,e);var t=Object(L.a)(a);function a(e){var n;Object(_.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({name:e.target.value})},n.handleUpdate=function(){var e=n.props,t=e.item,a=e.onUpdateItem,l=n.state.name;t.get("name")!==l&&a(t.get("id"),Object(d.fromJS)({name:l}))},n.handleBlur=function(){n.handleUpdate()},n.handleKeyDown=function(e){13===e.keyCode&&n.handleUpdate()},n.handleCheck=function(){var e=n.props,t=e.item,a=e.onUpdateItem,l=n.state.isCompleted;a(t.get("id"),Object(d.fromJS)({isCompleted:!l})),n.setState((function(e){return{isCompleted:!e.isCompleted}}))};var l=e.item.get("name"),r=e.item.get("isCompleted");return n.state={name:l,isCompleted:r},n}return Object(w.a)(a,[{key:"componentDidUpdate",value:function(e){var t=this.props.item.get("name"),a=this.props.item.get("isCompleted");e.item.get("name")!==t&&this.setState({name:t}),e.item.get("isCompleted")!==a&&this.setState({isCompleted:a})}},{key:"render",value:function(){var e=this.props,t=e.item,a=e.onRemoveItem,n=e.onOpenEditPanel,r=this.state,c=r.name,i=r.isCompleted;return l.a.createElement(G,{item:t,name:c,isCompleted:i,onRemoveItem:a,handleChange:this.handleChange,handleBlur:this.handleBlur,handleKeyDown:this.handleKeyDown,handleCheck:this.handleCheck,onOpenEditPanel:n,handleSubmit:this.handleSubmit})}}]),a}(n.Component),$={onUpdateItem:J,onRemoveItem:function(e){return{type:E,id:e}},onOpenEditPanel:function(e){return{type:k,id:e}}},z=Object(i.connect)(null,$)(W);var Q=function(e){var t=e.items,a=e.checkedAll,n=e.handleCheck,r=Object(V.a)(e,["items","checkedAll","handleCheck"]);return l.a.createElement("div",{className:"rTable"},l.a.createElement("div",{className:"rTableHeading"},l.a.createElement("div",{className:"rTableHead"},l.a.createElement("span",null,"ID")),l.a.createElement("div",{className:"rTableHead"},l.a.createElement("span",null,"Name")),l.a.createElement("div",{className:"rTableHead"},l.a.createElement("span",null,"Type")),l.a.createElement("div",{className:"rTableHead"},l.a.createElement("span",null,"Description")),l.a.createElement("div",{className:"rTableHead"},l.a.createElement("span",null,"Created at")),l.a.createElement("div",{className:"rTableHead"},l.a.createElement("span",null,"Completed",l.a.createElement("input",{type:"checkbox",name:"checkedAll",checked:a,onChange:n}))),l.a.createElement("div",{className:"rTableHead rTableAction"},"\xa0")),l.a.createElement("div",{className:"rTableBody"},t.map((function(e){return l.a.createElement(z,Object.assign({key:e.get("id"),item:e},r))}))))},Y=function(e){Object(D.a)(a,e);var t=Object(L.a)(a);function a(e){var n;return Object(_.a)(this,a),(n=t.call(this,e)).handleCheck=function(){var e=n.state.checkedAll;n.props.onToggleAll(!e),n.setState((function(e){return{checkedAll:!e.checkedAll}}))},n.state={checkedAll:!1},n}return Object(w.a)(a,[{key:"render",value:function(){var e=this.state.checkedAll,t=this.props,a=t.items,n=Object(V.a)(t,["items"]);return l.a.createElement(Q,Object.assign({items:a,checkedAll:e,handleCheck:this.handleCheck},n))}}]),a}(n.Component),Z={onToggleAll:function(e){return{type:y,bool:e}}},ee=Object(i.connect)((function(e){return{items:x(e)}}),Z)(Y);var te=function(e){var t=e.key,a=e.handleSubmit,n=e.pristine,r=e.reset,c=e.submitting;return l.a.createElement("form",{onSubmit:a,key:t,autoComplete:"off"},l.a.createElement("label",{htmlFor:"name"},l.a.createElement("span",{className:"required"},"Name:"),l.a.createElement(s.Field,{name:"name",component:"input",type:"text",placeholder:"Enter a task name..."})),l.a.createElement("label",{htmlFor:"type"},l.a.createElement("span",{className:"required"},"Pick task type:"),l.a.createElement(s.Field,{name:"type",component:"select"},l.a.createElement("option",{value:"",disabled:!0},"Select a type..."),q.map((function(e){return l.a.createElement("option",{key:e.value,value:e.value},e.label)})))),l.a.createElement("label",{htmlFor:"description"},l.a.createElement("span",null,"Description:"),l.a.createElement(s.Field,{name:"description",component:"textarea",placeholder:"Add a description...",cols:"30",rows:"5"})),l.a.createElement("div",{className:"actions-inline"},l.a.createElement("input",{type:"submit",value:"Submit",disabled:n||c}),l.a.createElement("button",{type:"button",disabled:n||c,onClick:r},"Clear Values")))},ae=Object(s.reduxForm)({form:"form:create",onSubmit:function(e,t){return t(B("create",e))},destroyOnUnmount:!0})(te),ne=Object(i.connect)((function(){return{key:"form:create",initialValues:Object(d.fromJS)({})}}))(ae);var le=function(e){var t=e.key,a=e.selectedItemId,n=e.handleSubmit,r=e.pristine,c=e.reset,i=e.submitting;return l.a.createElement("form",{onSubmit:n,key:t,autoComplete:"off"},l.a.createElement("label",{htmlFor:"id"},l.a.createElement("span",null,"ID:"),l.a.createElement("span",null,a)),l.a.createElement("label",{htmlFor:"name"},l.a.createElement("span",{className:"required"},"Name:"),l.a.createElement(s.Field,{name:"name",component:"input",type:"text",placeholder:"Enter a task name..."})),l.a.createElement("label",{htmlFor:"type"},l.a.createElement("span",{className:"required"},"Pick task type:"),l.a.createElement(s.Field,{name:"type",component:"select"},l.a.createElement("option",{value:"",disabled:!0},"Select a type..."),q.map((function(e){return l.a.createElement("option",{key:e.value,value:e.value},e.label)})))),l.a.createElement("label",{htmlFor:"description"},l.a.createElement("span",null,"Description:"),l.a.createElement(s.Field,{name:"description",component:"textarea",placeholder:"Add a description...",cols:"30",rows:"5"})),l.a.createElement("label",{className:"label-checkbox",htmlFor:"isCompleted"},l.a.createElement("span",null,"Is completed?"),l.a.createElement(s.Field,{name:"isCompleted",component:"input",type:"checkbox",className:"a11y-hidden"})),l.a.createElement("div",{className:"actions-inline"},l.a.createElement("input",{type:"submit",value:"Submit",disabled:r||i}),l.a.createElement("button",{type:"button",disabled:r||i,onClick:c},"Clear Values")))},re=Object(s.reduxForm)({onSubmit:function(e,t){return t(B("edit",e))},destroyOnUnmount:!0})(le),ce=Object(i.connect)((function(e){return{form:"form:".concat(R(e)),key:"form:".concat(R(e)),initialValues:F(e),selectedItemId:R(e)}}))(re);var ie=function(e){var t=e.handleClose,a=e.children;return l.a.createElement("div",{className:"App-sidepanel"},l.a.createElement("button",{type:"button",className:"close-panel",onClick:t},"X"),a)};var oe=function(e){var t=e.name,a=e.handleInputChange,n=e.handleSubmit,r=e.renderCreate,c=e.renderEdit,i=e.selectedItemId,o=e.onClearList,m=e.onClosePanel,s=e.onOpenCreatePanel;return l.a.createElement("div",{className:"App-main"},l.a.createElement("div",{className:"App-list"},l.a.createElement("header",null,l.a.createElement("form",{onSubmit:n,className:"form-inline",autoComplete:"off"},l.a.createElement("input",{type:"text",name:"name",placeholder:"Enter a text...",value:t,onChange:a}),l.a.createElement("input",{type:"submit",value:"Add"}),l.a.createElement("button",{type:"button",onClick:s},"Create"),l.a.createElement("button",{type:"button",onClick:o},"Clear List"))),l.a.createElement("div",{className:"rTable-container"},l.a.createElement(ee,null))),r&&l.a.createElement(ie,{handleClose:m},l.a.createElement(ne,null)),c&&i&&l.a.createElement(ie,{handleClose:m},l.a.createElement(ce,{key:i})))},me=function(e){Object(D.a)(a,e);var t=Object(L.a)(a);function a(e){var n;return Object(_.a)(this,a),(n=t.call(this,e)).handleInputChange=function(e){n.setState({name:e.target.value})},n.handleSubmit=function(e){e.preventDefault();var t=n.state.name;if(""!==t.trim()){var a=Object(d.fromJS)({id:Object(P.a)(),name:t,description:"",type:"daily-task",createdAt:Date.now(),isCompleted:!1});n.props.onAddItem(a),n.setState({name:""})}else n.setState({name:""})},n.state={name:""},n}return Object(w.a)(a,[{key:"render",value:function(){var e=this.state.name,t=this.props,a=t.renderCreate,n=t.renderEdit,r=t.selectedItemId,c=t.onClearList,i=t.onClosePanel,o=t.onOpenCreatePanel;return l.a.createElement(oe,{name:e,handleInputChange:this.handleInputChange,handleSubmit:this.handleSubmit,renderCreate:a,renderEdit:n,selectedItemId:r,onClearList:c,onClosePanel:i,onOpenCreatePanel:o})}}]),a}(n.Component),se={onAddItem:H,onClearList:function(){return{type:C}},onClosePanel:function(){return{type:v}},onOpenCreatePanel:function(){return{type:g}}},de=Object(i.connect)((function(e){return{renderCreate:M(e),renderEdit:U(e),selectedItemId:R(e)}}),se)(me);var pe=function(){return l.a.createElement("div",{className:"content-not-found"},l.a.createElement("h1",null,"Not Found"),";")};var ue=function(){return l.a.createElement(S.a,null,l.a.createElement(j.d,null,l.a.createElement(j.b,{path:"/",component:de,exact:!0}),l.a.createElement(j.b,{path:"/home",component:de,exact:!0}),l.a.createElement(j.b,{path:"/new",component:ne,exact:!0}),l.a.createElement(j.b,{path:"/edit/:id",component:ce,exact:!0}),l.a.createElement(j.b,{component:pe}),l.a.createElement(j.a,{to:"/home"})))},Ee=a(120),he=a.n(Ee);a(310),a(311),a(312);var be=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("img",{src:he.a,className:"App-logo",alt:"logo"}),l.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")),l.a.createElement(ue,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(313);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(i.Provider,{store:T},l.a.createElement(be,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[122,1,2]]]);
//# sourceMappingURL=main.1e4c90c7.chunk.js.map