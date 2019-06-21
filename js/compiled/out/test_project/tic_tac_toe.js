// Compiled by ClojureScript 1.10.520 {}
goog.provide('test_project.tic_tac_toe');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.set');
test_project.tic_tac_toe.initial_game_state = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.PersistentHashMap.fromArrays([(7),(1),(4),(6),(3),(2),(9),(5),(8)],[null,null,null,null,null,null,null,null,null]),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"winner","winner",714604679),null], null);
test_project.tic_tac_toe.game_state = reagent.core.atom.call(null,test_project.tic_tac_toe.initial_game_state);
test_project.tic_tac_toe.update_winner = (function test_project$tic_tac_toe$update_winner(value){
return cljs.core.swap_BANG_.call(null,test_project.tic_tac_toe.game_state,(function (p1__36131_SHARP_){
return cljs.core.assoc.call(null,p1__36131_SHARP_,new cljs.core.Keyword(null,"winner","winner",714604679),value);
}));
});
test_project.tic_tac_toe.change_player_BANG_ = (function test_project$tic_tac_toe$change_player_BANG_(){
return cljs.core.swap_BANG_.call(null,test_project.tic_tac_toe.game_state,(function (p1__36132_SHARP_){
return cljs.core.assoc.call(null,p1__36132_SHARP_,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(p1__36132_SHARP_),new cljs.core.Keyword(null,"X","X",1705996313)))?new cljs.core.Keyword(null,"O","O",795252742):new cljs.core.Keyword(null,"X","X",1705996313)));
}));
});
test_project.tic_tac_toe.reset_game_BANG_ = (function test_project$tic_tac_toe$reset_game_BANG_(){
return cljs.core.reset_BANG_.call(null,test_project.tic_tac_toe.game_state,test_project.tic_tac_toe.initial_game_state);
});
test_project.tic_tac_toe.set_cell_BANG_ = (function test_project$tic_tac_toe$set_cell_BANG_(id){
return cljs.core.swap_BANG_.call(null,test_project.tic_tac_toe.game_state,(function (p1__36133_SHARP_){
return cljs.core.assoc_in.call(null,p1__36133_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),id], null),new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(p1__36133_SHARP_));
}));
});
var winning_sets_36134 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(3),null,(2),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(4),null,(6),null,(5),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(7),null,(9),null,(8),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(7),null,(1),null,(4),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(2),null,(5),null,(8),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(6),null,(3),null,(9),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(9),null,(5),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(7),null,(3),null,(5),null], null), null)], null);
test_project.tic_tac_toe.win_QMARK_ = ((function (winning_sets_36134){
return (function test_project$tic_tac_toe$win_QMARK_(moves){
return cljs.core.some.call(null,((function (winning_sets_36134){
return (function (winning_set){
return cljs.core._EQ_.call(null,clojure.set.intersection.call(null,winning_set,moves),winning_set);
});})(winning_sets_36134))
,winning_sets_36134);
});})(winning_sets_36134))
;
test_project.tic_tac_toe.win_lose_draw = (function test_project$tic_tac_toe$win_lose_draw(board,player){
var moves = cljs.core.reduce_kv.call(null,(function (prev,k,v){
if(cljs.core._EQ_.call(null,v,player)){
return cljs.core.conj.call(null,prev,k);
} else {
return prev;
}
}),cljs.core.PersistentHashSet.EMPTY,board);
var player_win = (cljs.core.truth_(test_project.tic_tac_toe.win_QMARK_.call(null,moves))?player:null);
var draw = ((cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.vals.call(null,board)))?new cljs.core.Keyword(null,"draw","draw",1358331674):null);
var or__4131__auto__ = player_win;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return draw;
}
});
test_project.tic_tac_toe.cell_click = (function test_project$tic_tac_toe$cell_click(id){
if((((new cljs.core.Keyword(null,"winner","winner",714604679).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_project.tic_tac_toe.game_state)) == null)) && ((cljs.core.get.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_project.tic_tac_toe.game_state)),id) == null)))){
test_project.tic_tac_toe.set_cell_BANG_.call(null,id);

var temp__5720__auto___36135 = test_project.tic_tac_toe.win_lose_draw.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_project.tic_tac_toe.game_state)),new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_project.tic_tac_toe.game_state)));
if(cljs.core.truth_(temp__5720__auto___36135)){
var result_36136 = temp__5720__auto___36135;
test_project.tic_tac_toe.update_winner.call(null,result_36136);
} else {
}

return test_project.tic_tac_toe.change_player_BANG_.call(null);
} else {
return null;
}
});
test_project.tic_tac_toe.button_cell = (function test_project$tic_tac_toe$button_cell(id,value){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.button-cell","div.button-cell",-501993383),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return test_project.tic_tac_toe.cell_click.call(null,id);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flip","div.flip",-725615924),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(value)?new cljs.core.Keyword(null,"flipped","flipped",567173306):null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cell-content","div.cell-content",1748180814),(cljs.core.truth_(value)?cljs.core.name.call(null,value):null)], null)], null)], null);
});
test_project.tic_tac_toe.flip_cell = (function test_project$tic_tac_toe$flip_cell(id,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flip-container","div.flip-container",-419221174),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flip-inner","div.flip-inner",1247888949),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flip-front","div.flip-front",1851675809)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flip-back","div.flip-back",2090309655),(cljs.core.truth_(value)?cljs.core.name.call(null,value):null)], null)], null)], null);
});
test_project.tic_tac_toe.game_board = (function test_project$tic_tac_toe$game_board(game_state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.game-board","div.game-board",1833032215),cljs.core.map.call(null,(function (p__36137){
var vec__36138 = p__36137;
var id = cljs.core.nth.call(null,vec__36138,(0),null);
var value = cljs.core.nth.call(null,vec__36138,(1),null);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_project.tic_tac_toe.button_cell,id,value], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
}),new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game_state))], null);
});
test_project.tic_tac_toe.tic_tac_toe = (function test_project$tic_tac_toe$tic_tac_toe(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container.is-fluid","div.container.is-fluid",1788970446),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.title","h1.title",-2139952071),"Tic-Tac-Toe"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_project.tic_tac_toe.game_board,cljs.core.deref.call(null,test_project.tic_tac_toe.game_state)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"winner","winner",714604679).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_project.tic_tac_toe.game_state)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button","button.button",1464242525),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),test_project.tic_tac_toe.reset_game_BANG_], null),"Play Again"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"draw","draw",1358331674),new cljs.core.Keyword(null,"winner","winner",714604679).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_project.tic_tac_toe.game_state))))?"Game ended in a draw!":["Winner is ",cljs.core.name.call(null,new cljs.core.Keyword(null,"winner","winner",714604679).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_project.tic_tac_toe.game_state)))].join(''))], null)], null):null)], null);
});

//# sourceMappingURL=tic_tac_toe.js.map?rel=1561073796227
