import Place from 'models/Place';
import AppError from '../../errors/AppError';
import knex from '../../database/connection';

interface ICreatePlaceRequest {
  ds_local: string;
  nr_assentos: number;
}

export default {
  async run({ ds_local, nr_assentos }: ICreatePlaceRequest): Promise<Place> {
    const findPlace = await knex('tb_local').where('ds_local', ds_local);

    if (findPlace.length > 0) {
      throw new AppError('Local já cadastrado.');
    }

    if (nr_assentos % 2 !== 0) {
      throw new AppError('Número de assentos deve ser par.');
    }

    await knex('tb_local').returning('*').insert({
      ds_local,
      nr_assentos,
    });

    return {
      ds_local,
      nr_assentos,
    };
  },
};
