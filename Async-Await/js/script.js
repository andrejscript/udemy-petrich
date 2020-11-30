'use strict';

//Async / Await


const postData = async (url, data) => {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: data,
    });
    return await res.json;
  };

  postData('server.php', obj.json);