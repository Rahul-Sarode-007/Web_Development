let x = {
  name: "Rahul",
  Company: "Rudra",
  Location: "Bandra",
  Greet: function () {
    console.log(this);
    console.log("Good Morning", this.name);

    setTimeout(function () {
      console.log(this);
      console.log("Good Morning", this.name);
    }, 2000);

    setTimeout(() => {
      console.log(this);
      console.log("Good Morning", this.name);
    }, 2000);
  },
};

x.Greet();
