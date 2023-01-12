import { applyMiddleware, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import storage from "redux-persist/lib/storage";

import { rootReducer } from "./root-reducer";
import { rootWatcher } from "./sagas/root-watcher";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "root",
  storage,
  // whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  // rootReducer,
  persistedReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootWatcher);

export const persistor = persistStore(store);

export type TypeRootState = ReturnType<typeof rootReducer>;
