const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      people: null,
      background: "white",
      initial: "white",
    },
    actions: {
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

      getMessage: () => {
        fetch("https://3001-cburibe-projectfinal-msxs2qh35ru.ws-us38.gitpod.io")
          .then((resp) => resp.json())
          .then((data) => setStore({ message: data.message }))
          .catch((error) =>
            console.log("Error loading message from backend", error)
          );
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
