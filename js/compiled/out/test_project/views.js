// Compiled by ClojureScript 1.10.520 {}
goog.provide('test_project.views');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('bulma_cljs.core');
goog.require('test_project.tic_tac_toe');
goog.require('test_project.elevator');
test_project.views.games = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elevator","elevator",-1729324395),new cljs.core.Keyword(null,"tic-tac-toe","tic-tac-toe",-2027526810)], null);
test_project.views.main_panel = (function test_project$views$main_panel(){
var game = reagent.core.atom.call(null,new cljs.core.Keyword(null,"elevator","elevator",-1729324395));
return ((function (game){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bulma_cljs.core.navbar,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-brand","div.navbar-brand",1304438848),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fas fa-gamepad fa-3x"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bulma_cljs.core.navbar_burger], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bulma_cljs.core.navbar_menu,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bulma_cljs.core.navbar_start,cljs.core.map.call(null,((function (game){
return (function (g){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bulma_cljs.core.navbar_item,clojure.string.capitalize.call(null,cljs.core.name.call(null,g)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (game){
return (function (){
return cljs.core.reset_BANG_.call(null,game,g);
});})(game))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),g], null));
});})(game))
,test_project.views.games)], null)], null)], null),(function (){var G__36335 = cljs.core.deref.call(null,game);
var G__36335__$1 = (((G__36335 instanceof cljs.core.Keyword))?G__36335.fqn:null);
switch (G__36335__$1) {
case "elevator":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_project.elevator.elevator], null);

break;
case "tic-tac-toe":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_project.tic_tac_toe.tic_tac_toe], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36335__$1)].join('')));

}
})()], null);
});
;})(game))
});

//# sourceMappingURL=views.js.map?rel=1561075344449
