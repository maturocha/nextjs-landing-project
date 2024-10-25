import { NextApiRequest, NextApiResponse } from "next";
import { apiWrapper } from '@/helpers';


const Index = async (req: NextApiRequest, res: NextApiResponse) => {

  try {

    const body = req.body
    const response = await apiWrapper.post(req, `/contact/inscription`, body);
    return res.json(response.data);
    

  } catch (error) {

    return res.status(400).json(error);  

  }

};

export default Index;