import { goBack } from '../../slices/instantPriceSlice';
import store from '../../store';

export default () => {
  setTimeout(() => {
    store.dispatch(goBack());
    window?.scrollTo(0, 0);
  }, 100);
};
