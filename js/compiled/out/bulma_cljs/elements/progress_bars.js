// Compiled by ClojureScript 1.10.520 {}
goog.provide('bulma_cljs.elements.progress_bars');
goog.require('cljs.core');
bulma_cljs.elements.progress_bars.base_prog_bar = (function bulma_cljs$elements$progress_bars$base_prog_bar(size,color,value,max){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress.progress","progress.progress",370108772),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [size,color], null),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"max","max",61366548),max], null),value], null);
});
bulma_cljs.elements.progress_bars.sm_prog_bar = (function bulma_cljs$elements$progress_bars$sm_prog_bar(color,value,max){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [bulma_cljs.elements.progress_bars.base_prog_bar,"is-small",color,value,max], null);
});
bulma_cljs.elements.progress_bars.prog_bar = (function bulma_cljs$elements$progress_bars$prog_bar(color,value,max){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [bulma_cljs.elements.progress_bars.base_prog_bar,null,color,value,max], null);
});
bulma_cljs.elements.progress_bars.md_prog_bar = (function bulma_cljs$elements$progress_bars$md_prog_bar(color,value,max){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [bulma_cljs.elements.progress_bars.base_prog_bar,"is-medium",color,value,max], null);
});
bulma_cljs.elements.progress_bars.lg_prog_bar = (function bulma_cljs$elements$progress_bars$lg_prog_bar(color,value,max){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [bulma_cljs.elements.progress_bars.base_prog_bar,"is-large",color,value,max], null);
});

//# sourceMappingURL=progress_bars.js.map?rel=1557276006566
