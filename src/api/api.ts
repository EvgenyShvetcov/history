import axios from "axios";
// import { ApplicationState, IncomingJson } from "./interfaces";

const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "http://localhost:3000",
};

export async function getChapters(): Promise<[]> {
  // let responce: IncomingJson | {} = {};
  try {
    const responce = await axios
      .get(`http://localhost:3000/subjects`, { headers: headers })
      .then((resp) => {
        console.log(resp, "resp");

        return resp;
      });
    return responce.data;
  } catch (e) {
    console.log(e);
    return [];
  }
}
