// Compiled by ClojureScript 1.10.520 {}
goog.provide('test_project.elevator');
goog.require('cljs.core');
goog.require('reagent.core');
test_project.elevator.color_map = new cljs.core.PersistentArrayMap(null, 5, [(1),"#0099ff",(2),"#00cc33",(3),"#bb3598",(4),"#644117",(5),"#ff7518"], null);
test_project.elevator.person = (function test_project$elevator$person(id){
var color = cljs.core.get.call(null,test_project.elevator.color_map,id);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 200 200",new cljs.core.Keyword(null,"preserveAspectRatio","preserveAspectRatio",1832131817),"none",new cljs.core.Keyword(null,"width","width",-384071477),(50),new cljs.core.Keyword(null,"height","height",1025178622),(50),new cljs.core.Keyword(null,"fill","fill",883462889),color], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),(100),new cljs.core.Keyword(null,"cy","cy",755331060),(50),new cljs.core.Keyword(null,"r","r",-471384190),(40)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),"50%",new cljs.core.Keyword(null,"y","y",-1757859776),"35%",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(60),new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"fill","fill",883462889),"white"], null),id], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(85),new cljs.core.Keyword(null,"y","y",-1757859776),(85),new cljs.core.Keyword(null,"width","width",-384071477),(30),new cljs.core.Keyword(null,"height","height",1025178622),(120)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(65),new cljs.core.Keyword(null,"y","y",-1757859776),(100),new cljs.core.Keyword(null,"width","width",-384071477),(25),new cljs.core.Keyword(null,"height","height",1025178622),(55)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(110),new cljs.core.Keyword(null,"y","y",-1757859776),(100),new cljs.core.Keyword(null,"width","width",-384071477),(25),new cljs.core.Keyword(null,"height","height",1025178622),(55)], null)], null)], null);
});
test_project.elevator.generate_people = (function test_project$elevator$generate_people(n,m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__36074){
var vec__36075 = p__36074;
var k = cljs.core.nth.call(null,vec__36075,(0),null);
var _ = cljs.core.nth.call(null,vec__36075,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.mapv.call(null,((function (vec__36075,k,_){
return (function (___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"destination","destination",-253872483),(cljs.core.rand_int.call(null,(5)) + (1)),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null)], null);
});})(vec__36075,k,_))
,cljs.core.range.call(null,n))], null);
}),m));
});
test_project.elevator.new_game = (function test_project$elevator$new_game(){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"elevator-capacity","elevator-capacity",-95157980),new cljs.core.Keyword(null,"running?","running?",-257884763),new cljs.core.Keyword(null,"game-over?","game-over?",432859304),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"elevator-position","elevator-position",87343244),new cljs.core.Keyword(null,"successes","successes",-936559567),new cljs.core.Keyword(null,"elevator","elevator",-1729324395),new cljs.core.Keyword(null,"floors","floors",313456152),new cljs.core.Keyword(null,"failures","failures",-912916356)],[(4),false,false,(120),(1),(0),cljs.core.PersistentVector.EMPTY,test_project.elevator.generate_people.call(null,(5),new cljs.core.PersistentArrayMap(null, 5, [(1),cljs.core.PersistentVector.EMPTY,(2),cljs.core.PersistentVector.EMPTY,(3),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY,(5),cljs.core.PersistentVector.EMPTY], null)),(0)]);
});
test_project.elevator.game_state = reagent.core.atom.call(null,test_project.elevator.new_game.call(null));
test_project.elevator.win_condition = (function test_project$elevator$win_condition(all_floors){
return cljs.core.every_QMARK_.call(null,(function (p__36078){
var vec__36079 = p__36078;
var floor = cljs.core.nth.call(null,vec__36079,(0),null);
var people = cljs.core.nth.call(null,vec__36079,(1),null);
return cljs.core.every_QMARK_.call(null,((function (vec__36079,floor,people){
return (function (person){
return cljs.core._EQ_.call(null,floor,new cljs.core.Keyword(null,"destination","destination",-253872483).cljs$core$IFn$_invoke$arity$1(person));
});})(vec__36079,floor,people))
,people);
}),all_floors);
});
test_project.elevator.check_win = (function test_project$elevator$check_win(){
if(((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"elevator","elevator",-1729324395).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_project.elevator.game_state)))) && (((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_project.elevator.game_state)),(0))) || (test_project.elevator.win_condition.call(null,new cljs.core.Keyword(null,"floors","floors",313456152).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_project.elevator.game_state)))))))){
return cljs.core.swap_BANG_.call(null,test_project.elevator.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"game-over?","game-over?",432859304),true);
} else {
return null;
}
});
test_project.elevator.move_elevator_BANG_ = (function test_project$elevator$move_elevator_BANG_(direction){
var current_position = new cljs.core.Keyword(null,"elevator-position","elevator-position",87343244).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_project.elevator.game_state));
if(((cljs.core.not_EQ_.call(null,current_position,(5))) && (cljs.core._EQ_.call(null,direction,new cljs.core.Keyword(null,"up","up",-269712113))))){
cljs.core.swap_BANG_.call(null,test_project.elevator.game_state,cljs.core.update,new cljs.core.Keyword(null,"elevator-position","elevator-position",87343244),cljs.core.inc);
} else {
}

if(((cljs.core.not_EQ_.call(null,current_position,(1))) && (cljs.core._EQ_.call(null,direction,new cljs.core.Keyword(null,"down","down",1565245570))))){
return cljs.core.swap_BANG_.call(null,test_project.elevator.game_state,cljs.core.update,new cljs.core.Keyword(null,"elevator-position","elevator-position",87343244),cljs.core.dec);
} else {
return null;
}
});
test_project.elevator.take_person_from_floor = (function test_project$elevator$take_person_from_floor(floor){
if((((cljs.core.count.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,test_project.elevator.game_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"floors","floors",313456152),floor], null))) > (0))) && ((cljs.core.count.call(null,new cljs.core.Keyword(null,"elevator","elevator",-1729324395).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_project.elevator.game_state))) < new cljs.core.Keyword(null,"elevator-capacity","elevator-capacity",-95157980).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_project.elevator.game_state)))))){
return cljs.core.reset_BANG_.call(null,test_project.elevator.game_state,cljs.core.update_in.call(null,cljs.core.update.call(null,cljs.core.deref.call(null,test_project.elevator.game_state),new cljs.core.Keyword(null,"elevator","elevator",-1729324395),(function (p1__36082_SHARP_){
return cljs.core.conj.call(null,p1__36082_SHARP_,cljs.core.first.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,test_project.elevator.game_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"floors","floors",313456152),floor], null))));
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"floors","floors",313456152),floor], null),(function (p1__36083_SHARP_){
return cljs.core.vec.call(null,cljs.core.rest.call(null,p1__36083_SHARP_));
})));
} else {
return null;
}
});
test_project.elevator.drop_person_off = (function test_project$elevator$drop_person_off(floor){
var temp__5720__auto__ = cljs.core.first.call(null,new cljs.core.Keyword(null,"elevator","elevator",-1729324395).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_project.elevator.game_state)));
if(cljs.core.truth_(temp__5720__auto__)){
var person = temp__5720__auto__;
return cljs.core.reset_BANG_.call(null,test_project.elevator.game_state,(function (){var G__36086 = cljs.core.deref.call(null,test_project.elevator.game_state);
var G__36086__$1 = cljs.core.update.call(null,G__36086,new cljs.core.Keyword(null,"elevator","elevator",-1729324395),((function (G__36086,person,temp__5720__auto__){
return (function (p1__36084_SHARP_){
return cljs.core.vec.call(null,cljs.core.rest.call(null,p1__36084_SHARP_));
});})(G__36086,person,temp__5720__auto__))
)
;
var G__36086__$2 = cljs.core.update_in.call(null,G__36086__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"floors","floors",313456152),floor], null),((function (G__36086,G__36086__$1,person,temp__5720__auto__){
return (function (p1__36085_SHARP_){
return cljs.core.conj.call(null,p1__36085_SHARP_,person);
});})(G__36086,G__36086__$1,person,temp__5720__auto__))
)
;
var G__36086__$3 = ((cljs.core._EQ_.call(null,floor,new cljs.core.Keyword(null,"destination","destination",-253872483).cljs$core$IFn$_invoke$arity$1(person)))?cljs.core.update.call(null,G__36086__$2,new cljs.core.Keyword(null,"successes","successes",-936559567),cljs.core.inc):G__36086__$2);
if(cljs.core.not_EQ_.call(null,floor,new cljs.core.Keyword(null,"destination","destination",-253872483).cljs$core$IFn$_invoke$arity$1(person))){
return cljs.core.update.call(null,G__36086__$3,new cljs.core.Keyword(null,"failures","failures",-912916356),cljs.core.inc);
} else {
return G__36086__$3;
}
})());
} else {
return null;
}
});
test_project.elevator.move = (function test_project$elevator$move(e){
var key = e.keyCode;
var G__36087 = key;
switch (G__36087) {
case (40):
return test_project.elevator.move_elevator_BANG_.call(null,new cljs.core.Keyword(null,"down","down",1565245570));

break;
case (38):
return test_project.elevator.move_elevator_BANG_.call(null,new cljs.core.Keyword(null,"up","up",-269712113));

break;
case (37):
return test_project.elevator.take_person_from_floor.call(null,new cljs.core.Keyword(null,"elevator-position","elevator-position",87343244).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_project.elevator.game_state)));

break;
case (39):
test_project.elevator.drop_person_off.call(null,new cljs.core.Keyword(null,"elevator-position","elevator-position",87343244).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_project.elevator.game_state)));

return test_project.elevator.check_win.call(null);

break;
default:
return null;

}
});
test_project.elevator.game_board = (function test_project$elevator$game_board(){
var elevator_position = new cljs.core.Keyword(null,"elevator-position","elevator-position",87343244).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_project.elevator.game_state));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.columns","div.columns",-437221213),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),cljs.core.map.call(null,((function (elevator_position){
return (function (p__36089){
var vec__36090 = p__36089;
var floor_id = cljs.core.nth.call(null,vec__36090,(0),null);
var _ = cljs.core.nth.call(null,vec__36090,(1),null);
if(cljs.core._EQ_.call(null,floor_id,elevator_position)){
return cljs.core.into.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid red",new cljs.core.Keyword(null,"height","height",1025178622),"50px"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["efloor",cljs.core.str.cljs$core$IFn$_invoke$arity$1(floor_id)].join('')], null)),cljs.core.map.call(null,((function (vec__36090,floor_id,_,elevator_position){
return (function (p__36093){
var map__36094 = p__36093;
var map__36094__$1 = (((((!((map__36094 == null))))?(((((map__36094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36094):map__36094);
var id = cljs.core.get.call(null,map__36094__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var destination = cljs.core.get.call(null,map__36094__$1,new cljs.core.Keyword(null,"destination","destination",-253872483));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_project.elevator.person,destination], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["person ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null));
});})(vec__36090,floor_id,_,elevator_position))
,cljs.core.reverse.call(null,new cljs.core.Keyword(null,"elevator","elevator",-1729324395).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_project.elevator.game_state)))));
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"50px"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["efloor",cljs.core.str.cljs$core$IFn$_invoke$arity$1(floor_id)].join('')], null));
}
});})(elevator_position))
,cljs.core.reverse.call(null,new cljs.core.Keyword(null,"floors","floors",313456152).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_project.elevator.game_state))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),cljs.core.map.call(null,((function (elevator_position){
return (function (p__36096){
var vec__36097 = p__36096;
var floor_id = cljs.core.nth.call(null,vec__36097,(0),null);
var people = cljs.core.nth.call(null,vec__36097,(1),null);
return cljs.core.into.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"height","height",1025178622),"50px",new cljs.core.Keyword(null,"width","width",-384071477),"50px"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["floor",cljs.core.str.cljs$core$IFn$_invoke$arity$1(floor_id)].join('')], null)),cljs.core.mapv.call(null,((function (vec__36097,floor_id,people,elevator_position){
return (function (p__36100){
var map__36101 = p__36100;
var map__36101__$1 = (((((!((map__36101 == null))))?(((((map__36101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36101):map__36101);
var id = cljs.core.get.call(null,map__36101__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var destination = cljs.core.get.call(null,map__36101__$1,new cljs.core.Keyword(null,"destination","destination",-253872483));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_project.elevator.person,destination], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
});})(vec__36097,floor_id,people,elevator_position))
,people));
});})(elevator_position))
,cljs.core.reverse.call(null,new cljs.core.Keyword(null,"floors","floors",313456152).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_project.elevator.game_state))))], null)], null);
});
test_project.elevator.game_timer = (function test_project$elevator$game_timer(){
var with_let36103 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let36103","with-let36103",790579597));
var temp__5724__auto___36105 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5724__auto___36105 == null)){
} else {
var c__20925__auto___36106 = temp__5724__auto___36105;
if((with_let36103.generation === c__20925__auto___36106.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let36103.generation = c__20925__auto___36106.ratomGeneration;
}


var init36104 = (with_let36103.length === (0));
var timer_fn = ((init36104)?(with_let36103[(0)] = setInterval(((function (init36104,with_let36103){
return (function (){
console.log("timer");

return cljs.core.swap_BANG_.call(null,test_project.elevator.game_state,cljs.core.update,new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.dec);
});})(init36104,with_let36103))
,(1000))):(with_let36103[(0)]));
var res__20926__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.timer","div.timer",396383019),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_project.elevator.game_state)),(0)))?clearInterval(timer_fn):null)], null);
var destroy__20924__auto___36107 = ((function (res__20926__auto__,init36104,timer_fn,with_let36103){
return (function (){
return clearInterval(timer_fn);
});})(res__20926__auto__,init36104,timer_fn,with_let36103))
;
if(reagent.ratom.reactive_QMARK_.call(null)){
if((with_let36103.destroy == null)){
with_let36103.destroy = destroy__20924__auto___36107;
} else {
}
} else {
destroy__20924__auto___36107.call(null);
}

return res__20926__auto__;
});
test_project.elevator.elevator = (function test_project$elevator$elevator(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return document.addEventListener("keydown",test_project.elevator.move);
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (){
return document.removeEventListener("keydown",test_project.elevator.move);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container.is-fluid","div.container.is-fluid",1788970446),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.title","h1.title",-2139952071),"Elevator Game"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.subtitle","span.subtitle",-1899253836),["Successes: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"successes","successes",-936559567).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_project.elevator.game_state)))," Failures: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"failures","failures",-912916356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_project.elevator.game_state)))," Time Remaining: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_project.elevator.game_state)))].join('')], null),(cljs.core.truth_(new cljs.core.Keyword(null,"game-over?","game-over?",432859304).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_project.elevator.game_state)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.title","h2.title",866247517),"GAME OVER -- ",((cljs.core._EQ_.call(null,(0),new cljs.core.Keyword(null,"failures","failures",-912916356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_project.elevator.game_state))))?"PERFECT!":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,cljs.core.deref.call(null,test_project.elevator.game_state),test_project.elevator.new_game.call(null));
})], null),"New Game"], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(new cljs.core.Keyword(null,"running?","running?",-257884763).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_project.elevator.game_state)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_project.elevator.game_timer], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_project.elevator.game_board], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,test_project.elevator.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"running?","running?",-257884763),true);
})], null),"Start Game"], null))], null))], null);
})], null));
});

//# sourceMappingURL=elevator.js.map?rel=1561073083337
