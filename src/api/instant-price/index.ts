import feathers from '../../feathers';

export interface InstantPrice {
  //step1
  renovationType: String;
  //step20
  homeType: String;
  //step21
  homeStoreys: String;

  homeSize: String;

  //roofing
  //step3
  roofPitchType: String;
  //step4
  roofMaterial: String;

  //siding2
  //step4
  sidingMaterial: String;

  //step5
  firstName: String;
  emailAddress: String;
  phoneNumber: String;
  address: String;
}

export default {
  create: (data: InstantPrice) => {
    return feathers.service('instant-price').create(data);
  },

  get: (id: string) => {
    return feathers.service('instant-price').get(id);
  },

  pricing: (id: string) => {
    return feathers.service('instant-price').get(id, {
      query: {
        pricing: true,
      },
    });
  },
};
