import { Request, Response } from 'express';

import createAuthenticationService from '../services/AuthenticationServices/CreateAuthenticationService';

export default {
  async store(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const createdAuthentication = await createAuthenticationService.run({
      email,
      password
    });

    return response.json(createdAuthentication);
  },
};
