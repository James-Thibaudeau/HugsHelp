(ns test-project.subs
  (:require
   [re-frame.core :as re-frame]))

(re-frame/reg-sub
 ::name
 (fn [db]
   (:name db)))

(re-frame/reg-sub
  ::series
  (fn [db args]
    (js/console.log "series-id:" args)
    (get-in db [:series :series2])))

(re-frame/reg-sub
  ::status
  :<- [::series]
  (fn [series args]
    (js/console.log series args)
    (:status series)))