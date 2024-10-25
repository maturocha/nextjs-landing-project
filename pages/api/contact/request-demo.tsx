import { NextApiRequest, NextApiResponse } from "next";
import { apiWrapper } from '@/helpers';

const Index =  async (req: NextApiRequest, res: NextApiResponse) => {

  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return
  }

  try {

    const body = req.body
    const response = await apiWrapper.post(req, `/contact/request-demo`, body);
    return res.json(response.data);
    

  } catch (error) {

    return res.status(400).json(error);  

  }

};

export default Index;