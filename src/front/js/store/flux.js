const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
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
          "https://3001-cburibe-projectfinal-hg3gwnsaklg.ws-us38.gitpod.io/api/login",
          opt
        )
          .then((response) => {
            return response.json();
          })
          .catch((error) => console.error(error));
      },
      register: async (username, password) => {
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
          "https://3001-cburibe-projectfinal-hg3gwnsaklg.ws-us38.gitpod.io/api/register",
          opt
        )
          .then((response) => {
            return response.json();
          })
          .catch((error) => console.error(error));
      },
      // Use getActions to call a function within a fuction
      /* exampleFunction: () => {
        getActions().changeColor(0, "green");
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
          "https://3001-cburibe-projectfinal-hg3gwnsaklg.ws-us38.gitpod.io/api/token",
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
      }, */
      // Use getActions to call a function within a fuction
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

        //reset the global s3tore
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
