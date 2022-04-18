class GoodsService {
  get = async () => {
    const settings = {
    //   mode: "no-cors",
      method: "GET",
    //   credentials: "include",
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin" : "*", 
        "Access-Control-Allow-Credentials" : true,
      },
    };


    return fetch("http://localhost:5000/goods", settings);
  };
}

export default GoodsService;
