import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const axios = require("axios");

export const apiWrapper = {
  get,
  post,
  //put,
  delete: _delete,
};

async function get(req: NextApiRequest, url: string, params = {}) {


  const headers = { "Content-Type": "application/json" };
  const queryParams = { ...params };

  const response = await axios.get(`${API_URL}${url}`, {
    params: queryParams,
    headers: headers,
  });

  return response;
}

async function post(req: NextApiRequest, url: string, body = {}, params = {}) {
  try {
    

    const headers = { "Content-Type": "application/json" };
    const queryParams = {
      ...params
    };



    const response = await axios.post(`${API_URL}${url}`, body, {
      params: queryParams,
      headers: headers,
    });

    return response;
  } catch (error) {
    console.log(error);
    
  }
}



// prefixed with underscored because delete is a reserved word in javascript
async function _delete(
  req: NextApiRequest,
  url: string,
  body = {},
  params = {}
) {

  const headers = { "Content-Type": "application/json" };
  const queryParams = { ...params };

  const response = await axios.delete(`${API_URL}${url}`, {
    params: queryParams,
    data: body,
    headers: headers,
  });

  return response;
}

// helper functions



function handleResponse(response: any) {
  const data = response.data;

  return data;
}

function handleError(err: any) {
  const response = err.response;

  // if ([401, 403].includes(response.status)) {
  //     // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
  //     userService.logout();
  // }

  const error = (response.data && response.data.message) || response.statusText;

  throw new Error(error);
}
