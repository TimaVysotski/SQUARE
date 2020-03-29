import { createContext, useContext } from 'react';
import RootStore from './RootStore';

const StoreRoot = new RootStore();

export const StoreContext = createContext<RootStore>({} as RootStore);
export const StoreProvider = StoreContext.Provider;
export const useStore = (): RootStore => useContext(StoreContext);

export default StoreRoot;
