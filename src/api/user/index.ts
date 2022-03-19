import feathers from '../../feathers';

export default {
  createUserFromInstantPriceId: (data: any) => {
    return feathers.service('users').create(data);
  },
};
