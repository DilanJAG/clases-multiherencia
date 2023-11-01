// Clase base Vehiculo
class Vehiculo {
    constructor(private marca: string, private modelo: string) {}
  
    mostrarInformacion() {
      console.log(`Marca: ${this.marca}`);
      console.log(`Modelo: ${this.modelo}`);
    }
  }
  
  // Clases derivadas VehiculoTerrestre
  class VehiculoTerrestre extends Vehiculo {
    constructor(marca: string, modelo: string, private tipo: string) {
      super(marca, modelo);
    }
  
    mostrarInformacion() {
      super.mostrarInformacion();
      console.log(`Tipo: ${this.tipo}`);
    }
  }
  
  class Camion extends VehiculoTerrestre {
    constructor(marca: string, modelo: string) {
      super(marca, modelo, "Camión");
    }
  }
  
  class Camioneta extends VehiculoTerrestre {
    constructor(marca: string, modelo: string) {
      super(marca, modelo, "Camioneta");
    }
  }
  
  class Automovil extends VehiculoTerrestre {
    constructor(marca: string, modelo: string) {
      super(marca, modelo, "Automóvil");
    }
  }
  
  // Clases derivadas de VehiculoMaritimo
  class VehiculoMaritimo extends Vehiculo {
    constructor(marca: string, modelo: string, private tipo: string) {
      super(marca, modelo);
    }
  
    mostrarInformacion() {
      super.mostrarInformacion();
      console.log(`Tipo: ${this.tipo}`);
    }
  }
  
  class Barco extends VehiculoMaritimo {
    constructor(marca: string, modelo: string) {
      super(marca, modelo, "Barco");
    }
  }
  
  class Yate extends VehiculoMaritimo {
    constructor(marca: string, modelo: string) {
      super(marca, modelo, "Yate");
    }
  }
  
  // Clases derivadas VehiculoAereo
  class VehiculoAereo extends Vehiculo {
    constructor(marca: string, modelo: string, private tipo: string) {
      super(marca, modelo);
    }
  
    mostrarInformacion() {
      super.mostrarInformacion();
      console.log(`Tipo: ${this.tipo}`);
    }
  }
  
  class Avion extends VehiculoAereo {
    constructor(marca: string, modelo: string) {
      super(marca, modelo, "Avión");
    }
  }
  
  class Avioneta extends VehiculoAereo {
    constructor(marca: string, modelo: string) {
      super(marca, modelo, "Avioneta");
    }
  }
  
  // instancias de las clases y mostrar la información
  const camion = new Camion("Hino", "FH16");
  camion.mostrarInformacion();
  
  const camioneta = new Camioneta("Ford", "Ranger");
  camioneta.mostrarInformacion();
  
  const automovil = new Automovil("Mazda", "Cx3");
  automovil.mostrarInformacion();
  
  const barco = new Barco("Astondoa", "82 GLX 8");
  barco.mostrarInformacion();
  
  const yate = new Yate("Azimut", "S7");
  yate.mostrarInformacion();
  
  const avion = new Avion("Airbus", "747");
  avion.mostrarInformacion();
  
  const avioneta = new Avioneta("Cessna", "172");
  avioneta.mostrarInformacion();