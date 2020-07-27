import ev from "./events.js";

ev.on("testeEvent", (obj) => {
  console.log("escutou aqui também");
});

ev.emit("testeEvent", "Evento emitido");
