const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
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
      user_posts: [],
    },
    actions: {
      login2: async (username, password) => {
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
      createPost: async (text, place, username) => {
        const store = getStore();
        let access_token = localStorage.getItem("access_token");
        let opt = {
          method: "POST",
          headers: { Authorization: `Bearer ${access_token}` },
          body: JSON.stringify({
            text: text,
            place_id: place,
          }),
        };
        try {
          const response = await fetch(
            `${store.base_url}/api/users/${username}/posts`, opt
          );
          if(response.status !==201) throw Error(response.status)
          const data = await response.json()
          const actions =  getActions();
          await actions.getUserPosts(username)
          return data
        } catch (error) {
          console.error(error);
        }
      },
      login: (username, password) => {
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
        fetch(
          "https://3001-cburibe-projectfinal-mpwtb6wqvam.ws-us38.gitpod.io/api/login",
          opt
        )
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            let store = getStore();
            setStore({ ...store, user: { ...data } });
            return data;
          })
          .catch((error) => console.error(error));
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
        fetch(
          "https://3001-cburibe-projectfinal-mpwtb6wqvam.ws-us38.gitpod.io/api/register",
          opt
        )
          .then((response) => {
            return response.json();
          })
          .catch((error) => console.error(error));
      },
      /* test: () => {
        fetch(
          "https://3001-cburibe-projectfinal-hg3gwnsaklg.ws-us38.gitpod.io/api/test"
        )
          .then((response) => response.text())
          .then((result) => console.log(result))
          .catch((error) => console.log("error", error));
      },
      getPeople: () => {
        fetch(
          "https://3001-cburibe-projectfinal-msxs2qh35ru.ws-us38.gitpod.io/api/peoples"
        )
          .then((response) => response.json()) // entonces la respuesta de la api pasa a formato json
          .then((objeto) => {
            console.log(objeto);
            setStore({
              people: objeto.results,
            });
          })
          .catch((error) => console.log("error", error));
      },
      enviarDatos: (e, mail, pass) => {
        e.preventDefault();
        console.log("mail", mail);
        console.log("pass", pass);

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          email: mail,
          password: pass,
        });

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch(
          "https://3001-cburibe-projectfinal-hg3gwnsaklg.ws-us38.gitpod.io/api/register",
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
            sessionStorage.setItem("token", result.token);
            setStore({ logged: true });
          })
          .c0atch((error) => console.log("error", error));
      },
      check: () => {
        let token = sessionStorage.getItem("token");
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        var requestOptions = {
          method: "GET",
          headers: myHeaders,
          redirect: "follow",
        };

        fetch(
          "https://3001-cburibe-projectfinal-hg3gwnsaklg.ws-us38.gitpod.io/api/privado",
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            if (result.usuario != undefined) {
              setStore({ logged: true });
              console.log(getStore());
            }
          })
          .catch((error) => console.log("error!!!!", error));
      },
 */ // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
