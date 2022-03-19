import { goNext } from '../../slices/instantPriceSlice';
import store from '../../store';

export default () => {
  setTimeout(() => {
    store.dispatch(goNext());
    window?.scrollTo(0, 0);
  }, 800);
};
