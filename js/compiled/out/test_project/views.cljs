(ns test-project.views
  (:require
    [clojure.string :as s]
    [reagent.core :as reagent]
    [bulma-cljs.core :as b]
    [test-project.tic-tac-toe :as ttt]
    [test-project.elevator :as elevator]))

(def games [:elevator :tic-tac-toe])


(defn main-panel []
  (let [game (reagent/atom :elevator)]
    (fn []
      [:div
       [b/navbar
        [:div.navbar-brand
         [:i {:class "fas fa-gamepad fa-3x"}]
         [b/navbar-burger]]
        [b/navbar-menu
         [b/navbar-start
          (map (fn [g]
                 ^{:key g} [b/navbar-item
                            (s/capitalize (name g))
                            {:on-click #(reset! game g)}])
               games)]]]
       (case @game
         :elevator
         [elevator/elevator]
         :tic-tac-toe
         [ttt/tic-tac-toe])])))



