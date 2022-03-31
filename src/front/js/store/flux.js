const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      base_url:
        "https://3001-cburibe-projectfinal-hg3gwnsaklg.ws-us38.gitpod.io",
      people: null,
      background: "white",
      initial: "white",
      user: {
        email: "",
        username: "",
        number_phone: "",
      },
      user_posts: [],
      aux_photo: null,
    },
    actions: {
      login: async (username, password) => {
        let store = getStore();
        let opt = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        };
        let response = await fetch(`${store.base_url}/api/login`, opt);
        if (response.status !== 200) throw new Error(response.message);
        let data = await response.json();
        localStorage.setItem("access_token", data.access_token);
        return data;
      },
      userInfo: async () => {
        let store = getStore();
        let access_token = localStorage.getItem("access_token");
        let opt = {
          method: "GET",
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        };
        try {
          const response = await fetch(`${store.base_url}/api/users/info`, opt);
          if (response.status !== 200)
            throw new Error(response.status, "error");
          const data = await response.json();
          setStore({
            user: { ...data },
          });
        } catch (error) {
          console.error(error);
        }
      },
      getUserPosts: async (username) => {
        const store = getStore();
        let access_token = localStorage.getItem("access_token");

        let opt = {
          method: "GET",
          headers: { Authorization: `Bearer ${access_token}` },
        };
        try {
          const response = await fetch(
            `${store.base_url}/api/users/${username}/posts`,
            opt
          );
          if (response.status !== 200) throw new Error(response.status);
          const data = await response.json();
          setStore({
            ...store,
            user_posts: [...data],
          });
          return data;
        } catch (error) {
          console.error(error);
        }
      },
      convertBase64: (file) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
          setStore({
            aux_photo: reader.result,
          });
          console.log(reader.result);
        };
      },
      createPost: async (text, username) => {
        const store = getStore();
        let access_token = localStorage.getItem("access_token");
        let opt = {
          method: "POST",
          headers: {
            Authorization: `Bearer ${access_token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text: text,
          }),
        };
        try {
          const response = await fetch(
            `${store.base_url}/api/users/${username}/posts`,
            opt
          );
          if (response.status !== 201) throw Error(response.status);
          const data = await response.json();
          const actions = getActions();
          await actions.getUserPosts(username);
          return data;
        } catch (error) {
          console.error(error);
        }
      },
      createResource: async (base64, type, post_id) => {
        const store = getStore();
        let access_token = localStorage.getItem("access_token");
        let opt = {
          method: "POST",
          headers: {
            Authorization: `Bearer ${access_token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            base64resource: base64,
            resource_type: type,
            post_id: post_id,
          })
        };
        try {
          const response = await fetch(`${store.base_url}/`)
        } catch (error) {
          console.error("error in create resource", error);
        }
      },
      logout: () => {
        setStore({
          base_url:
            "https://3001-cburibe-projectfinal-mpwtb6wqvam.ws-us38.gitpod.io",
          people: null,
          background: "white",
          initial: "white",
          user: {
            email: "",
            username: "",
            number_phone: "",
          },
        });
        localStorage.removeItem("access_token");
      },
      register: async (email, username, password, number_phone) => {
        const store = getStore();
        let opt = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            username: username,
            password: password,
            number_phone: number_phone,
            is_active: true,
          }),
        };
        fetch(`${store.base_url}/api/register`, opt)
          .then((response) => {
            return response.json();
          })
          .catch((error) => console.error(error));
      },
    },
  };
};

export default getState;
