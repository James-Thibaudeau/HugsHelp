// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4131__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29739_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29739_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__29740 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29741 = null;
var count__29742 = (0);
var i__29743 = (0);
while(true){
if((i__29743 < count__29742)){
var n = cljs.core._nth.call(null,chunk__29741,i__29743);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29744 = seq__29740;
var G__29745 = chunk__29741;
var G__29746 = count__29742;
var G__29747 = (i__29743 + (1));
seq__29740 = G__29744;
chunk__29741 = G__29745;
count__29742 = G__29746;
i__29743 = G__29747;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__29740);
if(temp__5720__auto__){
var seq__29740__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29740__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__29740__$1);
var G__29748 = cljs.core.chunk_rest.call(null,seq__29740__$1);
var G__29749 = c__4550__auto__;
var G__29750 = cljs.core.count.call(null,c__4550__auto__);
var G__29751 = (0);
seq__29740 = G__29748;
chunk__29741 = G__29749;
count__29742 = G__29750;
i__29743 = G__29751;
continue;
} else {
var n = cljs.core.first.call(null,seq__29740__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29752 = cljs.core.next.call(null,seq__29740__$1);
var G__29753 = null;
var G__29754 = (0);
var G__29755 = (0);
seq__29740 = G__29752;
chunk__29741 = G__29753;
count__29742 = G__29754;
i__29743 = G__29755;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__29756){
var vec__29757 = p__29756;
var _ = cljs.core.nth.call(null,vec__29757,(0),null);
var v = cljs.core.nth.call(null,vec__29757,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__29760){
var vec__29761 = p__29760;
var k = cljs.core.nth.call(null,vec__29761,(0),null);
var v = cljs.core.nth.call(null,vec__29761,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__29773_29781 = cljs.core.seq.call(null,deps);
var chunk__29774_29782 = null;
var count__29775_29783 = (0);
var i__29776_29784 = (0);
while(true){
if((i__29776_29784 < count__29775_29783)){
var dep_29785 = cljs.core._nth.call(null,chunk__29774_29782,i__29776_29784);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_29785;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29785));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29785,(depth + (1)),state);
} else {
}


var G__29786 = seq__29773_29781;
var G__29787 = chunk__29774_29782;
var G__29788 = count__29775_29783;
var G__29789 = (i__29776_29784 + (1));
seq__29773_29781 = G__29786;
chunk__29774_29782 = G__29787;
count__29775_29783 = G__29788;
i__29776_29784 = G__29789;
continue;
} else {
var temp__5720__auto___29790 = cljs.core.seq.call(null,seq__29773_29781);
if(temp__5720__auto___29790){
var seq__29773_29791__$1 = temp__5720__auto___29790;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29773_29791__$1)){
var c__4550__auto___29792 = cljs.core.chunk_first.call(null,seq__29773_29791__$1);
var G__29793 = cljs.core.chunk_rest.call(null,seq__29773_29791__$1);
var G__29794 = c__4550__auto___29792;
var G__29795 = cljs.core.count.call(null,c__4550__auto___29792);
var G__29796 = (0);
seq__29773_29781 = G__29793;
chunk__29774_29782 = G__29794;
count__29775_29783 = G__29795;
i__29776_29784 = G__29796;
continue;
} else {
var dep_29797 = cljs.core.first.call(null,seq__29773_29791__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_29797;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29797));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29797,(depth + (1)),state);
} else {
}


var G__29798 = cljs.core.next.call(null,seq__29773_29791__$1);
var G__29799 = null;
var G__29800 = (0);
var G__29801 = (0);
seq__29773_29781 = G__29798;
chunk__29774_29782 = G__29799;
count__29775_29783 = G__29800;
i__29776_29784 = G__29801;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29777){
var vec__29778 = p__29777;
var seq__29779 = cljs.core.seq.call(null,vec__29778);
var first__29780 = cljs.core.first.call(null,seq__29779);
var seq__29779__$1 = cljs.core.next.call(null,seq__29779);
var x = first__29780;
var xs = seq__29779__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__29778,seq__29779,first__29780,seq__29779__$1,x,xs,get_deps__$1){
return (function (p1__29764_SHARP_){
return clojure.set.difference.call(null,p1__29764_SHARP_,x);
});})(vec__29778,seq__29779,first__29780,seq__29779__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__29802 = cljs.core.seq.call(null,provides);
var chunk__29803 = null;
var count__29804 = (0);
var i__29805 = (0);
while(true){
if((i__29805 < count__29804)){
var prov = cljs.core._nth.call(null,chunk__29803,i__29805);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29814_29822 = cljs.core.seq.call(null,requires);
var chunk__29815_29823 = null;
var count__29816_29824 = (0);
var i__29817_29825 = (0);
while(true){
if((i__29817_29825 < count__29816_29824)){
var req_29826 = cljs.core._nth.call(null,chunk__29815_29823,i__29817_29825);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29826,prov);


var G__29827 = seq__29814_29822;
var G__29828 = chunk__29815_29823;
var G__29829 = count__29816_29824;
var G__29830 = (i__29817_29825 + (1));
seq__29814_29822 = G__29827;
chunk__29815_29823 = G__29828;
count__29816_29824 = G__29829;
i__29817_29825 = G__29830;
continue;
} else {
var temp__5720__auto___29831 = cljs.core.seq.call(null,seq__29814_29822);
if(temp__5720__auto___29831){
var seq__29814_29832__$1 = temp__5720__auto___29831;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29814_29832__$1)){
var c__4550__auto___29833 = cljs.core.chunk_first.call(null,seq__29814_29832__$1);
var G__29834 = cljs.core.chunk_rest.call(null,seq__29814_29832__$1);
var G__29835 = c__4550__auto___29833;
var G__29836 = cljs.core.count.call(null,c__4550__auto___29833);
var G__29837 = (0);
seq__29814_29822 = G__29834;
chunk__29815_29823 = G__29835;
count__29816_29824 = G__29836;
i__29817_29825 = G__29837;
continue;
} else {
var req_29838 = cljs.core.first.call(null,seq__29814_29832__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29838,prov);


var G__29839 = cljs.core.next.call(null,seq__29814_29832__$1);
var G__29840 = null;
var G__29841 = (0);
var G__29842 = (0);
seq__29814_29822 = G__29839;
chunk__29815_29823 = G__29840;
count__29816_29824 = G__29841;
i__29817_29825 = G__29842;
continue;
}
} else {
}
}
break;
}


var G__29843 = seq__29802;
var G__29844 = chunk__29803;
var G__29845 = count__29804;
var G__29846 = (i__29805 + (1));
seq__29802 = G__29843;
chunk__29803 = G__29844;
count__29804 = G__29845;
i__29805 = G__29846;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__29802);
if(temp__5720__auto__){
var seq__29802__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29802__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__29802__$1);
var G__29847 = cljs.core.chunk_rest.call(null,seq__29802__$1);
var G__29848 = c__4550__auto__;
var G__29849 = cljs.core.count.call(null,c__4550__auto__);
var G__29850 = (0);
seq__29802 = G__29847;
chunk__29803 = G__29848;
count__29804 = G__29849;
i__29805 = G__29850;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29802__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29818_29851 = cljs.core.seq.call(null,requires);
var chunk__29819_29852 = null;
var count__29820_29853 = (0);
var i__29821_29854 = (0);
while(true){
if((i__29821_29854 < count__29820_29853)){
var req_29855 = cljs.core._nth.call(null,chunk__29819_29852,i__29821_29854);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29855,prov);


var G__29856 = seq__29818_29851;
var G__29857 = chunk__29819_29852;
var G__29858 = count__29820_29853;
var G__29859 = (i__29821_29854 + (1));
seq__29818_29851 = G__29856;
chunk__29819_29852 = G__29857;
count__29820_29853 = G__29858;
i__29821_29854 = G__29859;
continue;
} else {
var temp__5720__auto___29860__$1 = cljs.core.seq.call(null,seq__29818_29851);
if(temp__5720__auto___29860__$1){
var seq__29818_29861__$1 = temp__5720__auto___29860__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29818_29861__$1)){
var c__4550__auto___29862 = cljs.core.chunk_first.call(null,seq__29818_29861__$1);
var G__29863 = cljs.core.chunk_rest.call(null,seq__29818_29861__$1);
var G__29864 = c__4550__auto___29862;
var G__29865 = cljs.core.count.call(null,c__4550__auto___29862);
var G__29866 = (0);
seq__29818_29851 = G__29863;
chunk__29819_29852 = G__29864;
count__29820_29853 = G__29865;
i__29821_29854 = G__29866;
continue;
} else {
var req_29867 = cljs.core.first.call(null,seq__29818_29861__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29867,prov);


var G__29868 = cljs.core.next.call(null,seq__29818_29861__$1);
var G__29869 = null;
var G__29870 = (0);
var G__29871 = (0);
seq__29818_29851 = G__29868;
chunk__29819_29852 = G__29869;
count__29820_29853 = G__29870;
i__29821_29854 = G__29871;
continue;
}
} else {
}
}
break;
}


var G__29872 = cljs.core.next.call(null,seq__29802__$1);
var G__29873 = null;
var G__29874 = (0);
var G__29875 = (0);
seq__29802 = G__29872;
chunk__29803 = G__29873;
count__29804 = G__29874;
i__29805 = G__29875;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__29876_29880 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29877_29881 = null;
var count__29878_29882 = (0);
var i__29879_29883 = (0);
while(true){
if((i__29879_29883 < count__29878_29882)){
var ns_29884 = cljs.core._nth.call(null,chunk__29877_29881,i__29879_29883);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29884);


var G__29885 = seq__29876_29880;
var G__29886 = chunk__29877_29881;
var G__29887 = count__29878_29882;
var G__29888 = (i__29879_29883 + (1));
seq__29876_29880 = G__29885;
chunk__29877_29881 = G__29886;
count__29878_29882 = G__29887;
i__29879_29883 = G__29888;
continue;
} else {
var temp__5720__auto___29889 = cljs.core.seq.call(null,seq__29876_29880);
if(temp__5720__auto___29889){
var seq__29876_29890__$1 = temp__5720__auto___29889;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29876_29890__$1)){
var c__4550__auto___29891 = cljs.core.chunk_first.call(null,seq__29876_29890__$1);
var G__29892 = cljs.core.chunk_rest.call(null,seq__29876_29890__$1);
var G__29893 = c__4550__auto___29891;
var G__29894 = cljs.core.count.call(null,c__4550__auto___29891);
var G__29895 = (0);
seq__29876_29880 = G__29892;
chunk__29877_29881 = G__29893;
count__29878_29882 = G__29894;
i__29879_29883 = G__29895;
continue;
} else {
var ns_29896 = cljs.core.first.call(null,seq__29876_29890__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29896);


var G__29897 = cljs.core.next.call(null,seq__29876_29890__$1);
var G__29898 = null;
var G__29899 = (0);
var G__29900 = (0);
seq__29876_29880 = G__29897;
chunk__29877_29881 = G__29898;
count__29878_29882 = G__29899;
i__29879_29883 = G__29900;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4131__auto__ = goog.require__;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__29901__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29901 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29902__i = 0, G__29902__a = new Array(arguments.length -  0);
while (G__29902__i < G__29902__a.length) {G__29902__a[G__29902__i] = arguments[G__29902__i + 0]; ++G__29902__i;}
  args = new cljs.core.IndexedSeq(G__29902__a,0,null);
} 
return G__29901__delegate.call(this,args);};
G__29901.cljs$lang$maxFixedArity = 0;
G__29901.cljs$lang$applyTo = (function (arglist__29903){
var args = cljs.core.seq(arglist__29903);
return G__29901__delegate(args);
});
G__29901.cljs$core$IFn$_invoke$arity$variadic = G__29901__delegate;
return G__29901;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__29904_SHARP_,p2__29905_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29904_SHARP_)),p2__29905_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__29906_SHARP_,p2__29907_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29906_SHARP_),p2__29907_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__29908 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__29908.addCallback(((function (G__29908){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__29908))
);

G__29908.addErrback(((function (G__29908){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__29908))
);

return G__29908;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e29909){if((e29909 instanceof Error)){
var e = e29909;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29909;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e29910){if((e29910 instanceof Error)){
var e = e29910;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29910;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29911 = cljs.core._EQ_;
var expr__29912 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29911.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29912))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__29911.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29912))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__29911.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__29912))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__29911,expr__29912){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__29911,expr__29912))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29914,callback){
var map__29915 = p__29914;
var map__29915__$1 = (((((!((map__29915 == null))))?(((((map__29915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29915):map__29915);
var file_msg = map__29915__$1;
var request_url = cljs.core.get.call(null,map__29915__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__29915,map__29915__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29915,map__29915__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__27624__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27624__auto__){
return (function (){
var f__27625__auto__ = (function (){var switch__27529__auto__ = ((function (c__27624__auto__){
return (function (state_29953){
var state_val_29954 = (state_29953[(1)]);
if((state_val_29954 === (7))){
var inst_29949 = (state_29953[(2)]);
var state_29953__$1 = state_29953;
var statearr_29955_29981 = state_29953__$1;
(statearr_29955_29981[(2)] = inst_29949);

(statearr_29955_29981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29954 === (1))){
var state_29953__$1 = state_29953;
var statearr_29956_29982 = state_29953__$1;
(statearr_29956_29982[(2)] = null);

(statearr_29956_29982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29954 === (4))){
var inst_29919 = (state_29953[(7)]);
var inst_29919__$1 = (state_29953[(2)]);
var state_29953__$1 = (function (){var statearr_29957 = state_29953;
(statearr_29957[(7)] = inst_29919__$1);

return statearr_29957;
})();
if(cljs.core.truth_(inst_29919__$1)){
var statearr_29958_29983 = state_29953__$1;
(statearr_29958_29983[(1)] = (5));

} else {
var statearr_29959_29984 = state_29953__$1;
(statearr_29959_29984[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29954 === (15))){
var inst_29934 = (state_29953[(8)]);
var inst_29932 = (state_29953[(9)]);
var inst_29936 = inst_29934.call(null,inst_29932);
var state_29953__$1 = state_29953;
var statearr_29960_29985 = state_29953__$1;
(statearr_29960_29985[(2)] = inst_29936);

(statearr_29960_29985[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29954 === (13))){
var inst_29943 = (state_29953[(2)]);
var state_29953__$1 = state_29953;
var statearr_29961_29986 = state_29953__$1;
(statearr_29961_29986[(2)] = inst_29943);

(statearr_29961_29986[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29954 === (6))){
var state_29953__$1 = state_29953;
var statearr_29962_29987 = state_29953__$1;
(statearr_29962_29987[(2)] = null);

(statearr_29962_29987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29954 === (17))){
var inst_29940 = (state_29953[(2)]);
var state_29953__$1 = state_29953;
var statearr_29963_29988 = state_29953__$1;
(statearr_29963_29988[(2)] = inst_29940);

(statearr_29963_29988[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29954 === (3))){
var inst_29951 = (state_29953[(2)]);
var state_29953__$1 = state_29953;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29953__$1,inst_29951);
} else {
if((state_val_29954 === (12))){
var state_29953__$1 = state_29953;
var statearr_29964_29989 = state_29953__$1;
(statearr_29964_29989[(2)] = null);

(statearr_29964_29989[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29954 === (2))){
var state_29953__$1 = state_29953;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29953__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_29954 === (11))){
var inst_29924 = (state_29953[(10)]);
var inst_29930 = figwheel.client.file_reloading.blocking_load.call(null,inst_29924);
var state_29953__$1 = state_29953;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29953__$1,(14),inst_29930);
} else {
if((state_val_29954 === (9))){
var inst_29924 = (state_29953[(10)]);
var state_29953__$1 = state_29953;
if(cljs.core.truth_(inst_29924)){
var statearr_29965_29990 = state_29953__$1;
(statearr_29965_29990[(1)] = (11));

} else {
var statearr_29966_29991 = state_29953__$1;
(statearr_29966_29991[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29954 === (5))){
var inst_29919 = (state_29953[(7)]);
var inst_29925 = (state_29953[(11)]);
var inst_29924 = cljs.core.nth.call(null,inst_29919,(0),null);
var inst_29925__$1 = cljs.core.nth.call(null,inst_29919,(1),null);
var state_29953__$1 = (function (){var statearr_29967 = state_29953;
(statearr_29967[(10)] = inst_29924);

(statearr_29967[(11)] = inst_29925__$1);

return statearr_29967;
})();
if(cljs.core.truth_(inst_29925__$1)){
var statearr_29968_29992 = state_29953__$1;
(statearr_29968_29992[(1)] = (8));

} else {
var statearr_29969_29993 = state_29953__$1;
(statearr_29969_29993[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29954 === (14))){
var inst_29934 = (state_29953[(8)]);
var inst_29924 = (state_29953[(10)]);
var inst_29932 = (state_29953[(2)]);
var inst_29933 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29934__$1 = cljs.core.get.call(null,inst_29933,inst_29924);
var state_29953__$1 = (function (){var statearr_29970 = state_29953;
(statearr_29970[(8)] = inst_29934__$1);

(statearr_29970[(9)] = inst_29932);

return statearr_29970;
})();
if(cljs.core.truth_(inst_29934__$1)){
var statearr_29971_29994 = state_29953__$1;
(statearr_29971_29994[(1)] = (15));

} else {
var statearr_29972_29995 = state_29953__$1;
(statearr_29972_29995[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29954 === (16))){
var inst_29932 = (state_29953[(9)]);
var inst_29938 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29932);
var state_29953__$1 = state_29953;
var statearr_29973_29996 = state_29953__$1;
(statearr_29973_29996[(2)] = inst_29938);

(statearr_29973_29996[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29954 === (10))){
var inst_29945 = (state_29953[(2)]);
var state_29953__$1 = (function (){var statearr_29974 = state_29953;
(statearr_29974[(12)] = inst_29945);

return statearr_29974;
})();
var statearr_29975_29997 = state_29953__$1;
(statearr_29975_29997[(2)] = null);

(statearr_29975_29997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29954 === (8))){
var inst_29925 = (state_29953[(11)]);
var inst_29927 = eval(inst_29925);
var state_29953__$1 = state_29953;
var statearr_29976_29998 = state_29953__$1;
(statearr_29976_29998[(2)] = inst_29927);

(statearr_29976_29998[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27624__auto__))
;
return ((function (switch__27529__auto__,c__27624__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__27530__auto__ = null;
var figwheel$client$file_reloading$state_machine__27530__auto____0 = (function (){
var statearr_29977 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29977[(0)] = figwheel$client$file_reloading$state_machine__27530__auto__);

(statearr_29977[(1)] = (1));

return statearr_29977;
});
var figwheel$client$file_reloading$state_machine__27530__auto____1 = (function (state_29953){
while(true){
var ret_value__27531__auto__ = (function (){try{while(true){
var result__27532__auto__ = switch__27529__auto__.call(null,state_29953);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27532__auto__;
}
break;
}
}catch (e29978){if((e29978 instanceof Object)){
var ex__27533__auto__ = e29978;
var statearr_29979_29999 = state_29953;
(statearr_29979_29999[(5)] = ex__27533__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29953);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30000 = state_29953;
state_29953 = G__30000;
continue;
} else {
return ret_value__27531__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27530__auto__ = function(state_29953){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27530__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27530__auto____1.call(this,state_29953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27530__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27530__auto____0;
figwheel$client$file_reloading$state_machine__27530__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27530__auto____1;
return figwheel$client$file_reloading$state_machine__27530__auto__;
})()
;})(switch__27529__auto__,c__27624__auto__))
})();
var state__27626__auto__ = (function (){var statearr_29980 = f__27625__auto__.call(null);
(statearr_29980[(6)] = c__27624__auto__);

return statearr_29980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27626__auto__);
});})(c__27624__auto__))
);

return c__27624__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__30002 = arguments.length;
switch (G__30002) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30004,callback){
var map__30005 = p__30004;
var map__30005__$1 = (((((!((map__30005 == null))))?(((((map__30005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30005):map__30005);
var file_msg = map__30005__$1;
var namespace = cljs.core.get.call(null,map__30005__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__30005,map__30005__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__30005,map__30005__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__30007){
var map__30008 = p__30007;
var map__30008__$1 = (((((!((map__30008 == null))))?(((((map__30008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30008):map__30008);
var file_msg = map__30008__$1;
var namespace = cljs.core.get.call(null,map__30008__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30010){
var map__30011 = p__30010;
var map__30011__$1 = (((((!((map__30011 == null))))?(((((map__30011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30011):map__30011);
var file_msg = map__30011__$1;
var namespace = cljs.core.get.call(null,map__30011__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4120__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4120__auto__){
var or__4131__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4120__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30013,callback){
var map__30014 = p__30013;
var map__30014__$1 = (((((!((map__30014 == null))))?(((((map__30014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30014):map__30014);
var file_msg = map__30014__$1;
var request_url = cljs.core.get.call(null,map__30014__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30014__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__27624__auto___30064 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27624__auto___30064,out){
return (function (){
var f__27625__auto__ = (function (){var switch__27529__auto__ = ((function (c__27624__auto___30064,out){
return (function (state_30049){
var state_val_30050 = (state_30049[(1)]);
if((state_val_30050 === (1))){
var inst_30023 = cljs.core.seq.call(null,files);
var inst_30024 = cljs.core.first.call(null,inst_30023);
var inst_30025 = cljs.core.next.call(null,inst_30023);
var inst_30026 = files;
var state_30049__$1 = (function (){var statearr_30051 = state_30049;
(statearr_30051[(7)] = inst_30026);

(statearr_30051[(8)] = inst_30025);

(statearr_30051[(9)] = inst_30024);

return statearr_30051;
})();
var statearr_30052_30065 = state_30049__$1;
(statearr_30052_30065[(2)] = null);

(statearr_30052_30065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30050 === (2))){
var inst_30032 = (state_30049[(10)]);
var inst_30026 = (state_30049[(7)]);
var inst_30031 = cljs.core.seq.call(null,inst_30026);
var inst_30032__$1 = cljs.core.first.call(null,inst_30031);
var inst_30033 = cljs.core.next.call(null,inst_30031);
var inst_30034 = (inst_30032__$1 == null);
var inst_30035 = cljs.core.not.call(null,inst_30034);
var state_30049__$1 = (function (){var statearr_30053 = state_30049;
(statearr_30053[(10)] = inst_30032__$1);

(statearr_30053[(11)] = inst_30033);

return statearr_30053;
})();
if(inst_30035){
var statearr_30054_30066 = state_30049__$1;
(statearr_30054_30066[(1)] = (4));

} else {
var statearr_30055_30067 = state_30049__$1;
(statearr_30055_30067[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30050 === (3))){
var inst_30047 = (state_30049[(2)]);
var state_30049__$1 = state_30049;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30049__$1,inst_30047);
} else {
if((state_val_30050 === (4))){
var inst_30032 = (state_30049[(10)]);
var inst_30037 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30032);
var state_30049__$1 = state_30049;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30049__$1,(7),inst_30037);
} else {
if((state_val_30050 === (5))){
var inst_30043 = cljs.core.async.close_BANG_.call(null,out);
var state_30049__$1 = state_30049;
var statearr_30056_30068 = state_30049__$1;
(statearr_30056_30068[(2)] = inst_30043);

(statearr_30056_30068[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30050 === (6))){
var inst_30045 = (state_30049[(2)]);
var state_30049__$1 = state_30049;
var statearr_30057_30069 = state_30049__$1;
(statearr_30057_30069[(2)] = inst_30045);

(statearr_30057_30069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30050 === (7))){
var inst_30033 = (state_30049[(11)]);
var inst_30039 = (state_30049[(2)]);
var inst_30040 = cljs.core.async.put_BANG_.call(null,out,inst_30039);
var inst_30026 = inst_30033;
var state_30049__$1 = (function (){var statearr_30058 = state_30049;
(statearr_30058[(7)] = inst_30026);

(statearr_30058[(12)] = inst_30040);

return statearr_30058;
})();
var statearr_30059_30070 = state_30049__$1;
(statearr_30059_30070[(2)] = null);

(statearr_30059_30070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__27624__auto___30064,out))
;
return ((function (switch__27529__auto__,c__27624__auto___30064,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27530__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27530__auto____0 = (function (){
var statearr_30060 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30060[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27530__auto__);

(statearr_30060[(1)] = (1));

return statearr_30060;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27530__auto____1 = (function (state_30049){
while(true){
var ret_value__27531__auto__ = (function (){try{while(true){
var result__27532__auto__ = switch__27529__auto__.call(null,state_30049);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27532__auto__;
}
break;
}
}catch (e30061){if((e30061 instanceof Object)){
var ex__27533__auto__ = e30061;
var statearr_30062_30071 = state_30049;
(statearr_30062_30071[(5)] = ex__27533__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30049);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30061;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30072 = state_30049;
state_30049 = G__30072;
continue;
} else {
return ret_value__27531__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27530__auto__ = function(state_30049){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27530__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27530__auto____1.call(this,state_30049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27530__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27530__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27530__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27530__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27530__auto__;
})()
;})(switch__27529__auto__,c__27624__auto___30064,out))
})();
var state__27626__auto__ = (function (){var statearr_30063 = f__27625__auto__.call(null);
(statearr_30063[(6)] = c__27624__auto___30064);

return statearr_30063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27626__auto__);
});})(c__27624__auto___30064,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30073,opts){
var map__30074 = p__30073;
var map__30074__$1 = (((((!((map__30074 == null))))?(((((map__30074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30074):map__30074);
var eval_body = cljs.core.get.call(null,map__30074__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30074__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4120__auto__ = eval_body;
if(cljs.core.truth_(and__4120__auto__)){
return typeof eval_body === 'string';
} else {
return and__4120__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e30076){var e = e30076;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__30077_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30077_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5718__auto__)){
var file_msg = temp__5718__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__30078){
var vec__30079 = p__30078;
var k = cljs.core.nth.call(null,vec__30079,(0),null);
var v = cljs.core.nth.call(null,vec__30079,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30082){
var vec__30083 = p__30082;
var k = cljs.core.nth.call(null,vec__30083,(0),null);
var v = cljs.core.nth.call(null,vec__30083,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30089,p__30090){
var map__30091 = p__30089;
var map__30091__$1 = (((((!((map__30091 == null))))?(((((map__30091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30091):map__30091);
var opts = map__30091__$1;
var before_jsload = cljs.core.get.call(null,map__30091__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30091__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30091__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30092 = p__30090;
var map__30092__$1 = (((((!((map__30092 == null))))?(((((map__30092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30092):map__30092);
var msg = map__30092__$1;
var files = cljs.core.get.call(null,map__30092__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30092__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30092__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27624__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27624__auto__,map__30091,map__30091__$1,opts,before_jsload,on_jsload,reload_dependents,map__30092,map__30092__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27625__auto__ = (function (){var switch__27529__auto__ = ((function (c__27624__auto__,map__30091,map__30091__$1,opts,before_jsload,on_jsload,reload_dependents,map__30092,map__30092__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_30246){
var state_val_30247 = (state_30246[(1)]);
if((state_val_30247 === (7))){
var inst_30108 = (state_30246[(7)]);
var inst_30109 = (state_30246[(8)]);
var inst_30107 = (state_30246[(9)]);
var inst_30106 = (state_30246[(10)]);
var inst_30114 = cljs.core._nth.call(null,inst_30107,inst_30109);
var inst_30115 = figwheel.client.file_reloading.eval_body.call(null,inst_30114,opts);
var inst_30116 = (inst_30109 + (1));
var tmp30248 = inst_30108;
var tmp30249 = inst_30107;
var tmp30250 = inst_30106;
var inst_30106__$1 = tmp30250;
var inst_30107__$1 = tmp30249;
var inst_30108__$1 = tmp30248;
var inst_30109__$1 = inst_30116;
var state_30246__$1 = (function (){var statearr_30251 = state_30246;
(statearr_30251[(7)] = inst_30108__$1);

(statearr_30251[(11)] = inst_30115);

(statearr_30251[(8)] = inst_30109__$1);

(statearr_30251[(9)] = inst_30107__$1);

(statearr_30251[(10)] = inst_30106__$1);

return statearr_30251;
})();
var statearr_30252_30335 = state_30246__$1;
(statearr_30252_30335[(2)] = null);

(statearr_30252_30335[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30247 === (20))){
var inst_30149 = (state_30246[(12)]);
var inst_30157 = figwheel.client.file_reloading.sort_files.call(null,inst_30149);
var state_30246__$1 = state_30246;
var statearr_30253_30336 = state_30246__$1;
(statearr_30253_30336[(2)] = inst_30157);

(statearr_30253_30336[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30247 === (27))){
var state_30246__$1 = state_30246;
var statearr_30254_30337 = state_30246__$1;
(statearr_30254_30337[(2)] = null);

(statearr_30254_30337[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30247 === (1))){
var inst_30098 = (state_30246[(13)]);
var inst_30095 = before_jsload.call(null,files);
var inst_30096 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30097 = (function (){return ((function (inst_30098,inst_30095,inst_30096,state_val_30247,c__27624__auto__,map__30091,map__30091__$1,opts,before_jsload,on_jsload,reload_dependents,map__30092,map__30092__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30086_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30086_SHARP_);
});
;})(inst_30098,inst_30095,inst_30096,state_val_30247,c__27624__auto__,map__30091,map__30091__$1,opts,before_jsload,on_jsload,reload_dependents,map__30092,map__30092__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30098__$1 = cljs.core.filter.call(null,inst_30097,files);
var inst_30099 = cljs.core.not_empty.call(null,inst_30098__$1);
var state_30246__$1 = (function (){var statearr_30255 = state_30246;
(statearr_30255[(14)] = inst_30095);

(statearr_30255[(15)] = inst_30096);

(statearr_30255[(13)] = inst_30098__$1);

return statearr_30255;
})();
if(cljs.core.truth_(inst_30099)){
var statearr_30256_30338 = state_30246__$1;
(statearr_30256_30338[(1)] = (2));

} else {
var statearr_30257_30339 = state_30246__$1;
(statearr_30257_30339[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30247 === (24))){
var state_30246__$1 = state_30246;
var statearr_30258_30340 = state_30246__$1;
(statearr_30258_30340[(2)] = null);

(statearr_30258_30340[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30247 === (39))){
var inst_30199 = (state_30246[(16)]);
var state_30246__$1 = state_30246;
var statearr_30259_30341 = state_30246__$1;
(statearr_30259_30341[(2)] = inst_30199);

(statearr_30259_30341[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30247 === (46))){
var inst_30241 = (state_30246[(2)]);
var state_30246__$1 = state_30246;
var statearr_30260_30342 = state_30246__$1;
(statearr_30260_30342[(2)] = inst_30241);

(statearr_30260_30342[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30247 === (4))){
var inst_30143 = (state_30246[(2)]);
var inst_30144 = cljs.core.List.EMPTY;
var inst_30145 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30144);
var inst_30146 = (function (){return ((function (inst_30143,inst_30144,inst_30145,state_val_30247,c__27624__auto__,map__30091,map__30091__$1,opts,before_jsload,on_jsload,reload_dependents,map__30092,map__30092__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30087_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30087_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30087_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__30087_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_30143,inst_30144,inst_30145,state_val_30247,c__27624__auto__,map__30091,map__30091__$1,opts,before_jsload,on_jsload,reload_dependents,map__30092,map__30092__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30147 = cljs.core.filter.call(null,inst_30146,files);
var inst_30148 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30149 = cljs.core.concat.call(null,inst_30147,inst_30148);
var state_30246__$1 = (function (){var statearr_30261 = state_30246;
(statearr_30261[(12)] = inst_30149);

(statearr_30261[(17)] = inst_30145);

(statearr_30261[(18)] = inst_30143);

return statearr_30261;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30262_30343 = state_30246__$1;
(statearr_30262_30343[(1)] = (16));

} else {
var statearr_30263_30344 = state_30246__$1;
(statearr_30263_30344[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30247 === (15))){
var inst_30133 = (state_30246[(2)]);
var state_30246__$1 = state_30246;
var statearr_30264_30345 = state_30246__$1;
(statearr_30264_30345[(2)] = inst_30133);

(statearr_30264_30345[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30247 === (21))){
var inst_30159 = (state_30246[(19)]);
var inst_30159__$1 = (state_30246[(2)]);
var inst_30160 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30159__$1);
var state_30246__$1 = (function (){var statearr_30265 = state_30246;
(statearr_30265[(19)] = inst_30159__$1);

return statearr_30265;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30246__$1,(22),inst_30160);
} else {
if((state_val_30247 === (31))){
var inst_30244 = (state_30246[(2)]);
var state_30246__$1 = state_30246;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30246__$1,inst_30244);
} else {
if((state_val_30247 === (32))){
var inst_30199 = (state_30246[(16)]);
var inst_30204 = inst_30199.cljs$lang$protocol_mask$partition0$;
var inst_30205 = (inst_30204 & (64));
var inst_30206 = inst_30199.cljs$core$ISeq$;
var inst_30207 = (cljs.core.PROTOCOL_SENTINEL === inst_30206);
var inst_30208 = ((inst_30205) || (inst_30207));
var state_30246__$1 = state_30246;
if(cljs.core.truth_(inst_30208)){
var statearr_30266_30346 = state_30246__$1;
(statearr_30266_30346[(1)] = (35));

} else {
var statearr_30267_30347 = state_30246__$1;
(statearr_30267_30347[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30247 === (40))){
var inst_30221 = (state_30246[(20)]);
var inst_30220 = (state_30246[(2)]);
var inst_30221__$1 = cljs.core.get.call(null,inst_30220,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30222 = cljs.core.get.call(null,inst_30220,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30223 = cljs.core.not_empty.call(null,inst_30221__$1);
var state_30246__$1 = (function (){var statearr_30268 = state_30246;
(statearr_30268[(20)] = inst_30221__$1);

(statearr_30268[(21)] = inst_30222);

return statearr_30268;
})();
if(cljs.core.truth_(inst_30223)){
var statearr_30269_30348 = state_30246__$1;
(statearr_30269_30348[(1)] = (41));

} else {
var statearr_30270_30349 = state_30246__$1;
(statearr_30270_30349[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30247 === (33))){
var state_30246__$1 = state_30246;
var statearr_30271_30350 = state_30246__$1;
(statearr_30271_30350[(2)] = false);

(statearr_30271_30350[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30247 === (13))){
var inst_30119 = (state_30246[(22)]);
var inst_30123 = cljs.core.chunk_first.call(null,inst_30119);
var inst_30124 = cljs.core.chunk_rest.call(null,inst_30119);
var inst_30125 = cljs.core.count.call(null,inst_30123);
var inst_30106 = inst_30124;
var inst_30107 = inst_30123;
var inst_30108 = inst_30125;
var inst_30109 = (0);
var state_30246__$1 = (function (){var statearr_30272 = state_30246;
(statearr_30272[(7)] = inst_30108);

(statearr_30272[(8)] = inst_30109);

(statearr_30272[(9)] = inst_30107);

(statearr_30272[(10)] = inst_30106);

return statearr_30272;
})();
var statearr_30273_30351 = state_30246__$1;
(statearr_30273_30351[(2)] = null);

(statearr_30273_30351[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30247 === (22))){
var inst_30159 = (state_30246[(19)]);
var inst_30163 = (state_30246[(23)]);
var inst_30167 = (state_30246[(24)]);
var inst_30162 = (state_30246[(25)]);
var inst_30162__$1 = (state_30246[(2)]);
var inst_30163__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30162__$1);
var inst_30164 = (function (){var all_files = inst_30159;
var res_SINGLEQUOTE_ = inst_30162__$1;
var res = inst_30163__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_30159,inst_30163,inst_30167,inst_30162,inst_30162__$1,inst_30163__$1,state_val_30247,c__27624__auto__,map__30091,map__30091__$1,opts,before_jsload,on_jsload,reload_dependents,map__30092,map__30092__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30088_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30088_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_30159,inst_30163,inst_30167,inst_30162,inst_30162__$1,inst_30163__$1,state_val_30247,c__27624__auto__,map__30091,map__30091__$1,opts,before_jsload,on_jsload,reload_dependents,map__30092,map__30092__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30165 = cljs.core.filter.call(null,inst_30164,inst_30162__$1);
var inst_30166 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30167__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30166);
var inst_30168 = cljs.core.not_empty.call(null,inst_30167__$1);
var state_30246__$1 = (function (){var statearr_30274 = state_30246;
(statearr_30274[(23)] = inst_30163__$1);

(statearr_30274[(26)] = inst_30165);

(statearr_30274[(24)] = inst_30167__$1);

(statearr_30274[(25)] = inst_30162__$1);

return statearr_30274;
})();
if(cljs.core.truth_(inst_30168)){
var statearr_30275_30352 = state_30246__$1;
(statearr_30275_30352[(1)] = (23));

} else {
var statearr_30276_30353 = state_30246__$1;
(statearr_30276_30353[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30247 === (36))){
var state_30246__$1 = state_30246;
var statearr_30277_30354 = state_30246__$1;
(statearr_30277_30354[(2)] = false);

(statearr_30277_30354[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30247 === (41))){
var inst_30221 = (state_30246[(20)]);
var inst_30225 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30226 = cljs.core.map.call(null,inst_30225,inst_30221);
var inst_30227 = cljs.core.pr_str.call(null,inst_30226);
var inst_30228 = ["figwheel-no-load meta-data: ",inst_30227].join('');
var inst_30229 = figwheel.client.utils.log.call(null,inst_30228);
var state_30246__$1 = state_30246;
var statearr_30278_30355 = state_30246__$1;
(statearr_30278_30355[(2)] = inst_30229);

(statearr_30278_30355[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30247 === (43))){
var inst_30222 = (state_30246[(21)]);
var inst_30232 = (state_30246[(2)]);
var inst_30233 = cljs.core.not_empty.call(null,inst_30222);
var state_30246__$1 = (function (){var statearr_30279 = state_30246;
(statearr_30279[(27)] = inst_30232);

return statearr_30279;
})();
if(cljs.core.truth_(inst_30233)){
var statearr_30280_30356 = state_30246__$1;
(statearr_30280_30356[(1)] = (44));

} else {
var statearr_30281_30357 = state_30246__$1;
(statearr_30281_30357[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30247 === (29))){
var inst_30159 = (state_30246[(19)]);
var inst_30163 = (state_30246[(23)]);
var inst_30165 = (state_30246[(26)]);
var inst_30199 = (state_30246[(16)]);
var inst_30167 = (state_30246[(24)]);
var inst_30162 = (state_30246[(25)]);
var inst_30195 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30198 = (function (){var all_files = inst_30159;
var res_SINGLEQUOTE_ = inst_30162;
var res = inst_30163;
var files_not_loaded = inst_30165;
var dependencies_that_loaded = inst_30167;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30159,inst_30163,inst_30165,inst_30199,inst_30167,inst_30162,inst_30195,state_val_30247,c__27624__auto__,map__30091,map__30091__$1,opts,before_jsload,on_jsload,reload_dependents,map__30092,map__30092__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30197){
var map__30282 = p__30197;
var map__30282__$1 = (((((!((map__30282 == null))))?(((((map__30282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30282):map__30282);
var namespace = cljs.core.get.call(null,map__30282__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30159,inst_30163,inst_30165,inst_30199,inst_30167,inst_30162,inst_30195,state_val_30247,c__27624__auto__,map__30091,map__30091__$1,opts,before_jsload,on_jsload,reload_dependents,map__30092,map__30092__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30199__$1 = cljs.core.group_by.call(null,inst_30198,inst_30165);
var inst_30201 = (inst_30199__$1 == null);
var inst_30202 = cljs.core.not.call(null,inst_30201);
var state_30246__$1 = (function (){var statearr_30284 = state_30246;
(statearr_30284[(16)] = inst_30199__$1);

(statearr_30284[(28)] = inst_30195);

return statearr_30284;
})();
if(inst_30202){
var statearr_30285_30358 = state_30246__$1;
(statearr_30285_30358[(1)] = (32));

} else {
var statearr_30286_30359 = state_30246__$1;
(statearr_30286_30359[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30247 === (44))){
var inst_30222 = (state_30246[(21)]);
var inst_30235 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30222);
var inst_30236 = cljs.core.pr_str.call(null,inst_30235);
var inst_30237 = ["not required: ",inst_30236].join('');
var inst_30238 = figwheel.client.utils.log.call(null,inst_30237);
var state_30246__$1 = state_30246;
var statearr_30287_30360 = state_30246__$1;
(statearr_30287_30360[(2)] = inst_30238);

(statearr_30287_30360[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30247 === (6))){
var inst_30140 = (state_30246[(2)]);
var state_30246__$1 = state_30246;
var statearr_30288_30361 = state_30246__$1;
(statearr_30288_30361[(2)] = inst_30140);

(statearr_30288_30361[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30247 === (28))){
var inst_30165 = (state_30246[(26)]);
var inst_30192 = (state_30246[(2)]);
var inst_30193 = cljs.core.not_empty.call(null,inst_30165);
var state_30246__$1 = (function (){var statearr_30289 = state_30246;
(statearr_30289[(29)] = inst_30192);

return statearr_30289;
})();
if(cljs.core.truth_(inst_30193)){
var statearr_30290_30362 = state_30246__$1;
(statearr_30290_30362[(1)] = (29));

} else {
var statearr_30291_30363 = state_30246__$1;
(statearr_30291_30363[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30247 === (25))){
var inst_30163 = (state_30246[(23)]);
var inst_30179 = (state_30246[(2)]);
var inst_30180 = cljs.core.not_empty.call(null,inst_30163);
var state_30246__$1 = (function (){var statearr_30292 = state_30246;
(statearr_30292[(30)] = inst_30179);

return statearr_30292;
})();
if(cljs.core.truth_(inst_30180)){
var statearr_30293_30364 = state_30246__$1;
(statearr_30293_30364[(1)] = (26));

} else {
var statearr_30294_30365 = state_30246__$1;
(statearr_30294_30365[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30247 === (34))){
var inst_30215 = (state_30246[(2)]);
var state_30246__$1 = state_30246;
if(cljs.core.truth_(inst_30215)){
var statearr_30295_30366 = state_30246__$1;
(statearr_30295_30366[(1)] = (38));

} else {
var statearr_30296_30367 = state_30246__$1;
(statearr_30296_30367[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30247 === (17))){
var state_30246__$1 = state_30246;
var statearr_30297_30368 = state_30246__$1;
(statearr_30297_30368[(2)] = recompile_dependents);

(statearr_30297_30368[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30247 === (3))){
var state_30246__$1 = state_30246;
var statearr_30298_30369 = state_30246__$1;
(statearr_30298_30369[(2)] = null);

(statearr_30298_30369[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30247 === (12))){
var inst_30136 = (state_30246[(2)]);
var state_30246__$1 = state_30246;
var statearr_30299_30370 = state_30246__$1;
(statearr_30299_30370[(2)] = inst_30136);

(statearr_30299_30370[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30247 === (2))){
var inst_30098 = (state_30246[(13)]);
var inst_30105 = cljs.core.seq.call(null,inst_30098);
var inst_30106 = inst_30105;
var inst_30107 = null;
var inst_30108 = (0);
var inst_30109 = (0);
var state_30246__$1 = (function (){var statearr_30300 = state_30246;
(statearr_30300[(7)] = inst_30108);

(statearr_30300[(8)] = inst_30109);

(statearr_30300[(9)] = inst_30107);

(statearr_30300[(10)] = inst_30106);

return statearr_30300;
})();
var statearr_30301_30371 = state_30246__$1;
(statearr_30301_30371[(2)] = null);

(statearr_30301_30371[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30247 === (23))){
var inst_30159 = (state_30246[(19)]);
var inst_30163 = (state_30246[(23)]);
var inst_30165 = (state_30246[(26)]);
var inst_30167 = (state_30246[(24)]);
var inst_30162 = (state_30246[(25)]);
var inst_30170 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30172 = (function (){var all_files = inst_30159;
var res_SINGLEQUOTE_ = inst_30162;
var res = inst_30163;
var files_not_loaded = inst_30165;
var dependencies_that_loaded = inst_30167;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30159,inst_30163,inst_30165,inst_30167,inst_30162,inst_30170,state_val_30247,c__27624__auto__,map__30091,map__30091__$1,opts,before_jsload,on_jsload,reload_dependents,map__30092,map__30092__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30171){
var map__30302 = p__30171;
var map__30302__$1 = (((((!((map__30302 == null))))?(((((map__30302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30302):map__30302);
var request_url = cljs.core.get.call(null,map__30302__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30159,inst_30163,inst_30165,inst_30167,inst_30162,inst_30170,state_val_30247,c__27624__auto__,map__30091,map__30091__$1,opts,before_jsload,on_jsload,reload_dependents,map__30092,map__30092__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30173 = cljs.core.reverse.call(null,inst_30167);
var inst_30174 = cljs.core.map.call(null,inst_30172,inst_30173);
var inst_30175 = cljs.core.pr_str.call(null,inst_30174);
var inst_30176 = figwheel.client.utils.log.call(null,inst_30175);
var state_30246__$1 = (function (){var statearr_30304 = state_30246;
(statearr_30304[(31)] = inst_30170);

return statearr_30304;
})();
var statearr_30305_30372 = state_30246__$1;
(statearr_30305_30372[(2)] = inst_30176);

(statearr_30305_30372[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30247 === (35))){
var state_30246__$1 = state_30246;
var statearr_30306_30373 = state_30246__$1;
(statearr_30306_30373[(2)] = true);

(statearr_30306_30373[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30247 === (19))){
var inst_30149 = (state_30246[(12)]);
var inst_30155 = figwheel.client.file_reloading.expand_files.call(null,inst_30149);
var state_30246__$1 = state_30246;
var statearr_30307_30374 = state_30246__$1;
(statearr_30307_30374[(2)] = inst_30155);

(statearr_30307_30374[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30247 === (11))){
var state_30246__$1 = state_30246;
var statearr_30308_30375 = state_30246__$1;
(statearr_30308_30375[(2)] = null);

(statearr_30308_30375[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30247 === (9))){
var inst_30138 = (state_30246[(2)]);
var state_30246__$1 = state_30246;
var statearr_30309_30376 = state_30246__$1;
(statearr_30309_30376[(2)] = inst_30138);

(statearr_30309_30376[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30247 === (5))){
var inst_30108 = (state_30246[(7)]);
var inst_30109 = (state_30246[(8)]);
var inst_30111 = (inst_30109 < inst_30108);
var inst_30112 = inst_30111;
var state_30246__$1 = state_30246;
if(cljs.core.truth_(inst_30112)){
var statearr_30310_30377 = state_30246__$1;
(statearr_30310_30377[(1)] = (7));

} else {
var statearr_30311_30378 = state_30246__$1;
(statearr_30311_30378[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30247 === (14))){
var inst_30119 = (state_30246[(22)]);
var inst_30128 = cljs.core.first.call(null,inst_30119);
var inst_30129 = figwheel.client.file_reloading.eval_body.call(null,inst_30128,opts);
var inst_30130 = cljs.core.next.call(null,inst_30119);
var inst_30106 = inst_30130;
var inst_30107 = null;
var inst_30108 = (0);
var inst_30109 = (0);
var state_30246__$1 = (function (){var statearr_30312 = state_30246;
(statearr_30312[(32)] = inst_30129);

(statearr_30312[(7)] = inst_30108);

(statearr_30312[(8)] = inst_30109);

(statearr_30312[(9)] = inst_30107);

(statearr_30312[(10)] = inst_30106);

return statearr_30312;
})();
var statearr_30313_30379 = state_30246__$1;
(statearr_30313_30379[(2)] = null);

(statearr_30313_30379[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30247 === (45))){
var state_30246__$1 = state_30246;
var statearr_30314_30380 = state_30246__$1;
(statearr_30314_30380[(2)] = null);

(statearr_30314_30380[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30247 === (26))){
var inst_30159 = (state_30246[(19)]);
var inst_30163 = (state_30246[(23)]);
var inst_30165 = (state_30246[(26)]);
var inst_30167 = (state_30246[(24)]);
var inst_30162 = (state_30246[(25)]);
var inst_30182 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30184 = (function (){var all_files = inst_30159;
var res_SINGLEQUOTE_ = inst_30162;
var res = inst_30163;
var files_not_loaded = inst_30165;
var dependencies_that_loaded = inst_30167;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30159,inst_30163,inst_30165,inst_30167,inst_30162,inst_30182,state_val_30247,c__27624__auto__,map__30091,map__30091__$1,opts,before_jsload,on_jsload,reload_dependents,map__30092,map__30092__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30183){
var map__30315 = p__30183;
var map__30315__$1 = (((((!((map__30315 == null))))?(((((map__30315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30315):map__30315);
var namespace = cljs.core.get.call(null,map__30315__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30315__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30159,inst_30163,inst_30165,inst_30167,inst_30162,inst_30182,state_val_30247,c__27624__auto__,map__30091,map__30091__$1,opts,before_jsload,on_jsload,reload_dependents,map__30092,map__30092__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30185 = cljs.core.map.call(null,inst_30184,inst_30163);
var inst_30186 = cljs.core.pr_str.call(null,inst_30185);
var inst_30187 = figwheel.client.utils.log.call(null,inst_30186);
var inst_30188 = (function (){var all_files = inst_30159;
var res_SINGLEQUOTE_ = inst_30162;
var res = inst_30163;
var files_not_loaded = inst_30165;
var dependencies_that_loaded = inst_30167;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30159,inst_30163,inst_30165,inst_30167,inst_30162,inst_30182,inst_30184,inst_30185,inst_30186,inst_30187,state_val_30247,c__27624__auto__,map__30091,map__30091__$1,opts,before_jsload,on_jsload,reload_dependents,map__30092,map__30092__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30159,inst_30163,inst_30165,inst_30167,inst_30162,inst_30182,inst_30184,inst_30185,inst_30186,inst_30187,state_val_30247,c__27624__auto__,map__30091,map__30091__$1,opts,before_jsload,on_jsload,reload_dependents,map__30092,map__30092__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30189 = setTimeout(inst_30188,(10));
var state_30246__$1 = (function (){var statearr_30317 = state_30246;
(statearr_30317[(33)] = inst_30187);

(statearr_30317[(34)] = inst_30182);

return statearr_30317;
})();
var statearr_30318_30381 = state_30246__$1;
(statearr_30318_30381[(2)] = inst_30189);

(statearr_30318_30381[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30247 === (16))){
var state_30246__$1 = state_30246;
var statearr_30319_30382 = state_30246__$1;
(statearr_30319_30382[(2)] = reload_dependents);

(statearr_30319_30382[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30247 === (38))){
var inst_30199 = (state_30246[(16)]);
var inst_30217 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30199);
var state_30246__$1 = state_30246;
var statearr_30320_30383 = state_30246__$1;
(statearr_30320_30383[(2)] = inst_30217);

(statearr_30320_30383[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30247 === (30))){
var state_30246__$1 = state_30246;
var statearr_30321_30384 = state_30246__$1;
(statearr_30321_30384[(2)] = null);

(statearr_30321_30384[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30247 === (10))){
var inst_30119 = (state_30246[(22)]);
var inst_30121 = cljs.core.chunked_seq_QMARK_.call(null,inst_30119);
var state_30246__$1 = state_30246;
if(inst_30121){
var statearr_30322_30385 = state_30246__$1;
(statearr_30322_30385[(1)] = (13));

} else {
var statearr_30323_30386 = state_30246__$1;
(statearr_30323_30386[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30247 === (18))){
var inst_30153 = (state_30246[(2)]);
var state_30246__$1 = state_30246;
if(cljs.core.truth_(inst_30153)){
var statearr_30324_30387 = state_30246__$1;
(statearr_30324_30387[(1)] = (19));

} else {
var statearr_30325_30388 = state_30246__$1;
(statearr_30325_30388[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30247 === (42))){
var state_30246__$1 = state_30246;
var statearr_30326_30389 = state_30246__$1;
(statearr_30326_30389[(2)] = null);

(statearr_30326_30389[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30247 === (37))){
var inst_30212 = (state_30246[(2)]);
var state_30246__$1 = state_30246;
var statearr_30327_30390 = state_30246__$1;
(statearr_30327_30390[(2)] = inst_30212);

(statearr_30327_30390[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30247 === (8))){
var inst_30119 = (state_30246[(22)]);
var inst_30106 = (state_30246[(10)]);
var inst_30119__$1 = cljs.core.seq.call(null,inst_30106);
var state_30246__$1 = (function (){var statearr_30328 = state_30246;
(statearr_30328[(22)] = inst_30119__$1);

return statearr_30328;
})();
if(inst_30119__$1){
var statearr_30329_30391 = state_30246__$1;
(statearr_30329_30391[(1)] = (10));

} else {
var statearr_30330_30392 = state_30246__$1;
(statearr_30330_30392[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27624__auto__,map__30091,map__30091__$1,opts,before_jsload,on_jsload,reload_dependents,map__30092,map__30092__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27529__auto__,c__27624__auto__,map__30091,map__30091__$1,opts,before_jsload,on_jsload,reload_dependents,map__30092,map__30092__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27530__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27530__auto____0 = (function (){
var statearr_30331 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30331[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27530__auto__);

(statearr_30331[(1)] = (1));

return statearr_30331;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27530__auto____1 = (function (state_30246){
while(true){
var ret_value__27531__auto__ = (function (){try{while(true){
var result__27532__auto__ = switch__27529__auto__.call(null,state_30246);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27532__auto__;
}
break;
}
}catch (e30332){if((e30332 instanceof Object)){
var ex__27533__auto__ = e30332;
var statearr_30333_30393 = state_30246;
(statearr_30333_30393[(5)] = ex__27533__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30394 = state_30246;
state_30246 = G__30394;
continue;
} else {
return ret_value__27531__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27530__auto__ = function(state_30246){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27530__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27530__auto____1.call(this,state_30246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27530__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27530__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27530__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27530__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27530__auto__;
})()
;})(switch__27529__auto__,c__27624__auto__,map__30091,map__30091__$1,opts,before_jsload,on_jsload,reload_dependents,map__30092,map__30092__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27626__auto__ = (function (){var statearr_30334 = f__27625__auto__.call(null);
(statearr_30334[(6)] = c__27624__auto__);

return statearr_30334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27626__auto__);
});})(c__27624__auto__,map__30091,map__30091__$1,opts,before_jsload,on_jsload,reload_dependents,map__30092,map__30092__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27624__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30397,link){
var map__30398 = p__30397;
var map__30398__$1 = (((((!((map__30398 == null))))?(((((map__30398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30398):map__30398);
var file = cljs.core.get.call(null,map__30398__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5720__auto__,map__30398,map__30398__$1,file){
return (function (p1__30395_SHARP_,p2__30396_SHARP_){
if(cljs.core._EQ_.call(null,p1__30395_SHARP_,p2__30396_SHARP_)){
return p1__30395_SHARP_;
} else {
return false;
}
});})(link_href,temp__5720__auto__,map__30398,map__30398__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30401){
var map__30402 = p__30401;
var map__30402__$1 = (((((!((map__30402 == null))))?(((((map__30402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30402):map__30402);
var match_length = cljs.core.get.call(null,map__30402__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30402__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30400_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30400_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30404_SHARP_,p2__30405_SHARP_){
return cljs.core.assoc.call(null,p1__30404_SHARP_,cljs.core.get.call(null,p2__30405_SHARP_,key),p2__30405_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5718__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5718__auto__)){
var link = temp__5718__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5718__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5718__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_30406 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_30406);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_30406);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30407,p__30408){
var map__30409 = p__30407;
var map__30409__$1 = (((((!((map__30409 == null))))?(((((map__30409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30409.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30409):map__30409);
var on_cssload = cljs.core.get.call(null,map__30409__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__30410 = p__30408;
var map__30410__$1 = (((((!((map__30410 == null))))?(((((map__30410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30410):map__30410);
var files_msg = map__30410__$1;
var files = cljs.core.get.call(null,map__30410__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5720__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5720__auto__)){
var f_datas = temp__5720__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1557276013171
