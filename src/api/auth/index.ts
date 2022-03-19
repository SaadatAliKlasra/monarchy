import feathers from '../../feathers';

export default {
  login: (data: any) => {
    return feathers.authenticate({
      strategy: 'local',
      email: data.email,
      password: data.password,
    });
  },

  logout: () => {
    return feathers.logout();
  },
};
